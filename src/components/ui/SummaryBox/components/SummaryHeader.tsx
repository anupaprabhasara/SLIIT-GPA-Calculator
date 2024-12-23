import React from 'react';
import { ClipboardList } from 'lucide-react';

export const SummaryHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <ClipboardList className="w-6 h-6 text-purple-400" />
      <h3 className="text-lg font-bold text-white">Summary</h3>
    </div>
  );
};