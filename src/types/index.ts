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

export type PresetMode = 'custom' | 'Y1S1' | 'Y1S2' | 'Y2S1';

export interface PresetSubject {
}