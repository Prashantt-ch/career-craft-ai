
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import AnalysisResults from './components/AnalysisResults';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AppView, ResumeAnalysis } from './types';
import { analyzeResume } from './services/gemini';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('landing');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<ResumeAnalysis | null>(null);

  const handleAnalyze = async (params: { text?: string, file?: { data: string, mimeType: string } }) => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeResume(params);
      setAnalysisResult(result);
      setView('analysis');
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during analysis.");
    } finally {
      setLoading(false);
    }
  };

  const navigateToDashboard = () => {
    setView('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentView={view} setView={setView} />
      
      <main className="flex-grow">
        {view === 'landing' && (
          <LandingPage onStart={navigateToDashboard} />
        )}

        {view === 'dashboard' && (
          <Dashboard 
            onAnalyze={handleAnalyze} 
            loading={loading} 
            error={error} 
          />
        )}

        {view === 'analysis' && analysisResult && (
          <AnalysisResults 
            result={analysisResult} 
            onRestart={() => {
              setAnalysisResult(null);
              setView('dashboard');
            }} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
