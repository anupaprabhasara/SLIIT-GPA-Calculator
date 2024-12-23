import React from 'react';
import { Subject } from '../../types';
import { calculateGPA } from '../../utils/gpaCalculator';
import { ClipboardList } from 'lucide-react';

interface SummaryBoxProps {
  subjects: Subject[];
}

export const SummaryBox: React.FC<SummaryBoxProps> = ({ subjects }) => {
  const gpa = calculateGPA(subjects);
  const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);
  const validSubjects = subjects.filter(subject => subject.name.trim() !== '');

  const getGPAClass = (gpa: number): string => {
    if (gpa >= 3.7) return 'text-green-400';
    if (gpa >= 3.0) return 'text-blue-400';
    if (gpa >= 2.0) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="mt-8 bg-black/60 p-6 rounded-xl border border-purple-500/20 glow-border">
      <div className="flex items-center gap-2 mb-4">
        <ClipboardList className="w-6 h-6 text-purple-400" />
        <h3 className="text-lg font-bold text-white">Summary</h3>
      </div>
      
      <div className="space-y-4">
        {validSubjects.length > 0 && (
          <div>
            <table className="w-full text-sm">
              <thead className="bg-purple-500/10">
                <tr>
                  <th className="py-2 px-3 text-left text-purple-300 font-medium">Module Name</th>
                  <th className="py-2 px-3 text-center text-purple-300 font-medium w-24">Credits</th>
                  <th className="py-2 px-3 text-center text-purple-300 font-medium w-24">Grade</th>
                </tr>
              </thead>
              <tbody>
                {validSubjects.map((subject) => (
                  <tr key={subject.id} className="border-t border-purple-500/10">
                    <td className="py-2 px-3 text-white">{subject.name}</td>
                    <td className="py-2 px-3 text-white text-center">{subject.credits}</td>
                    <td className="py-2 px-3 text-white text-center">{subject.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-purple-500/20">
          <div>
            <div className="text-sm text-purple-300">Total Modules</div>
            <div className="text-lg font-medium text-white">{validSubjects.length}</div>
          </div>
          <div>
            <div className="text-sm text-purple-300">Total Credits</div>
            <div className="text-lg font-medium text-white">{totalCredits}</div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-purple-500/20">
          <div className="flex justify-between items-center">
            <span className="text-purple-300 sm:text-purple-300">Cumulative GPA</span>
            <span className={`text-2xl font-bold ${getGPAClass(gpa)}`}>
              {gpa.toFixed(2)}
            </span>
          </div>
          <div className="mt-2 text-sm text-purple-300/70 text-right">
            {gpa >= 3.7 ? 'Dean\'s List' :
             gpa >= 3.0 ? 'Excellent' :
             gpa >= 2.0 ? 'Pass' : 'Below Pass Grade'}
          </div>
        </div>
      </div>
    </div>
  );
};