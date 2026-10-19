import React from 'react';
import { brandData } from '../data/brandData';
import { Check, ArrowRight, ShieldCheck, Sparkles, Feather, Users, BookOpen } from 'lucide-react';

interface BrandOverviewProps {
  onGoToCalendar: () => void;
  onDownloadDoc: () => void;
}

export const BrandOverview: React.FC<BrandOverviewProps> = ({ onGoToCalendar, onDownloadDoc }) => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Section: Split Column with Editorial Imagery */}
      <section className="relative overflow-hidden bg-stone-100/70 border border-stone-200 rounded-2xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-wider">
              <span>Brand Research & Foundation</span>
              <span aria-hidden="true">·</span>
              <span>Copenhagen & Porto</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2023</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 text-balance leading-tight">
              {brandData.name}
            </h1>

            <p className="text-lg sm:text-xl font-editorial italic text-stone-700">
              "{brandData.tagline}"
            </p>

            <p className="text-stone-600 leading-relaxed text-sm sm:text-base max-w-2xl">
              {brandData.mission}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onGoToCalendar}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>Explore 30-Day Master Calendar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onDownloadDoc}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Export Official .DOC Deliverable</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-4/3 rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-200">
              <img
                src={brandData.heroImage}
                alt="TERRA & THREAD Sustainable Studio Wardrobe"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
              <span>Porto Atelier Autumn Studio</span>
              <span>100% Normandy Linen & Wool</span>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Manifesto Callout */}
      <section className="border-y border-stone-200 py-10 px-4 sm:px-8 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-900">Brand Manifesto</span>
        <blockquote className="font-editorial text-xl sm:text-2xl text-stone-800 italic leading-relaxed text-balance">
          "{brandData.manifesto}"
        </blockquote>
      </section>

      {/* Visual Aesthetic Strip */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-editorial text-2xl font-bold text-stone-900">Visual Identity & Tactile Pillars</h2>
          <span className="text-xs text-stone-500 font-mono">Organic Fibers · Natural Dyes</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden border border-stone-200 bg-white p-3 space-y-3">
            <div className="aspect-4/3 rounded-lg overflow-hidden bg-stone-100">
              <img
                src={brandData.textileImage}
                alt="Tactile undyed hemp and linen weave"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 text-sm">Undyed Raw Flax & Hemp</h3>
              <p className="text-xs text-stone-500 mt-1">100% Rain-fed Normandy flax, zero synthetic pesticides, water-free retting.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-stone-200 bg-white p-3 space-y-3">
            <div className="aspect-4/3 rounded-lg overflow-hidden bg-stone-100">
              <img
                src={brandData.artisanImage}
                alt="Master tailor cutting pattern on oak table"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 text-sm">Hereditary Craft in Porto</h3>
              <p className="text-xs text-stone-500 mt-1">Zero-waste geometric pattern cutting, French seams, fair living wages (2.4× minimum).</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-stone-200 bg-white p-3 space-y-3">
            <div className="aspect-4/3 rounded-lg overflow-hidden bg-stone-100">
              <img
                src={brandData.capsuleImage}
                alt="Minimalist conscious capsule flat-lay"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 text-sm">The 10-Piece Perennial Capsule</h3>
              <p className="text-xs text-stone-500 mt-1">Botanical madder dye, raw selvedge denim, Corozo nut buttons, infinite styling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Content Pillars */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono text-emerald-900 uppercase tracking-wider">Strategic Content Architecture</span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 mt-1">The Five Monthly Pillars</h2>
          <p className="text-sm text-stone-600 max-w-2xl mt-1">
            Every post in the 30-day calendar serves one of these five strategic goals, preventing one-dimensional sales pitches and building long-term ethical authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brandData.pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-white border border-stone-200 rounded-xl p-5 space-y-4 hover:border-stone-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-800 font-mono">
                  {pillar.targetShare}% Mix
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-stone-900">{pillar.name}</h3>
                <p className="text-xs text-emerald-800 italic mt-0.5">{pillar.tagline}</p>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                {pillar.description}
              </p>

              <div className="pt-2 border-t border-stone-100">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide block mb-2">Recurring Themes</span>
                <div className="flex flex-wrap gap-1.5 text-xs text-stone-600">
                  {pillar.coreThemes.map((theme, tIdx) => (
                    <span key={tIdx} className="bg-stone-50 border border-stone-200/80 px-2 py-0.5 rounded text-[11px]">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Quick Summary Card */}
          <div className="bg-emerald-950 text-white rounded-xl p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">Monthly Commitment</span>
              <h3 className="font-editorial text-xl font-bold text-white">Zero Greenwashing Policy</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                We never use vague words like "planet-friendly" or "green". Every post must cite exact metrics, verified certificate license IDs, or artisan names.
              </p>
            </div>
            <div className="pt-4 border-t border-emerald-900/60">
              <button
                onClick={onGoToCalendar}
                className="w-full py-2 px-3 text-xs font-medium text-center bg-white text-emerald-950 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              >
                View 30-Day Execution Schedule &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Personas */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono text-emerald-900 uppercase tracking-wider">Audience Analysis</span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 mt-1">Target Personas & Psychographics</h2>
          <p className="text-sm text-stone-600 max-w-2xl mt-1">
            Understanding consumer friction points ensures our post hooks resonate deeply with conscious consumers who are skeptical of standard retail marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandData.personas.map((persona, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div>
                  <h3 className="font-bold text-stone-900 text-base">{persona.name}</h3>
                  <p className="text-xs text-stone-500">{persona.role} · Age {persona.age}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-serif font-bold text-stone-700">
                  {persona.name.charAt(0)}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">Lifestyle Context</span>
                <p className="text-xs text-stone-700 mt-1 leading-relaxed">{persona.lifestyle}</p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-rose-800 uppercase tracking-wider">Core Pain Points</span>
                <ul className="text-xs text-stone-600 space-y-1">
                  {persona.painPoints.map((pain, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 shrink-0 mt-0.5">•</span>
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">Content & Purchase Drivers</span>
                <ul className="text-xs text-stone-600 space-y-1">
                  {persona.purchasingDrivers.map((driver, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-emerald-700 shrink-0 mt-0.5">✓</span>
                      <span>{driver}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-stone-100 text-xs text-stone-500">
                <span className="font-medium text-stone-700">Primary Channels:</span> {persona.preferredChannels.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voice & Tone Matrix */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono text-emerald-900 uppercase tracking-wider">Brand Editorial Voice</span>
          <h2 className="font-editorial text-2xl font-bold text-stone-900 mt-1">Copywriting Rules: What We Say vs What We Ban</h2>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-200">
          {brandData.voiceAndTone.map((vt, idx) => (
            <div key={idx} className="p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4">
                <h3 className="font-bold text-stone-900 text-sm">{vt.attribute}</h3>
                <p className="text-xs text-stone-500 mt-1">{vt.explanation}</p>
              </div>
              <div className="md:col-span-4 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block mb-1">Do (Our Voice)</span>
                <p className="text-xs text-emerald-950 font-medium italic leading-relaxed">"{vt.doText}"</p>
              </div>
              <div className="md:col-span-4 bg-rose-50/50 p-3 rounded-lg border border-rose-100">
                <span className="text-[11px] font-bold text-rose-900 uppercase tracking-wider block mb-1">Don't (Fast Fashion Slop)</span>
                <p className="text-xs text-rose-950 italic leading-relaxed">"{vt.dontText}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications and Color Palette */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4">
          <h3 className="font-editorial text-lg font-bold text-stone-900">Third-Party Verification Standards</h3>
          <p className="text-xs text-stone-600">
            Every garment claim is substantiated by audited independent standard organizations:
          </p>
          <ul className="space-y-2 text-xs text-stone-700">
            {brandData.certifications.map((cert, cIdx) => (
              <li key={cIdx} className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4">
          <h3 className="font-editorial text-lg font-bold text-stone-900">Brand Color Atmosphere</h3>
          <p className="text-xs text-stone-600">
            Naturally derived pigments: raw unbleached flax, plant indigo, madder root, and wild charcoal.
          </p>
          <div className="grid grid-cols-5 gap-2 pt-2">
            {brandData.colorPalette.map((col, idx) => (
              <div key={idx} className="text-center space-y-1.5">
                <div
                  className="w-full aspect-square rounded-lg border border-stone-300 shadow-xs"
                  style={{ backgroundColor: col.hex }}
                />
                <span className="block text-[10px] font-medium text-stone-800 leading-tight">{col.name}</span>
                <span className="block text-[9px] font-mono text-stone-400">{col.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
