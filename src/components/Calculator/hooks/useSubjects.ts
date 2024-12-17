import { useState } from 'react';
import { Subject } from '../../../types';

export function useSubjects() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: 1, name: '', credits: 3, grade: 'A' }
  ]);

  const addSubject = () => {
    setSubjects([...subjects, { 
      id: subjects.length + 1, 
      name: '', 
      credits: 3, 
      grade: 'A' 
    }]);
  };

  const removeSubject = (id: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(subject => subject.id !== id));
    }
  };

  const updateSubject = (id: number, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map(subject => 
      subject.id === id ? { ...subject, [field]: value } : subject
    ));
  };

  return {
    subjects,
    addSubject,
    removeSubject,
    updateSubject
  };
}