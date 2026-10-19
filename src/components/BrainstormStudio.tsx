import React, { useState } from 'react';
import { brandData } from '../data/brandData';
import { SocialPost } from '../data/postsData';
import { Sparkles, Plus, RefreshCw, Lightbulb, Check, ArrowRight, Wand2 } from 'lucide-react';

interface BrainstormStudioProps {
  onAddCustomPost: (newPost: SocialPost) => void;
  existingPostsCount: number;
}

interface IdeaSeed {
  title: string;
  pillarId: string;
  pillarName: string;
  channel: 'Instagram' | 'TikTok' | 'Pinterest' | 'LinkedIn';
  format: 'Carousel' | 'Reel / Video' | 'Editorial Still' | 'Infographic Guide' | 'Long-form Essay' | 'Community Q&A';
  hookType: 'Contrarian' | 'Curiosity' | 'Hard Data' | 'Sensory/Poetic';
  hook: string;
  briefDescription: string;
  captionIdea: string;
  creativeIdea: string;
  hashtags: string[];
}

const ideaSeeds: IdeaSeed[] = [
  {
    title: "The Microfiber Wash Test: What 1 Synthetic Sweater Does to Tap Water",
    pillarId: "material-science",
    pillarName: "Material & Fiber Science",
    channel: "TikTok",
    format: "Reel / Video",
    hookType: "Contrarian",
    hook: "You might be drinking your old polyester gym shirt right now.",
    briefDescription: "Showcases a laboratory coffee filter test after a single synthetic fleece wash cycle, revealing trapped blue microfibers under an illuminated optical loupe.",
    captionIdea: "Every time a synthetic garment is washed, it sheds thousands of microscopic plastic threads that slip right through municipal water treatment plants. That's why we weave exclusively with 100% natural, biodegradable European flax and organic wool.",
    creativeIdea: "Documentary lab style. Macro camera panning from kitchen tap water through a micron-fine mesh filter showing colorful microscopic filament threads. Tone is investigative and calm.",
    hashtags: ["#Microplastics", "#CleanWater", "#NaturalFibers", "#SlowFashionTok", "#PlasticFreeLiving"]
  },
  {
    title: "1 Jacket, 7 Days, Zero People Noticed: The Outfit Repeater Experiment",
    pillarId: "capsule-styling",
    pillarName: "Capsule Styling & Versatility",
    channel: "Instagram",
    format: "Carousel",
    hookType: "Curiosity",
    hook: "I wore the exact same linen chore coat every single day for a week. Nobody noticed.",
    briefDescription: "Humorous and liberating experiment debunking the social anxiety of 'outfit repeating', demonstrating subtle styling shifts with scarves, rolling sleeves, and trouser pairings.",
    captionIdea: "Fast fashion thrives on making you feel paranoid about repeating outfits. In reality, nobody remembers what you wore on Tuesday—and when you invest in an impeccably cut architectural jacket, wearing it daily becomes your signature silhouette.",
    creativeIdea: "Clean 7-slide carousel featuring daily snapshots taken in the exact same elevator mirror spot with different accessories and pants.",
    hashtags: ["#OutfitRepeating", "#CapsuleWardrobe", "#ChoreCoat", "#SlowFashion", "#StyleConfidence"]
  },
  {
    title: "The Death of Dry Cleaning: Why We Engineered Machine-Washable Organic Wool",
    pillarId: "circular-care",
    pillarName: "The Mending Club & Care",
    channel: "Pinterest",
    format: "Infographic Guide",
    hookType: "Hard Data",
    hook: "Dry cleaning chemicals (PERC) are classified as probable human carcinogens. There is a better way.",
    briefDescription: "Educational infographic detailing how conventional dry cleaners use perchloroethylene and why cold-water hand washing with organic cedar soap is healthier for skin and fabric.",
    captionIdea: "Most luxury coats say 'Dry Clean Only' because brands use cheap fusible interlinings that melt in water. We tailor with horsehair canvas and pre-washed organic wool so you can refresh your outerwear safely at home.",
    creativeIdea: "Clean vertical aesthetic guide with side-by-side comparison of toxic dry cleaner bags vs natural wood drying rack and olive oil soap.",
    hashtags: ["#EcoLaundry", "#NaturalCare", "#WoolMaintenance", "#NonToxicHome", "#SlowLiving"]
  },
  {
    title: "What Happens to 'Donated' Clothes: The Journey to Ghana's Kantamanto Market",
    pillarId: "honest-accounting",
    pillarName: "Radical Transparency",
    channel: "LinkedIn",
    format: "Long-form Essay",
    hookType: "Hard Data",
    hook: "85% of clothing you drop into charity donation bins does not get worn by someone in need.",
    briefDescription: "Rigorous supply chain essay analyzing the secondhand clothing trade, where millions of weekly metric tons of fast-fashion synthetic waste overwhelm West African ecosystems.",
    captionIdea: "Dropping fast fashion into a donation bin is often just outsourcing municipal landfill burdens to the Global South. The only true solution is producing fewer, better garments engineered for multi-decade lifecycles.",
    creativeIdea: "Infographic map tracking international textile export flows with verified academic citations from the Or Foundation.",
    hashtags: ["#TextileWaste", "#CircularEconomy", "#SupplyChainEthics", "#ExtendedProducerResponsibility", "#Sustainability"]
  },
  {
    title: "How to Tell Real Linen from Fake Rayon Blends in 5 Seconds",
    pillarId: "material-science",
    pillarName: "Material & Fiber Science",
    channel: "TikTok",
    format: "Reel / Video",
    hookType: "Sensory/Poetic",
    hook: "Stop getting tricked by 'linen-feel' tags. Here are the 3 physical tests.",
    briefDescription: "Quick, tactile in-store shopping hacks: the temperature touch test, the natural weave slub check, and the crease recovery test.",
    captionIdea: "Fast fashion brands frequently label shirts 'Linen Blend' when they are actually 85% synthetic viscose rayon. Real linen feels cool to the touch immediately, displays natural slub irregularities, and smells like dried sweet grass.",
    creativeIdea: "Handheld macro demonstration in bright natural light, crushing a swatch in the fist and releasing to demonstrate genuine flax fiber memory.",
    hashtags: ["#LinenHacks", "#FabricCheck", "#SmartShopping", "#SlowFashionTips", "#SustainableStyle"]
  }
];

export const BrainstormStudio: React.FC<BrainstormStudioProps> = ({
  onAddCustomPost,
  existingPostsCount
}) => {
  const [selectedSeedIndex, setSelectedSeedIndex] = useState(0);
  const [customTitle, setCustomTitle] = useState('');
  const [customPillar, setCustomPillar] = useState('material-science');
  const [customChannel, setCustomChannel] = useState<'Instagram' | 'TikTok' | 'Pinterest' | 'LinkedIn'>('Instagram');
  const [customFormat, setCustomFormat] = useState<'Carousel' | 'Reel / Video' | 'Editorial Still' | 'Infographic Guide' | 'Long-form Essay' | 'Community Q&A'>('Carousel');
  const [customHook, setCustomHook] = useState('');
  const [customCaption, setCustomCaption] = useState('');
  const [customDirection, setCustomDirection] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const activeSeed = ideaSeeds[selectedSeedIndex];

  const handleApplySeed = (seed: IdeaSeed) => {
    setCustomTitle(seed.title);
    setCustomPillar(seed.pillarId);
    setCustomChannel(seed.channel);
    setCustomFormat(seed.format);
    setCustomHook(seed.hook);
    setCustomCaption(seed.captionIdea);
    setCustomDirection(seed.creativeIdea);
  };

  const handleAddPostToCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    const pillarObj = brandData.pillars.find(p => p.id === customPillar);

    const newPost: SocialPost = {
      id: Date.now(),
      day: existingPostsCount + 1,
      proposedDate: `Nov ${String(existingPostsCount + 1).padStart(2, '0')}, 2026`,
      weekday: "Strategic Add-On",
      title: customTitle,
      pillarId: customPillar,
      pillarName: pillarObj ? pillarObj.name : "Custom Pillar",
      channel: customChannel,
      format: customFormat,
      timeSlot: "06:30 PM CET",
      briefDescription: `Brainstormed addition focused on ${pillarObj?.name}.`,
      hook: customHook || customTitle,
      fullCaption: customCaption || customTitle,
      hashtags: ["#SlowFashion", "#TerraAndThread", "#SustainableWardrobe", "#ConsciousLiving"],
      creativeDirection: customDirection || "Editorial natural lighting with authentic studio staging.",
      callToAction: "Save this post and share your perspective below.",
      kpiGoal: "Saves & Bookmarks",
      status: "Ready"
    };

    onAddCustomPost(newPost);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    // Reset fields
    setCustomTitle('');
    setCustomHook('');
    setCustomCaption('');
    setCustomDirection('');
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Studio Header */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-900 uppercase">
          <Sparkles className="w-4 h-4" />
          <span>Content Ideation Laboratory</span>
          <span aria-hidden="true">·</span>
          <span>Anti-Fast Fashion Framework</span>
        </div>
        <h2 className="font-editorial text-3xl font-bold text-stone-900">
          Brainstorming & Content Angle Studio
        </h2>
        <p className="text-sm text-stone-600 max-w-3xl leading-relaxed">
          Stuck on how to make sustainability interesting without being preachy? Use these curated research angles—myth-busting, macro-textile science, wardrobe math, and artisan secrets—to generate new high-engagement posts.
        </p>
      </div>

      {/* Idea Seed Prompter */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-editorial text-xl font-bold text-stone-900">
            Curated Sustainable Angles & High-Converting Hooks
          </h3>
          <span className="text-xs text-stone-500 font-mono">Select an angle to populate below</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ideaSeeds.map((seed, idx) => (
            <div
              key={idx}
              onClick={() => handleApplySeed(seed)}
              className="group bg-white border border-stone-200 hover:border-emerald-800 rounded-xl p-4 transition-all cursor-pointer flex flex-col justify-between space-y-3 hover:shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-medium text-emerald-950 px-2 py-0.5 rounded bg-emerald-50">
                    {seed.hookType} Hook
                  </span>
                  <span className="text-stone-400 font-mono">{seed.channel}</span>
                </div>
                <h4 className="font-editorial text-sm font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                  {seed.title}
                </h4>
                <p className="text-xs text-stone-600 italic line-clamp-2">
                  "{seed.hook}"
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-emerald-900 font-medium">
                <span>Load into Generator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Creator / Remix Form */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div>
            <h3 className="font-editorial text-xl font-bold text-stone-900">
              Create / Customize a New Post Brief
            </h3>
            <p className="text-xs text-stone-500">
              Draft a new angle and append it directly to your master plan and .DOC export.
            </p>
          </div>
          {isSuccess && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <Check className="w-4 h-4" />
              <span>Added to Master Plan!</span>
            </div>
          )}
        </div>

        <form onSubmit={handleAddPostToCalendar} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                Content Pillar
              </label>
              <select
                value={customPillar}
                onChange={(e) => setCustomPillar(e.target.value)}
                className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-800 focus:outline-none"
              >
                {brandData.pillars.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                Primary Channel
              </label>
              <select
                value={customChannel}
                onChange={(e) => setCustomChannel(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-800 focus:outline-none"
              >
                <option value="Instagram">Instagram</option>
                <option value="TikTok">TikTok</option>
                <option value="Pinterest">Pinterest</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
                Content Format
              </label>
              <select
                value={customFormat}
                onChange={(e) => setCustomFormat(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-800 focus:outline-none"
              >
                <option value="Carousel">Multi-slide Carousel</option>
                <option value="Reel / Video">Short-form Reel / Video</option>
                <option value="Editorial Still">Editorial Still</option>
                <option value="Infographic Guide">Infographic Guide</option>
                <option value="Long-form Essay">Long-form Essay</option>
                <option value="Community Q&A">Community Q&A</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
              Post Title & Theme
            </label>
            <input
              type="text"
              required
              placeholder="e.g. The 5-Year Coat Test: What Truly Sustainable Wool Looks Like After 400 Wears"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              className="w-full text-sm font-medium p-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
              Attention-Grabbing Opening Hook (First 3 Seconds)
            </label>
            <input
              type="text"
              placeholder="e.g. Cheap clothes are the most expensive things you will ever buy."
              value={customHook}
              onChange={(e) => setCustomHook(e.target.value)}
              className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
              Sample Caption Copy
            </label>
            <textarea
              rows={4}
              placeholder="Write or paste your caption draft here..."
              value={customCaption}
              onChange={(e) => setCustomCaption(e.target.value)}
              className="w-full text-xs p-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-600 uppercase mb-1">
              Creative Art Direction / Visual Specs
            </label>
            <input
              type="text"
              placeholder="e.g. Minimalist flat lay on stone surface, natural window light, macro texture shot of hem stitching."
              value={customDirection}
              onChange={(e) => setCustomDirection(e.target.value)}
              className="w-full text-xs p-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:ring-1 focus:ring-emerald-800 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Append Post to Plan</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};
