import React from 'react';
import { GraduationCap } from 'lucide-react';

export const PageHeader: React.FC = () => {
  return (
    <div className="text-center mb-6 sm:mb-12">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400" />
        <h1 className="text-2xl sm:text-4xl font-bold text-white glow-text">
          SLIIT GPA Calculator
        </h1>
      </div>
      <p className="text-sm sm:text-base text-purple-300 max-w-2xl mx-auto px-4">
        Calculate your GPA easily using this calculator. Add your subjects, credits, and grades to get your current GPA.
      </p>
    </div>
  );
};