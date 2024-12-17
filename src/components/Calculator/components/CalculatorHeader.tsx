import React from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export const CalculatorHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <CalcIcon className="w-6 h-6 text-purple-400" />
      <h2 className="text-xl font-bold text-white">GPA Calculator</h2>
    </div>
  );
};