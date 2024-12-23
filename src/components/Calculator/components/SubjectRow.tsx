import React from 'react';
import { MinusCircle } from 'lucide-react';
import { Subject } from '../../../types';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';

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
    <div className="mb-0.5 grid grid-cols-[1.5fr,70px,70px,40px] sm:grid-cols-[1fr,100px,100px,40px] gap-2 sm:gap-4 items-center">
      <Input
        type="text"
        placeholder="Module name"
        value={subject.name}
        onChange={(e) => onUpdate(subject.id, 'name', e.target.value)}
        className="ml-0.5 text-sm w-full min-w-0"
      />
      <div className="flex justify-center">
        <Select
          value={subject.credits}
          onChange={(e) => onUpdate(subject.id, 'credits', Number(e.target.value))}
          options={creditOptions}
          className="text-sm w-full min-w-0"
        />
      </div>
      <div className="flex justify-center">
        <Select
          value={subject.grade}
          onChange={(e) => onUpdate(subject.id, 'grade', e.target.value)}
          options={gradeOptions}
          className="text-sm w-full min-w-0"
        />
      </div>
      <button
        onClick={() => onRemove(subject.id)}
        className="text-red-400 hover:text-red-300 transition-colors flex items-center justify-center"
        aria-label="Remove subject"
      >
        <MinusCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};