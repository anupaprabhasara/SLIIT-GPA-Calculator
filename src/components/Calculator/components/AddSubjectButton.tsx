import React from 'react';
import { PlusCircle } from 'lucide-react';

interface AddSubjectButtonProps {
  onClick: () => void;
}

export const AddSubjectButton: React.FC<AddSubjectButtonProps> = ({ onClick }) => {
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