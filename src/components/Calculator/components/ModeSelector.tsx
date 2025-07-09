import React from 'react';
import { PresetMode } from '../../../types';

interface ModeSelectorProps {
  currentMode: PresetMode;
  onModeChange: (mode: PresetMode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onModeChange }) => {
  const modes: { key: PresetMode; label: string; description: string }[] = [
    { key: 'custom', label: 'Custom', description: 'Add your own modules' },
    { key: 'Y1S1', label: 'Y1S1', description: 'Year 1 Semester 1' },
    { key: 'Y1S2', label: 'Y1S2', description: 'Year 1 Semester 2' },
    { key: 'Y2S1', label: 'Y2S1', description: 'Year 2 Semester 1' },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-purple-300 mb-3">Select Mode</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {modes.map((mode) => (
          <button
            key={mode.key}
            onClick={() => onModeChange(mode.key)}
            className={`p-3 rounded-lg border transition-all text-sm ${
              currentMode === mode.key
                ? 'bg-purple-600/30 border-purple-400 text-white'
                : 'bg-black/40 border-purple-500/30 text-purple-300 hover:bg-black/60 hover:border-purple-400/50'
            }`}
          >
            <div className="font-medium">{mode.label}</div>
            <div className="text-xs opacity-75 mt-1">{mode.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};