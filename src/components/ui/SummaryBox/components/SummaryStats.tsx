import React from 'react';
import { Subject } from '../../../../types';

interface SummaryStatsProps {
  subjects: Subject[];
}

export const SummaryStats: React.FC<SummaryStatsProps> = ({ subjects }) => {
  const validSubjects = subjects.filter(subject => subject.name.trim() !== '');
  const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);

  return (
    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-purple-500/20">
      <div>
        <div className="text-sm text-purple-300">Total Modules</div>
        <div className="text-lg font-medium text-white">{validSubjects.length}</div>
      </div>
      <div>
        <div className="text-sm text-purple-300">Total Credits</div>
        <div className="text-lg font-medium text-white">{totalCredits}</div>
      </div>
    </div>
  );
};