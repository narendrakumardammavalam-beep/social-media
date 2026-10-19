import React, { useState } from 'react';
import { SocialPost } from '../data/postsData';
import { brandData } from '../data/brandData';
import { Filter, Calendar as CalendarIcon, Clock, ChevronRight, Eye } from 'lucide-react';

interface CalendarViewProps {
  posts: SocialPost[];
  onSelectPost: (post: SocialPost) => void;
  onDownloadDoc: () => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ posts, onSelectPost, onDownloadDoc }) => {
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');

  // Filter posts
  const filteredPosts = posts.filter(post => {
    if (selectedPillar !== 'all' && post.pillarId !== selectedPillar) return false;
    if (selectedChannel !== 'all' && post.channel !== selectedChannel) return false;
    return true;
  });

  // Calculate day mapping for November 2026 (Nov 1, 2026 is a Sunday)
  // Day 1 = Sunday, Day 2 = Monday, etc.
  // 31 days total in our full plan.

  return (
    <div className="space-y-8 pb-20">
      
      {/* Viewport Control Strip */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 uppercase">
            <CalendarIcon className="w-3.5 h-3.5 text-emerald-800" />
            <span>Editorial Schedule</span>
            <span aria-hidden="true">·</span>
            <span>November 2026</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-stone-900">{filteredPosts.length} Posts Active</span>
          </div>
          <h2 className="font-editorial text-2xl font-bold text-stone-900 mt-1">
            30-Day Master Social Media Calendar
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Pillar Filter */}
          <div className="flex items-center gap-1.5 text-xs text-stone-600">
            <span className="font-medium">Pillar:</span>
            <select
              value={selectedPillar}
              onChange={(e) => setSelectedPillar(e.target.value)}
              className="bg-stone-50 border border-stone-300 text-stone-800 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-800"
            >
              <option value="all">All 5 Pillars</option>
              {brandData.pillars.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Channel Filter */}
          <div className="flex items-center gap-1.5 text-xs text-stone-600">
            <span className="font-medium">Channel:</span>
            <select
              value={selectedChannel}
              onChange={(e) => setSelectedChannel(e.target.value)}
              className="bg-stone-50 border border-stone-300 text-stone-800 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-800"
            >
              <option value="all">All Channels</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="Pinterest">Pinterest</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
          </div>

          <button
            onClick={onDownloadDoc}
            className="text-xs font-medium text-emerald-900 hover:text-emerald-950 underline underline-offset-4 cursor-pointer ml-auto"
          >
            Export as .DOC
          </button>
        </div>
      </div>

      {/* Days of week header */}
      <div className="hidden lg:grid grid-cols-7 gap-2 text-center text-xs font-semibold text-stone-500 uppercase tracking-wider py-1 border-b border-stone-200">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>

      {/* Calendar Grid: 31 Days */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
        {Array.from({ length: 31 }, (_, i) => {
          const dayNum = i + 1;
          const post = posts.find(p => p.day === dayNum);
          const isVisible = post && (selectedPillar === 'all' || post.pillarId === selectedPillar) &&
                                  (selectedChannel === 'all' || post.channel === selectedChannel);

          if (!post) return null;

          // Channel color theme
          const channelColor =
            post.channel === 'Instagram' ? 'bg-amber-50 text-amber-900 border-amber-200' :
            post.channel === 'TikTok' ? 'bg-stone-100 text-stone-900 border-stone-300' :
            post.channel === 'Pinterest' ? 'bg-rose-50 text-rose-900 border-rose-200' :
            'bg-blue-50 text-blue-900 border-blue-200';

          return (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className={`group relative bg-white border rounded-xl p-3 flex flex-col justify-between transition-all duration-150 cursor-pointer text-left ${
                isVisible
                  ? 'border-stone-200 hover:border-emerald-700 hover:shadow-md'
                  : 'border-stone-100 opacity-40 hover:opacity-80'
              }`}
              style={{ minHeight: '175px' }}
            >
              {/* Day & Date Header */}
              <div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-stone-100">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-stone-900 text-sm">
                      {String(post.day).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] text-stone-400 lg:hidden">
                      {post.weekday}
                    </span>
                  </div>
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${channelColor}`}>
                    {post.channel}
                  </span>
                </div>

                {/* Pillar and Format */}
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-stone-500">
                  <span className="truncate max-w-[110px] font-medium text-emerald-950">
                    {post.pillarName}
                  </span>
                  <span>·</span>
                  <span className="text-stone-400">{post.format}</span>
                </div>

                {/* Title */}
                <h4 className="font-editorial text-xs font-semibold text-stone-900 group-hover:text-emerald-950 transition-colors mt-1.5 line-clamp-3 leading-snug">
                  {post.title}
                </h4>
              </div>

              {/* Footer with time slot and prompt preview */}
              <div className="pt-2 mt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" />
                  {post.timeSlot.replace(' CET', '')}
                </span>
                <span className="text-emerald-800 font-medium group-hover:translate-x-0.5 transition-transform flex items-center">
                  Brief <ChevronRight className="w-2.5 h-2.5 ml-0.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cadence & Metrics Strip */}
      <div className="bg-stone-100/70 border border-stone-200 rounded-xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div>
          <span className="block text-2xl font-bold font-mono text-stone-900">31</span>
          <span className="text-xs text-stone-500">Total Month Posts</span>
        </div>
        <div>
          <span className="block text-2xl font-bold font-mono text-stone-900">5</span>
          <span className="text-xs text-stone-500">Content Pillars</span>
        </div>
        <div>
          <span className="block text-2xl font-bold font-mono text-stone-900">4</span>
          <span className="text-xs text-stone-500">Channels Covered</span>
        </div>
        <div>
          <span className="block text-2xl font-bold font-mono text-emerald-900">100%</span>
          <span className="text-xs text-stone-500">Organic & Bio-Sourced</span>
        </div>
      </div>

    </div>
  );
};
