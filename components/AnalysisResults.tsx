
import React from 'react';
import { ResumeAnalysis } from '../types';

interface AnalysisResultsProps {
  result: ResumeAnalysis;
  onRestart: () => void;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ result, onRestart }) => {
  return (
    <div className="py-12 max-w-6xl mx-auto px-4 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Readiness Score Card */}
        <div className="md:w-1/3">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center text-center sticky top-24">
            <h3 className="text-slate-500 font-semibold uppercase tracking-wider text-xs mb-4">Professional Readiness</h3>
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#e2e8f0"
                  strokeWidth="12"
                  fill="transparent"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#4f46e5"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * result.overallScore) / 100}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <span className="absolute text-5xl font-black text-slate-900">{result.overallScore}%</span>
            </div>
            <p className="mt-6 text-slate-600 font-medium">
              {result.overallScore > 80 ? "Your resume is excellent!" : result.overallScore > 60 ? "Solid foundation with room for growth." : "Needs significant refinement."}
            </p>
            <button 
              onClick={onRestart}
              className="mt-8 w-full py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Analyze Another
            </button>
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="md:w-2/3 space-y-8">
          {/* Strengths */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-green-100 p-1.5 rounded-lg mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Resume Strengths
            </h3>
            <ul className="space-y-3">
              {result.strengths.map((str, i) => (
                <li key={i} className="flex items-start text-slate-700">
                  <span className="text-green-500 mr-2 font-bold">•</span>
                  {str}
                </li>
              ))}
            </ul>
          </section>

          {/* Identified Skills */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-indigo-100 p-1.5 rounded-lg mr-3">
                <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Identified Skills
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Technical</h4>
                <div className="flex flex-wrap gap-2">
                  {result.skills.technical.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {result.skills.soft.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Skill Gaps */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-orange-100 p-1.5 rounded-lg mr-3">
                <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              Identified Skill Gaps
            </h3>
            <ul className="space-y-2">
              {result.skillGaps.map((gap, i) => (
                <li key={i} className="flex items-start text-slate-700">
                  <span className="text-orange-500 mr-2 font-bold">•</span>
                  {gap}
                </li>
              ))}
            </ul>
          </section>

          {/* Career Path Suggestions */}
          <section className="bg-indigo-900 p-8 rounded-2xl shadow-xl text-white">
            <h3 className="text-xl font-bold mb-6">Suggested Career Paths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {result.roleSuggestions.map((role, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-default">
                  <span className="text-indigo-200 text-xs font-bold block mb-1 uppercase">Potential Role #{i+1}</span>
                  <p className="text-lg font-bold">{role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Actionable Tips */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="bg-blue-100 p-1.5 rounded-lg mr-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </span>
              Improvement Action Plan
            </h3>
            <div className="space-y-4">
              {result.improvementTips.map((tip, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border-l-4 border-indigo-500">
                  <p className="text-slate-800 font-medium">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
