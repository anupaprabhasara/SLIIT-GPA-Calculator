import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full bg-black/60 border border-purple-500/30 
        rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-white placeholder-purple-300/50 
        focus:outline-none focus:ring-2 focus:ring-purple-500/50
        hover:bg-black/80 transition-colors text-sm ${className}`}
      {...props}
    />
  );
};