import React, { useState } from 'react';
import { SocialPost } from '../data/postsData';
import { brandData } from '../data/brandData';
import { X, Copy, Check, ChevronLeft, ChevronRight, Clock, Calendar, Sparkles, Camera, Tag, Target, Edit3 } from 'lucide-react';

interface PostDetailModalProps {
  post: SocialPost | null;
  posts: SocialPost[];
  onClose: () => void;
  onUpdatePost: (updatedPost: SocialPost) => void;
  onSelectPost: (post: SocialPost) => void;
}

export const PostDetailModal: React.FC<PostDetailModalProps> = ({
  post,
  posts,
  onClose,
  onUpdatePost,
  onSelectPost
}) => {
  if (!post) return null;

  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedHook, setCopiedHook] = useState(false);
  const [copiedHashtags, setCopiedHashtags] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Edit state
  const [editTitle, setEditTitle] = useState(post.title);
  const [editCaption, setEditCaption] = useState(post.fullCaption);
  const [editDate, setEditDate] = useState(post.proposedDate);
  const [editStatus, setEditStatus] = useState(post.status);
  const [editTimeSlot, setEditTimeSlot] = useState(post.timeSlot);

  // Sync state if post changes via next/prev
  React.useEffect(() => {
    setEditTitle(post.title);
    setEditCaption(post.fullCaption);
    setEditDate(post.proposedDate);
    setEditStatus(post.status);
    setEditTimeSlot(post.timeSlot);
    setIsEditing(false);
  }, [post.id]);

  const currentIndex = posts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(post.fullCaption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  const handleCopyHook = () => {
    navigator.clipboard.writeText(post.hook);
    setCopiedHook(true);
    setTimeout(() => setCopiedHook(false), 2000);
  };

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText(post.hashtags.join(' '));
    setCopiedHashtags(true);
    setTimeout(() => setCopiedHashtags(false), 2000);
  };

  const handleSaveEdit = () => {
    onUpdatePost({
      ...post,
      title: editTitle,
      fullCaption: editCaption,
      proposedDate: editDate,
      status: editStatus,
      timeSlot: editTimeSlot
    });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white border border-stone-200 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-stone-200 bg-stone-50/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-sm bg-stone-200 text-stone-800 px-2 py-0.5 rounded">
              DAY {String(post.day).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <span className="font-semibold text-stone-900">{post.proposedDate}</span>
              <span>·</span>
              <span>{post.weekday}</span>
              <span>·</span>
              <span className="font-mono text-emerald-950 font-medium">{post.timeSlot}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`p-1.5 text-xs font-medium rounded-lg border flex items-center gap-1 transition-colors cursor-pointer ${
                isEditing
                  ? 'bg-emerald-900 text-white border-emerald-900'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Editing' : 'Edit Post'}</span>
            </button>

            {/* Prev / Next buttons */}
            <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white">
              <button
                disabled={!prevPost}
                onClick={() => prevPost && onSelectPost(prevPost)}
                className="p-1.5 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Previous Day"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-mono px-2 text-stone-400">
                {currentIndex + 1}/{posts.length}
              </span>
              <button
                disabled={!nextPost}
                onClick={() => nextPost && onSelectPost(nextPost)}
                className="p-1.5 text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Next Day"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Metadata Tags Bar */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded bg-stone-100 text-stone-800 font-medium">
              Platform: <strong>{post.channel}</strong>
            </span>
            <span className="px-2.5 py-1 rounded bg-stone-100 text-stone-800 font-medium">
              Format: <strong>{post.format}</strong>
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-950 border border-emerald-200 font-medium">
              Pillar: <strong>{post.pillarName}</strong>
            </span>
            <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 font-medium">
              Target KPI: <strong>{post.kpiGoal}</strong>
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="text-stone-400">Status:</span>
              <select
                value={editStatus}
                onChange={(e) => {
                  setEditStatus(e.target.value as any);
                  onUpdatePost({ ...post, status: e.target.value as any });
                }}
                className="text-xs bg-stone-100 border border-stone-300 rounded px-2 py-1 font-semibold text-stone-800 focus:outline-none"
              >
                <option value="Scheduled">Scheduled</option>
                <option value="Ready">Ready</option>
                <option value="In Review">In Review</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          {/* Title and Strategic Rationale */}
          <div className="space-y-2">
            {isEditing ? (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-500 uppercase">Post Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full text-lg font-bold font-editorial p-2 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-800 focus:outline-none"
                />
              </div>
            ) : (
              <h2 className="font-editorial text-2xl font-bold text-stone-900 leading-snug">
                {post.title}
              </h2>
            )}

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5">
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block mb-1">
                Strategic Rationale & Psychological Angle
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                {post.briefDescription}
              </p>
            </div>
          </div>

          {/* Opening Hook with 1-Click Copy */}
          <div className="border border-stone-200 rounded-xl p-4 bg-emerald-50/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-950 uppercase font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                First 3-Second Hook (High-Stopping Power)
              </span>
              <button
                onClick={handleCopyHook}
                className="text-xs text-emerald-900 hover:text-emerald-950 font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                {copiedHook ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHook ? 'Copied' : 'Copy Hook'}</span>
              </button>
            </div>
            <p className="font-editorial text-base text-stone-900 italic font-medium">
              "{post.hook}"
            </p>
          </div>

          {/* Full Caption Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-stone-500 uppercase font-semibold">
                Production-Ready Caption Copy
              </span>
              <button
                onClick={handleCopyCaption}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors cursor-pointer"
              >
                {copiedCaption ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCaption ? 'Copied to Clipboard!' : 'Copy Caption'}</span>
              </button>
            </div>

            {isEditing ? (
              <textarea
                rows={10}
                value={editCaption}
                onChange={(e) => setEditCaption(e.target.value)}
                className="w-full text-xs font-mono p-3 bg-stone-50 border border-stone-300 rounded-xl focus:ring-1 focus:ring-emerald-800 focus:outline-none"
              />
            ) : (
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs font-sans text-stone-800 leading-relaxed whitespace-pre-line max-h-72 overflow-y-auto">
                {post.fullCaption}
              </div>
            )}
          </div>

          {/* Creative Art Direction */}
          <div className="border border-stone-200 rounded-xl p-4 bg-white space-y-2">
            <span className="text-xs font-mono text-stone-500 uppercase font-semibold flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-stone-700" />
              Creative Direction & Studio Staging Directive
            </span>
            <p className="text-xs text-stone-700 leading-relaxed">
              {post.creativeDirection}
            </p>
          </div>

          {/* Call to Action and Hashtags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 space-y-1.5">
              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block">
                Primary Call to Action (CTA)
              </span>
              <p className="text-xs font-semibold text-stone-900">
                {post.callToAction}
              </p>
            </div>

            <div className="border border-stone-200 rounded-xl p-3.5 bg-stone-50/50 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider">
                  Targeted Hashtags ({post.hashtags.length})
                </span>
                <button
                  onClick={handleCopyHashtags}
                  className="text-[11px] text-emerald-900 hover:text-emerald-950 font-medium cursor-pointer inline-flex items-center gap-1"
                >
                  {copiedHashtags ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedHashtags ? 'Copied' : 'Copy All'}</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-1">
                {post.hashtags.map((h, idx) => (
                  <span key={idx} className="text-[11px] bg-white border border-stone-200 px-2 py-0.5 rounded text-stone-700">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg shadow-sm"
              >
                Save Changes
              </button>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 text-xs text-stone-500 flex items-center justify-between">
          <span>{post.proposedDate} &bull; {post.timeSlot}</span>
          <button
            onClick={handleCopyCaption}
            className="text-xs font-semibold text-emerald-900 hover:underline cursor-pointer"
          >
            Copy Full Caption for Publishing &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};
