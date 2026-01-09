
import React from 'react';
import { NavProps } from '../types';

const Navbar: React.FC<NavProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setView('landing')}
          >
            <div className="bg-indigo-600 h-8 w-8 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              CareerCraft<span className="text-indigo-600">AI</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setView('landing')}
              className={`text-sm font-medium transition-colors ${currentView === 'landing' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('dashboard')}
              className={`text-sm font-medium transition-colors ${currentView === 'dashboard' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              Analyzer
            </button>
            <a 
              href="#sdg-impact" 
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Our Impact
            </a>
            <button 
              onClick={() => setView('dashboard')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md active:scale-95"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
             {/* Simple mobile menu indicator or icon can go here */}
             <button 
               onClick={() => setView('dashboard')}
               className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold"
             >
               Go
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
