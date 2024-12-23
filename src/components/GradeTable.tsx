import React from 'react';
import { Table } from 'lucide-react';
import { grades } from '../data/grades';

export const GradeTable: React.FC = () => {
  return (
    <div className="bg-black/80 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 shadow-xl glow-border h-fit min-w-[300px] overflow-x-auto">
      <div className="flex items-center gap-2 mb-4">
        <Table className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
        <h2 className="text-lg sm:text-xl font-bold text-white">Grading Scale</h2>
      </div>
      <div className="w-full min-w-[280px]">
        <table className="w-full text-xs sm:text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-black/60 text-purple-300">
            <tr>
              <th className="px-3 sm:px-4 py-2 sm:py-3 rounded-tl-lg">Grade</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3">GPA</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 rounded-tr-lg">Marks</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((item) => (
              <tr
                key={item.grade}
                className="border-b border-purple-900/30 hover:bg-black/40 transition-colors"
              >
                <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium">{item.grade}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3">{item.gpa.toFixed(1)}</td>
                <td className="px-3 sm:px-4 py-2 sm:py-3">{item.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};