export interface Subject {
  id: number;
  name: string;
  credits: number;
  grade: string;
}

export interface GradeInfo {
  grade: string;
  gpa: number;
  range: string;
}

export type PresetMode = 'custom' | 'Y1S1N' | 'Y1S1O' | 'Y1S2N' | 'Y1S2O' | 'Y2S1O' | 'Y2S2O' | 'Y1S2' | 'Y2S1' | 'Y2S2';

export interface PresetSubject {
}