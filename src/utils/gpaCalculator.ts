import { Subject } from '../types';
import { grades } from '../data/grades';

export const getGPAValue = (grade: string): number => {
  const gradeInfo = grades.find(g => g.grade === grade);
  return gradeInfo?.gpa || 0;
};

export const calculateGPA = (subjects: Subject[]): number => {
  const totalPoints = subjects.reduce((sum, subject) => 
    sum + (subject.credits * getGPAValue(subject.grade)), 0);
  const totalCredits = subjects.reduce((sum, subject) => 
    sum + subject.credits, 0);
  return totalCredits === 0 ? 0 : Number((totalPoints / totalCredits).toFixed(2));
};