import React from 'react';
import { useSubjects } from './Calculator/hooks/useSubjects';
import { CalculatorHeader } from './Calculator/components/CalculatorHeader';
import { SubjectList } from './Calculator/components/SubjectList';
import { AddSubjectButton } from './Calculator/components/AddSubjectButton';
import { SummaryBox } from './ui/SummaryBox';

export const Calculator: React.FC = () => {
  const { subjects, addSubject, removeSubject, updateSubject } = useSubjects();

  return (
    <div className="w-full">
      <div className="bg-black/90 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 shadow-xl glow-border">
        <CalculatorHeader />
        <SubjectList
          subjects={subjects}
          onUpdate={updateSubject}
          onRemove={removeSubject}
        />
        <div className="flex justify-between items-center mt-4 sm:mt-6">
          <AddSubjectButton onClick={addSubject} />
        </div>
        <SummaryBox subjects={subjects} />
      </div>
    </div>
  );
};