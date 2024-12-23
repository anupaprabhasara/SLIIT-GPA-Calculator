import { grades } from '../../data/grades';

export const getGPAValue = (grade: string): number => {
  const gradeInfo = grades.find(g => g.grade === grade);
  return gradeInfo?.gpa || 0;
};