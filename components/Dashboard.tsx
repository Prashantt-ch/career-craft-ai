
import React, { useState, useRef } from 'react';

interface DashboardProps {
  onAnalyze: (params: { text?: string, file?: { data: string, mimeType: string } }) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const Dashboard: React.FC<DashboardProps> = ({ onAnalyze, loading, error }) => {
  const [resumeText, setResumeText] = useState('');
  const [fileData, setFileData] = useState<{ data: string, mimeType: string, name: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText.trim() && !fileData) {
      alert("Please paste your resume text or upload a file.");
      return;
    }

    if (fileData) {
      onAnalyze({ file: { data: fileData.data, mimeType: fileData.mimeType } });
    } else {
      onAnalyze({ text: resumeText });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        // Split base64 from data URL prefix
        const base64 = result.split(',')[1];
        setFileData({
          data: base64,
          mimeType: file.type || 'application/pdf',
          name: file.name
        });
        setResumeText(''); // Clear text if file is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileData(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-indigo-600 p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Resume Analyzer</h2>
          <p className="text-indigo-100">Upload your PDF or paste your content to get started.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload Resume (PDF Recommended)
            </label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`group cursor-pointer border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                fileData ? 'border-green-400 bg-green-50' : 'border-slate-200 hover:border-indigo-400 hover:bg-indigo-50'
              }`}
            >
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" 
                accept=".pdf,.doc,.docx,.txt"
              />
              {!fileData ? (
                <>
                  <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-indigo-100 transition-colors">
                    <svg className="w-6 h-6 text-slate-500 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 mt-1 italic">PDF, TXT, or DOCX up to 10MB</p>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-green-800">{fileData.name}</p>
                  <button 
                    type="button"
                    onClick={clearFile}
                    className="mt-2 text-xs text-red-500 hover:underline"
                  >
                    Remove file
                  </button>
                </div>
              )}
            </div>
          </div>

          {!fileData && (
            <div className="mb-6">
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-4 text-slate-400 text-sm font-medium">OR PASTE TEXT</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>
              <textarea 
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume content here..."
                className="w-full h-48 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none text-slate-800"
              />
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
              <p className="font-bold">Analysis Failed</p>
              <p>{error}</p>
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all flex items-center justify-center
              ${loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]'}`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                AI is Extracting Insights...
              </>
            ) : 'Analyze Resume'}
          </button>
        </form>

        <div className="px-8 pb-8 pt-0">
          <p className="text-xs text-center text-slate-400">
            CareerCraft AI processes your data securely. We do not store your resume content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
