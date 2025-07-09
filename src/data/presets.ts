import { PresetSubject } from '../types';

export const presets: Record<string, PresetSubject[]> = {
  Y1S1: [
    { name: 'IP', credits: 4 },
    { name: 'DCN', credits: 4 },
    { name: 'MC', credits: 4 },
    { name: 'FC', credits: 4 },
  ],
  Y1S2: [
    { name: 'DM', credits: 4 },
    { name: 'DSA', credits: 4 },
    { name: 'SE', credits: 4 },
    { name: 'TW', credits: 4 },
  ],
  Y2S1: [
    { name: 'SE', credits: 4 },
    { name: 'OOP', credits: 4 },
    { name: 'DMS', credits: 4 },
    { name: 'CN', credits: 4 },
    { name: 'OSSA', credits: 4 },
  ],
};