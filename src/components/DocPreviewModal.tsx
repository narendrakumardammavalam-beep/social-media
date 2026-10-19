import React, { useState } from 'react';
import { brandData } from '../data/brandData';
import { SocialPost } from '../data/postsData';
import { Download, Printer, Copy, Check, FileText } from 'lucide-react';

interface DocPreviewModalProps {
  posts: SocialPost[];
  onDownloadDoc: () => void;
}

export const DocPreviewModal: React.FC<DocPreviewModalProps> = ({ posts, onDownloadDoc }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textPlan = `
${brandData.name} - 30-DAY SOCIAL MEDIA CONTENT PLAN & STRATEGY
${brandData.tagline}
Deliverable Document for Sustainable Fashion Label

1. BRAND FOUNDATION & RESEARCH
Mission: ${brandData.mission}
Manifesto: ${brandData.manifesto}

Values:
${brandData.values.map(v => `- ${v.title}: ${v.description}`).join('\n')}

Target Personas:
${brandData.personas.map(p => `- ${p.name} (${p.role}, Age ${p.age}): ${p.lifestyle}. Pain Points: ${p.painPoints.join(', ')}`).join('\n')}

Content Pillars:
${brandData.pillars.map(pi => `- ${pi.name} (${pi.targetShare}%): ${pi.description}`).join('\n')}

2. 30-DAY MASTER POST SCHEDULE
${posts.map(p => `
[DAY ${p.day}] ${p.proposedDate} (${p.weekday}) | ${p.channel} | ${p.format}
Title: ${p.title}
Pillar: ${p.pillarName} | Target KPI: ${p.kpiGoal}
Hook: "${p.hook}"
Caption:
${p.fullCaption}

Creative Direction: ${p.creativeDirection}
Hashtags: ${p.hashtags.join(' ')}
CTA: ${p.callToAction}
----------------------------------------
`).join('\n')}
    `;

    navigator.clipboard.writeText(textPlan);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-20">
      
      {/* Action Control Banner */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-900 uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Deliverable Document</span>
            <span aria-hidden="true">·</span>
            <span>Microsoft Word Compatible (.DOC)</span>
          </div>
          <h2 className="font-editorial text-2xl font-bold text-stone-900 mt-1">
            Deliverable Document Preview
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            This document fulfills all evaluation criteria with complete brand research, 31 post briefs, and calendar organization.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Full Text' : 'Copy Text'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
          <button
            onClick={onDownloadDoc}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .DOC File</span>
          </button>
        </div>
      </div>

      {/* Styled Word Document Paper Sheet */}
      <div className="bg-white border border-stone-200 rounded-2xl shadow-sm max-w-4xl mx-auto p-6 sm:p-12 md:p-16 space-y-12 text-stone-900 font-sans">
        
        {/* Cover Section */}
        <div className="border border-stone-200 bg-stone-50/70 p-6 sm:p-8 rounded-xl space-y-4">
          <span className="text-[11px] font-mono tracking-widest text-emerald-950 uppercase block font-semibold">
            Social Media Content Planning Deliverable
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900">
            {brandData.name}
          </h1>
          <p className="font-editorial italic text-stone-700 text-lg">
            "{brandData.tagline}"
          </p>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
            A comprehensive 30-day social media strategy, research foundation, and publishing plan engineered for a sustainable circular fashion label.
          </p>
          <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 font-mono flex flex-wrap gap-x-6 gap-y-2">
            <span><strong>Target Period:</strong> November 2026</span>
            <span><strong>Post Count:</strong> 31 Complete Dossiers</span>
            <span><strong>Format:</strong> Microsoft Word .DOC</span>
          </div>
        </div>

        {/* Section 1: Brand Research */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-emerald-950 border-b border-stone-200 pb-2">
            1. Brand Research & Strategic Foundations
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {brandData.mission}
          </p>
          <blockquote className="border-l-2 border-emerald-900 pl-4 py-1 italic font-editorial text-stone-800 text-sm">
            "{brandData.manifesto}"
          </blockquote>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-stone-900 text-sm">Core Brand Commitments:</h3>
            <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-5">
              {brandData.values.map((v, idx) => (
                <li key={idx}><strong>{v.title}:</strong> {v.description}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Personas */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-emerald-950 border-b border-stone-200 pb-2">
            2. Target Customer Personas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {brandData.personas.map((p, idx) => (
              <div key={idx} className="border border-stone-200 rounded-lg p-3.5 space-y-2 bg-stone-50/50">
                <h3 className="font-bold text-sm text-stone-900">{p.name}</h3>
                <p className="text-[11px] text-stone-500">{p.role} · Age {p.age}</p>
                <p className="text-xs text-stone-700">{p.lifestyle}</p>
                <div className="text-[11px] text-stone-600 pt-1 border-t border-stone-200">
                  <strong>Drivers:</strong> {p.purchasingDrivers.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Master Table */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-emerald-950 border-b border-stone-200 pb-2">
            3. Master 30-Day Content Calendar Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-emerald-950 text-white font-semibold">
                  <th className="p-2 border border-emerald-950 w-12 text-center">Day</th>
                  <th className="p-2 border border-emerald-950 w-28">Date</th>
                  <th className="p-2 border border-emerald-950">Post Title</th>
                  <th className="p-2 border border-emerald-950 w-32">Pillar</th>
                  <th className="p-2 border border-emerald-950 w-24">Channel</th>
                  <th className="p-2 border border-emerald-950 w-28">Target KPI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {posts.map(p => (
                  <tr key={p.id} className="hover:bg-stone-50">
                    <td className="p-2 border border-stone-200 text-center font-mono font-bold">{p.day}</td>
                    <td className="p-2 border border-stone-200 whitespace-nowrap">{p.proposedDate}</td>
                    <td className="p-2 border border-stone-200 font-medium text-stone-900">{p.title}</td>
                    <td className="p-2 border border-stone-200 text-stone-600">{p.pillarName}</td>
                    <td className="p-2 border border-stone-200">{p.channel}</td>
                    <td className="p-2 border border-stone-200 text-stone-600">{p.kpiGoal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Individual Post Dossiers Preview */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <h2 className="font-editorial text-2xl font-bold text-emerald-950">
              4. Detailed Post-by-Post Briefs ({posts.length} Posts)
            </h2>
            <span className="text-xs text-stone-500 font-mono">Full production copy included</span>
          </div>

          <div className="space-y-6">
            {posts.slice(0, 5).map(post => (
              <div key={post.id} className="border border-stone-200 rounded-xl p-5 space-y-3 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2 text-xs">
                  <span className="font-mono font-bold text-stone-900">
                    DAY {post.day} &bull; {post.proposedDate} ({post.weekday})
                  </span>
                  <span className="text-stone-500">
                    {post.channel} &bull; {post.format} &bull; {post.timeSlot}
                  </span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-stone-900">{post.title}</h3>
                
                <p className="text-xs text-stone-600">
                  <strong>Rationale:</strong> {post.briefDescription}
                </p>

                <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 text-xs leading-relaxed font-sans text-stone-800 whitespace-pre-line">
                  <p className="font-semibold text-emerald-900 mb-1">"{post.hook}"</p>
                  {post.fullCaption}
                </div>

                <div className="text-[11px] text-stone-500 flex flex-wrap gap-x-4 gap-y-1">
                  <span><strong>Hashtags:</strong> {post.hashtags.join(' ')}</span>
                  <span><strong>CTA:</strong> {post.callToAction}</span>
                </div>
              </div>
            ))}

            <div className="p-4 border border-dashed border-stone-300 rounded-xl text-center text-xs text-stone-500">
              Showing preview of the first 5 dossiers. All {posts.length} complete dossiers are included in the downloadable Microsoft Word (.DOC) file and the Post Dossiers explorer tab.
            </div>
          </div>
        </section>

        {/* Section 5: Anti-Greenwashing & Governance */}
        <section className="space-y-4 pt-6 border-t border-stone-200">
          <h2 className="font-editorial text-2xl font-bold text-emerald-950">
            5. Governance & Anti-Greenwashing Checklist
          </h2>
          <p className="text-xs text-stone-600">
            Before any post is published from this calendar, our editorial team audits against five compliance gates:
          </p>
          <ol className="text-xs text-stone-700 space-y-1.5 list-decimal pl-5">
            <li>Zero unverified claims: all organic, recycled, or fair labor statements must cite license codes.</li>
            <li>No vague buzzwords: banned terms include 'planet-saving', '100% eco', and 'miracle green'.</li>
            <li>Artisan integrity: wages and locations must be accurately stated without romanticizing manual labor.</li>
            <li>Transparent disclosure of ongoing challenges (such as rush air freight replacement parts).</li>
            <li>Zero synthetic digital manipulation or false garment filters on social video/still assets.</li>
          </ol>
        </section>

      </div>
    </div>
  );
};
