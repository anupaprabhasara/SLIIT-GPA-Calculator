import React from 'react';
import { useSubjects } from './hooks/useSubjects';
import { CalculatorHeader } from './components/CalculatorHeader';
import { SubjectList } from './components/SubjectList';
import { AddSubjectButton } from './components/AddSubjectButton';
import { SummaryBox } from '../ui/SummaryBox';

export const Calculator: React.FC = () => {
  const { subjects, addSubject, removeSubject, updateSubject } = useSubjects();

  return (
    <div className="w-full">
      <div className="bg-black/90 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 shadow-xl glow-border">
        <CalculatorHeader />
        <SubjectList
          subjects={subjects}
          onUpdate={updateSubject}
          onRemove={removeSubject}
        />
        <div className="flex justify-between items-center mt-6">
          <AddSubjectButton onClick={addSubject} />
        </div>
        <SummaryBox subjects={subjects} />
      </div>
    </div>
  );
};