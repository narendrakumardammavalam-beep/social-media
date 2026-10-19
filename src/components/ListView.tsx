import React, { useState } from 'react';
import { SocialPost } from '../data/postsData';
import { brandData } from '../data/brandData';
import { Search, Filter, Copy, Check, Download, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { exportAsCSV } from '../utils/docExporter';

interface ListViewProps {
  posts: SocialPost[];
  onSelectPost: (post: SocialPost) => void;
  onDownloadDoc: () => void;
}

export const ListView: React.FC<ListViewProps> = ({ posts, onSelectPost, onDownloadDoc }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pillarFilter, setPillarFilter] = useState('all');
  const [channelFilter, setChannelFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredPosts = posts.filter(post => {
    if (pillarFilter !== 'all' && post.pillarId !== pillarFilter) return false;
    if (channelFilter !== 'all' && post.channel !== channelFilter) return false;
    if (statusFilter !== 'all' && post.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        post.title.toLowerCase().includes(q) ||
        post.briefDescription.toLowerCase().includes(q) ||
        post.fullCaption.toLowerCase().includes(q) ||
        post.hashtags.some(h => h.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  const handleCopyCaption = (e: React.MouseEvent, post: SocialPost) => {
    e.stopPropagation();
    navigator.clipboard.writeText(post.fullCaption);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-20">
      
      {/* Search and Filter Strip */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-editorial text-2xl font-bold text-stone-900">
              Complete Content Dossiers
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              31 comprehensive briefs with full captions, hashtags, hooks, and staging directions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => exportAsCSV(posts)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onDownloadDoc}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .DOC</span>
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search topics, hashtags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
            />
          </div>

          {/* Pillar */}
          <select
            value={pillarFilter}
            onChange={(e) => setPillarFilter(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
          >
            <option value="all">All Pillars</option>
            {brandData.pillars.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>

          {/* Channel */}
          <select
            value={channelFilter}
            onChange={(e) => setChannelFilter(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
          >
            <option value="all">All Channels</option>
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
            <option value="Pinterest">Pinterest</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>

          {/* Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800"
          >
            <option value="all">All Statuses</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Ready">Ready</option>
            <option value="In Review">In Review</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      {/* High-density post list cards */}
      <div className="space-y-3">
        {filteredPosts.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-xl p-12 text-center text-stone-500 text-sm">
            No posts match your active filter criteria. Try adjusting your search query or reset filters.
          </div>
        ) : (
          filteredPosts.map(post => {
            const channelBadge =
              post.channel === 'Instagram' ? 'bg-amber-50 text-amber-900 border-amber-200' :
              post.channel === 'TikTok' ? 'bg-stone-100 text-stone-900 border-stone-300' :
              post.channel === 'Pinterest' ? 'bg-rose-50 text-rose-900 border-rose-200' :
              'bg-blue-50 text-blue-900 border-blue-200';

            return (
              <div
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="group bg-white border border-stone-200 hover:border-emerald-800/60 rounded-xl p-4 sm:p-5 transition-all duration-150 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                {/* Left section: Date, Day badge, Titles */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-stone-900">
                      DAY {String(post.day).padStart(2, '0')}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-stone-600 font-medium">
                      {post.proposedDate} ({post.weekday})
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${channelBadge}`}>
                      {post.channel}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-stone-500 text-[11px] font-mono">
                      {post.format}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-emerald-950 font-medium text-[11px]">
                      {post.pillarName}
                    </span>
                  </div>

                  <h3 className="font-editorial text-base sm:text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 max-w-3xl leading-relaxed">
                    {post.briefDescription}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1.5 text-[11px] text-stone-400">
                    {post.hashtags.slice(0, 4).map((h, hIdx) => (
                      <span key={hIdx} className="text-stone-500">{h}</span>
                    ))}
                    {post.hashtags.length > 4 && (
                      <span className="text-stone-400">+{post.hashtags.length - 4} more</span>
                    )}
                  </div>
                </div>

                {/* Right section: KPI, Status, Actions */}
                <div className="flex sm:flex-col md:items-end justify-between w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-stone-100 gap-2">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Target Metric</span>
                    <span className="text-xs font-semibold text-stone-800">{post.kpiGoal}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleCopyCaption(e, post)}
                      className="p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
                      title="Copy full caption"
                    >
                      {copiedId === post.id ? (
                        <Check className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <span className="text-xs font-medium text-emerald-900 group-hover:underline underline-offset-2">
                      Open Dossier &rarr;
                    </span>
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
