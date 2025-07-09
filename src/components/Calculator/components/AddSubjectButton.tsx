import React from 'react';
import { PlusCircle } from 'lucide-react';
import { PresetMode } from '../../../types';

interface AddSubjectButtonProps {
  mode: PresetMode;
  onClick: () => void;
}

export const AddSubjectButton: React.FC<AddSubjectButtonProps> = ({ mode, onClick }) => {
  if (mode !== 'custom') return null;

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
    >
      <PlusCircle className="w-6 h-6" />
      <span>Add Module</span>
    </button>
  );
};