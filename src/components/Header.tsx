import React from 'react';
import { Download, FileText } from 'lucide-react';

interface HeaderProps {
  activeTab: 'research' | 'calendar' | 'list' | 'brainstorm' | 'doc-preview';
  setActiveTab: (tab: 'research' | 'calendar' | 'list' | 'brainstorm' | 'doc-preview') => void;
  onDownloadDoc: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onDownloadDoc }) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => setActiveTab('research')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-editorial text-xl font-bold tracking-tight text-stone-900 group-hover:text-emerald-900 transition-colors whitespace-nowrap">
                TERRA & THREAD
              </span>
            </button>
            <span className="hidden sm:inline text-xs text-stone-400 font-mono">|</span>
            <span className="hidden sm:inline text-xs text-stone-500 font-medium whitespace-nowrap">
              Social Media Strategy & 30-Day Plan
            </span>
          </div>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => setActiveTab('research')}
              className={`whitespace-nowrap transition-colors pb-1 border-b-2 cursor-pointer ${
                activeTab === 'research'
                  ? 'border-emerald-800 text-emerald-950 font-semibold'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              Brand Foundation
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`whitespace-nowrap transition-colors pb-1 border-b-2 cursor-pointer ${
                activeTab === 'calendar'
                  ? 'border-emerald-800 text-emerald-950 font-semibold'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              30-Day Calendar
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`whitespace-nowrap transition-colors pb-1 border-b-2 cursor-pointer ${
                activeTab === 'list'
                  ? 'border-emerald-800 text-emerald-950 font-semibold'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              Post Dossiers
            </button>
            <button
              onClick={() => setActiveTab('brainstorm')}
              className={`whitespace-nowrap transition-colors pb-1 border-b-2 cursor-pointer ${
                activeTab === 'brainstorm'
                  ? 'border-emerald-800 text-emerald-950 font-semibold'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              Idea Studio
            </button>
            <button
              onClick={() => setActiveTab('doc-preview')}
              className={`whitespace-nowrap transition-colors pb-1 border-b-2 cursor-pointer ${
                activeTab === 'doc-preview'
                  ? 'border-emerald-800 text-emerald-950 font-semibold'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              Deliverable Preview
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onDownloadDoc}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-emerald-900 hover:bg-emerald-800 active:bg-emerald-950 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
              title="Download Microsoft Word .DOC deliverable file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .DOC Plan</span>
            </button>
          </div>

        </div>

        {/* Mobile secondary tab strip */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-4 border-t border-stone-200 text-xs font-medium no-scrollbar">
          <button
            onClick={() => setActiveTab('research')}
            className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'research' ? 'text-emerald-900 font-bold border-b border-emerald-900' : 'text-stone-600'}`}
          >
            Brand
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'calendar' ? 'text-emerald-900 font-bold border-b border-emerald-900' : 'text-stone-600'}`}
          >
            Calendar
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'list' ? 'text-emerald-900 font-bold border-b border-emerald-900' : 'text-stone-600'}`}
          >
            Post Dossiers
          </button>
          <button
            onClick={() => setActiveTab('brainstorm')}
            className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'brainstorm' ? 'text-emerald-900 font-bold border-b border-emerald-900' : 'text-stone-600'}`}
          >
            Idea Studio
          </button>
          <button
            onClick={() => setActiveTab('doc-preview')}
            className={`whitespace-nowrap shrink-0 py-1 ${activeTab === 'doc-preview' ? 'text-emerald-900 font-bold border-b border-emerald-900' : 'text-stone-600'}`}
          >
            Preview DOC
          </button>
        </div>
      </div>
    </header>
  );
};
