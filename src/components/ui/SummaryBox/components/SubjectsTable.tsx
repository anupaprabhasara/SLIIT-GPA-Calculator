import React from 'react';
import { Subject } from '../../../../types';

interface SubjectsTableProps {
  subjects: Subject[];
}

export const SubjectsTable: React.FC<SubjectsTableProps> = ({ subjects }) => {
  const validSubjects = subjects.filter(subject => subject.name.trim() !== '');

  if (validSubjects.length === 0) return null;

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="min-w-[320px] px-4 sm:px-0">
        <table className="w-full text-sm">
          <thead className="bg-purple-500/10">
            <tr>
              <th className="py-2 px-2 sm:px-3 text-left text-xs sm:text-sm text-purple-300 font-medium">Module Name</th>
              <th className="py-2 px-2 sm:px-3 text-center text-xs sm:text-sm text-purple-300 font-medium w-[70px] sm:w-24">Credits</th>
              <th className="py-2 px-2 sm:px-3 text-center text-xs sm:text-sm text-purple-300 font-medium w-[70px] sm:w-24">Grade</th>
            </tr>
          </thead>
          <tbody>
            {validSubjects.map((subject) => (
              <tr key={subject.id} className="border-t border-purple-500/10">
                <td className="py-2 px-2 sm:px-3 text-sm text-white">{subject.name}</td>
                <td className="py-2 px-2 sm:px-3 text-sm text-white text-center">{subject.credits}</td>
                <td className="py-2 px-2 sm:px-3 text-sm text-white text-center">{subject.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};