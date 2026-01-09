
export interface ResumeAnalysis {
  strengths: string[];
  skills: {
    technical: string[];
    soft: string[];
  };
  skillGaps: string[];
  roleSuggestions: string[];
  improvementTips: string[];
  overallScore: number;
}

export type AppView = 'landing' | 'dashboard' | 'analysis';

export interface NavProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}
