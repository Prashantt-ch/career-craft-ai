
import React from 'react';

const SDGImpact: React.FC = () => {
  return (
    <section id="sdg-impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">Making a Difference</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Our Commitment to SDG 8</h3>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Goal 8 aims to promote inclusive and sustainable economic growth, full and productive employment, and decent work for all.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 text-left">Decent Work for All</h4>
            <p className="text-slate-600 leading-relaxed text-left">
              By helping job seekers optimize their resumes, we increase their chances of securing high-quality, professional roles that offer fair pay and career advancement.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 text-left">Productivity & Growth</h4>
            <p className="text-slate-600 leading-relaxed text-left">
              Matching candidates to the right roles based on their true skill set reduces labor market friction, boosting overall economic productivity and business growth.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 text-left">Skill Development</h4>
            <p className="text-slate-600 leading-relaxed text-left">
              Our AI analysis highlights crucial skill gaps, guiding individuals toward relevant education and training to stay competitive in the evolving 4th Industrial Revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGImpact;
