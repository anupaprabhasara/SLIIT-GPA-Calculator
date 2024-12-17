import React from 'react';
import { GradeTable } from './components/GradeTable';
import { Calculator } from './components/Calculator';
import { PageHeader } from './components/PageHeader';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <PageHeader />
        
        <div className="flex flex-col lg:grid lg:grid-cols-[1.6fr,1fr] gap-6 max-w-7xl mx-auto">
          <Calculator />
          <GradeTable />
        </div>

        <footer className="text-center mt-8 sm:mt-12 text-purple-400/60 text-sm">
          © {new Date().getFullYear()} <a href="https://anupa.lk">SLIIT GPA Calculator. All rights reserved.</a>
        </footer>
      </div>
    </div>
  );
}