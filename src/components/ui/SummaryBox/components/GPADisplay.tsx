import React from 'react';
import { Subject } from '../../../../types';
import { calculateGPA } from '../../../../utils/gpaCalculator';

interface GPADisplayProps {
  subjects: Subject[];
}

export const GPADisplay: React.FC<GPADisplayProps> = ({ subjects }) => {
  const gpa = calculateGPA(subjects);

  const getGPAClass = (gpa: number): string => {
    if (gpa >= 3.7) return 'text-green-400';
    if (gpa >= 3.0) return 'text-blue-400';
    if (gpa >= 2.0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getGPAClassification = (gpa: number): string => {
    if (gpa >= 3.7) return 'First Class';
    if (gpa >= 3.3) return 'Upper Second Class';
    if (gpa >= 3.0) return 'Lower Second Class';
    if (gpa >= 2.0) return 'Pass';
    return 'Below Pass Grade';
  };

  return (
    <div className="pt-4 border-t border-purple-500/20">
      <div className="flex justify-between items-center">
        <span className="text-purple-300">Final GPA</span>
        <span className={`text-2xl font-bold ${getGPAClass(gpa)}`}>
          {gpa.toFixed(2)}
        </span>
      </div>
      <div className="mt-2 text-sm text-purple-300/70 text-right">
        {getGPAClassification(gpa)}
      </div>
    </div>
  );
};