import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', disabled, ...props }) => {
  return (
    <input
      className={`w-full border border-purple-500/30 
        rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-white placeholder-purple-300/50 
        focus:outline-none focus:ring-2 focus:ring-purple-500/50
        transition-colors text-sm ${
          disabled 
            ? 'bg-gray-800/60 text-gray-400 cursor-not-allowed' 
            : 'bg-black/60 hover:bg-black/80'
        } ${className}`}
      disabled={disabled}
      {...props}
    />
  );
};