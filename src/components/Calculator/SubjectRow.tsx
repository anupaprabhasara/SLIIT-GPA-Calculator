import React from 'react';
import { MinusCircle } from 'lucide-react';
import { Subject } from '../../types';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

interface SubjectRowProps {
  subject: Subject;
  creditOptions: Array<{ value: number; label: number }>;
  gradeOptions: Array<{ value: string; label: string }>;
  onUpdate: (id: number, field: keyof Subject, value: string | number) => void;
  onRemove: (id: number) => void;
}

export const SubjectRow: React.FC<SubjectRowProps> = ({
  subject,
  creditOptions,
  gradeOptions,
  onUpdate,
  onRemove,
}) => {
  return (
    <div className="grid grid-cols-[1fr,100px,100px,40px] gap-4 items-center">
      <Input
        type="text"
        placeholder="Enter module name"
        value={subject.name}
        onChange={(e) => onUpdate(subject.id, 'name', e.target.value)}
      />
      <div className="flex justify-center">
        <Select
          value={subject.credits}
          onChange={(e) => onUpdate(subject.id, 'credits', Number(e.target.value))}
          options={creditOptions}
        />
      </div>
      <div className="flex justify-center">
        <Select
          value={subject.grade}
          onChange={(e) => onUpdate(subject.id, 'grade', e.target.value)}
          options={gradeOptions}
        />
      </div>
      <button
        onClick={() => onRemove(subject.id)}
        className="text-red-400 hover:text-red-300 transition-colors"
      >
        <MinusCircle className="w-6 h-6" />
      </button>
    </div>
  );
};