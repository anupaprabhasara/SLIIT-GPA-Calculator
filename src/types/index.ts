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