
import React from 'react';
import SDGImpact from './SDGImpact';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold tracking-wide uppercase">
            Built for SDG 8: Decent Work & Economic Growth
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Craft Your Path to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Professional Success
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            In a competitive job market, your resume is your first impression. CareerCraft AI uses advanced intelligence to transform your profile into an employability powerhouse.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onStart}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Analyze My Resume
            </button>
            <a 
              href="#mission"
              className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-400 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge We Solve</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-lg mt-1">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900">Invisible Barriers</h3>
                    <p className="text-slate-600">Poorly structured resumes lead to instant rejections by automated systems (ATS) before a human even sees them.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-lg mt-1">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900">The Skills Gap</h3>
                    <p className="text-slate-600">Many job seekers lack clear guidance on which technical or soft skills they need to bridge to land their dream role.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-2 rounded-lg mt-1">
                    <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-900">Stagnant Growth</h3>
                    <p className="text-slate-600">Without proper mentorship, economic growth slows as high-potential individuals remain unemployed or underemployed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-indigo-600 mb-6">Our AI Solution</h2>
              <p className="text-slate-600 mb-6 text-lg">
                CareerCraft AI provides real-time, objective feedback based on global hiring standards. By democratizing access to professional resume critique, we empower everyone to present their best self.
              </p>
              <ul className="space-y-4">
                {[
                  "Automated Content Quality Scoring",
                  "Identification of Technical & Soft Skills",
                  "Actionable Resume Improvement Plans",
                  "Tailored Career Path Suggestions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SDGImpact />
    </div>
  );
};

export default LandingPage;
