/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { brandData } from './data/brandData';
import { initialPostsData, SocialPost } from './data/postsData';
import { generateWordDocument } from './utils/docExporter';
import { Header } from './components/Header';
import { BrandOverview } from './components/BrandOverview';
import { CalendarView } from './components/CalendarView';
import { ListView } from './components/ListView';
import { BrainstormStudio } from './components/BrainstormStudio';
import { DocPreviewModal } from './components/DocPreviewModal';
import { PostDetailModal } from './components/PostDetailModal';
import { Download, Sparkles, Calendar, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'research' | 'calendar' | 'list' | 'brainstorm' | 'doc-preview'>('calendar');
  const [posts, setPosts] = useState<SocialPost[]>(initialPostsData);
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handleDownloadDoc = () => {
    generateWordDocument(brandData, posts);
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 4000);
  };

  const handleUpdatePost = (updatedPost: SocialPost) => {
    setPosts(prev => prev.map(p => p.id === updatedPost.id ? updatedPost : p));
    setSelectedPost(updatedPost);
  };

  const handleAddCustomPost = (newPost: SocialPost) => {
    setPosts(prev => [...prev, newPost]);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-emerald-900 selection:text-white">
      
      {/* Top Bar Contract Compliant Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadDoc={handleDownloadDoc}
      />

      {/* Download Alert Toast */}
      {downloadNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950 text-white px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 border border-emerald-800 transition-all animate-bounce">
          <Download className="w-4 h-4 text-emerald-300" />
          <div className="text-xs">
            <p className="font-semibold">Word Document (.DOC) Exported!</p>
            <p className="text-stone-300">File is downloading now. Compatible with Microsoft Word & Google Docs.</p>
          </div>
        </div>
      )}

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Navigation Tabs Bar for Desktop/Tablet */}
        <div className="mb-8 hidden sm:flex items-center justify-between border-b border-stone-200 pb-3">
          <div className="flex items-center gap-6 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('research')}
              className={`flex items-center gap-1.5 pb-2 transition-colors cursor-pointer ${
                activeTab === 'research'
                  ? 'text-emerald-950 border-b-2 border-emerald-900 font-bold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Brand Research & Foundation</span>
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-1.5 pb-2 transition-colors cursor-pointer ${
                activeTab === 'calendar'
                  ? 'text-emerald-950 border-b-2 border-emerald-900 font-bold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>2. 30-Day Master Calendar</span>
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={`flex items-center gap-1.5 pb-2 transition-colors cursor-pointer ${
                activeTab === 'list'
                  ? 'text-emerald-950 border-b-2 border-emerald-900 font-bold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3. Post Dossiers ({posts.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('brainstorm')}
              className={`flex items-center gap-1.5 pb-2 transition-colors cursor-pointer ${
                activeTab === 'brainstorm'
                  ? 'text-emerald-950 border-b-2 border-emerald-900 font-bold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>4. Brainstorming Studio</span>
            </button>
            <button
              onClick={() => setActiveTab('doc-preview')}
              className={`flex items-center gap-1.5 pb-2 transition-colors cursor-pointer ${
                activeTab === 'doc-preview'
                  ? 'text-emerald-950 border-b-2 border-emerald-900 font-bold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>5. .DOC Deliverable File</span>
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-500 font-mono">
            <span>Month: Nov 2026</span>
            <span>·</span>
            <span>{posts.length} Posts</span>
          </div>
        </div>

        {/* Dynamic Views */}
        {activeTab === 'research' && (
          <BrandOverview
            onGoToCalendar={() => setActiveTab('calendar')}
            onDownloadDoc={handleDownloadDoc}
          />
        )}

        {activeTab === 'calendar' && (
          <CalendarView
            posts={posts}
            onSelectPost={(post) => setSelectedPost(post)}
            onDownloadDoc={handleDownloadDoc}
          />
        )}

        {activeTab === 'list' && (
          <ListView
            posts={posts}
            onSelectPost={(post) => setSelectedPost(post)}
            onDownloadDoc={handleDownloadDoc}
          />
        )}

        {activeTab === 'brainstorm' && (
          <BrainstormStudio
            onAddCustomPost={handleAddCustomPost}
            existingPostsCount={posts.length}
          />
        )}

        {activeTab === 'doc-preview' && (
          <DocPreviewModal
            posts={posts}
            onDownloadDoc={handleDownloadDoc}
          />
        )}

      </main>

      {/* Post Detail Drawer / Modal */}
      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          posts={posts}
          onClose={() => setSelectedPost(null)}
          onUpdatePost={handleUpdatePost}
          onSelectPost={(p) => setSelectedPost(p)}
        />
      )}

      {/* Clean quiet footer */}
      <footer className="border-t border-stone-200 bg-white py-8 mt-auto no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="font-editorial font-bold text-stone-900">TERRA & THREAD</span>
            <span>·</span>
            <span>Social Media Content Planning Suite</span>
            <span>·</span>
            <span>Porto & Copenhagen</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleDownloadDoc}
              className="text-emerald-900 font-semibold hover:underline cursor-pointer"
            >
              Export DOC Deliverable
            </button>
            <span>·</span>
            <span>31 Posts Planned</span>
            <span>·</span>
            <span>GOTS & B-Corp Certified Standards</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
