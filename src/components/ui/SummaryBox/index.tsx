import React from 'react';
import { Subject } from '../../../types';
import { SummaryHeader } from './components/SummaryHeader';
import { SubjectsTable } from './components/SubjectsTable';
import { SummaryStats } from './components/SummaryStats';
import { GPADisplay } from './components/GPADisplay';

interface SummaryBoxProps {
  subjects: Subject[];
}

export const SummaryBox: React.FC<SummaryBoxProps> = ({ subjects }) => {
  return (
    <div className="mt-6 sm:mt-8 bg-black/60 p-4 sm:p-6 rounded-xl border border-purple-500/20 glow-border overflow-x-auto">
      <SummaryHeader />
      <div className="space-y-4 min-w-[280px]">
        <SubjectsTable subjects={subjects} />
        <SummaryStats subjects={subjects} />
        <GPADisplay subjects={subjects} />
      </div>
    </div>
  );
};