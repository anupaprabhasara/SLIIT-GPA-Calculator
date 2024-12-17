import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string | number; label: string | number }[];
}

export const Select: React.FC<SelectProps> = ({ options, className = '', ...props }) => {
  return (
    <select
      className={`w-full bg-black/60 border border-purple-500/30 rounded-lg 
        px-1 sm:px-2 py-1.5 sm:py-2 text-white 
        focus:outline-none focus:ring-2 focus:ring-purple-500/50 
        hover:bg-black/80 transition-colors text-center appearance-none cursor-pointer
        text-sm
        [&>option]:bg-black/90 [&>option]:text-white
        [&>option:hover]:bg-purple-900/60 [&>option:checked]:bg-purple-900/60
        [&>option]:border-b [&>option]:border-purple-500/20 ${className}`}
      {...props}
    >
      {options.map(option => (
        <option 
          key={option.value} 
          value={option.value}
          className="py-1 text-left border-b border-purple-500/20 last:border-b-0"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};