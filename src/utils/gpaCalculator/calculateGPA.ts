import { Subject } from '../../types';
import { getGPAValue } from './getGPAValue';

export const calculateGPA = (subjects: Subject[]): number => {
  const totalPoints = subjects.reduce((sum, subject) => 
    sum + (subject.credits * getGPAValue(subject.grade)), 0);
  const totalCredits = subjects.reduce((sum, subject) => 
    sum + subject.credits, 0);
  return totalCredits === 0 ? 0 : Number((totalPoints / totalCredits).toFixed(2));
};