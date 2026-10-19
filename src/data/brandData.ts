export interface BrandPersona {
  name: string;
  role: string;
  age: string;
  lifestyle: string;
  painPoints: string[];
  purchasingDrivers: string[];
  preferredChannels: string[];
}

export interface ContentPillar {
  id: string;
  name: string;
  color: string;
  tagline: string;
  description: string;
  targetShare: number; // percentage
  coreThemes: string[];
}

export interface BrandData {
  name: string;
  tagline: string;
  founded: string;
  locations: string;
  mission: string;
  manifesto: string;
  values: {
    title: string;
    description: string;
  }[];
  certifications: string[];
  colorPalette: {
    name: string;
    hex: string;
    role: string;
  }[];
  voiceAndTone: {
    attribute: string;
    explanation: string;
    doText: string;
    dontText: string;
  }[];
  personas: BrandPersona[];
  pillars: ContentPillar[];
  channels: {
    platform: string;
    weeklyCadence: string;
    primaryRole: string;
    formats: string[];
  }[];
  heroImage: string;
  textileImage: string;
  artisanImage: string;
  capsuleImage: string;
}

export const brandData: BrandData = {
  name: "TERRA & THREAD",
  tagline: "Honest Garments for Thoughtful Living",
  founded: "2023",
  locations: "Copenhagen & Porto",
  mission: "Pioneering regenerative circular fashion by eliminating synthetic microfibers, honoring hereditary artisan craftsmanship, and guaranteeing radical supply chain transparency from organic seed to finished seam.",
  manifesto: "Fast fashion taught the world to treat garments as disposable napkins. We reject the tyranny of fifty-two trend cycles a year. Every piece we tailor is cut from soil-to-soil regenerative fibers, assembled by artisans earning dignified living wages, and designed to outlive the person wearing it. When clothing is made with reverence for the earth and the hands that sew it, luxury becomes quiet, enduring, and ethical.",
  values: [
    {
      title: "Radical Seed-to-Seam Traceability",
      description: "100% verified farm origin with open-source digital textile passports mapping farmers, spinning mills, and sewing ateliers."
    },
    {
      title: "Zero Petroleum Synthetics",
      description: "Strictly natural, compostable bio-fibers: European linen, certified organic GOTS cotton, regenerative Merino wool, and wild botanical dyes. Zero polyester or nylon microplastics."
    },
    {
      title: "Lifetime Mending Guarantee",
      description: "Every garment includes complimentary lifetime repairs and free annual restoration kits to keep clothing in wardrobes and out of landfills."
    },
    {
      title: "Living Wage Transparency",
      description: "All craftspeople in our Porto and Scandinavian partner workshops receive certified living wages at 2.4× the regional statutory minimum."
    },
    {
      title: "Anti-Overconsumption Model",
      description: "Only 2 curated capsule collections per year. No seasonal clearance sales, no artificial scarcity, and zero burn/landfill inventory."
    }
  ],
  certifications: [
    "GOTS (Global Organic Textile Standard) Certified",
    "OEKO-TEX Standard 100 Class I",
    "Fair Wear Foundation Leader Status",
    "B-Corp Certified (Score: 114.2)",
    "Cradle to Cradle Certified Gold (Textile Range)"
  ],
  colorPalette: [
    { name: "Unbleached Linen", hex: "#F5F2EB", role: "Primary Canvas & Packaging" },
    { name: "Forest Moss", hex: "#2A3D30", role: "Deep Editorial Accent & Wordmark" },
    { name: "Terracotta Earth", hex: "#A85337", role: "Warm CTA & Highlights" },
    { name: "River Indigo", hex: "#2C3E4C", role: "Denim & Structural Elements" },
    { name: "Wild Sandstone", hex: "#D9CEBA", role: "Neutral Midtone & Divider" }
  ],
  voiceAndTone: [
    {
      attribute: "Quietly Authoritative",
      explanation: "Educate through peer-reviewed textile science and supply chain realities rather than moralizing sermons.",
      doText: "Share exact water metrics: 'This hemp jacket consumed 180 liters of rainwater vs 2,700 liters of irrigated cotton.'",
      dontText: "Avoid self-righteous preaching: 'Stop destroying the planet with fast fashion.'"
    },
    {
      attribute: "Tactile & Poetic",
      explanation: "Highlight the sensory experience of unadulterated natural materials, weave densities, and patina over time.",
      doText: "Describe hand-feel: 'Crisp Normandy flax that softens with every Atlantic rinse.'",
      dontText: "Avoid buzzword spam: 'The ultimate eco-friendly must-have trendy drop.'"
    },
    {
      attribute: "Radically Transparent",
      explanation: "Openly discuss cost breakdowns, manufacturing hurdles, and areas where sustainability is still evolving.",
      doText: "Disclose margins: 'Our organic buttons cost €1.40 each; here is our complete cost sheet.'",
      dontText: "Never hide trade-offs or pretend 100% perfection exists in modern logistics."
    }
  ],
  personas: [
    {
      name: "Elena Vance",
      role: "Architectural Designer",
      age: "31",
      lifestyle: "Urban, intentional apartment living, values Japanese and Nordic minimalist furniture, maintains a 35-piece capsule wardrobe.",
      painPoints: ["Greenwashing fatigue", "Garments that shrink or fray after 3 washes", "Fast fashion brands pretending to be green"],
      purchasingDrivers: ["Versatile architectural tailoring", "Durable natural fibers", "Transparent cost per wear"],
      preferredChannels: ["Instagram", "Pinterest"]
    },
    {
      name: "Marcus Chen",
      role: "Clean-Tech Analyst",
      age: "28",
      lifestyle: "Cyclist, outdoor enthusiast, research-driven consumer who scrutinizes product labels and carbon audit reports.",
      painPoints: ["Vague 'sustainable collection' marketing", "Synthetic fleece shedding microplastics into waterways"],
      purchasingDrivers: ["Hard data and third-party certifications", "Circular lifecycle guarantees", "Timeless utilitarian basics"],
      preferredChannels: ["TikTok", "LinkedIn", "Instagram"]
    },
    {
      name: "Sofia Morales",
      role: "Ceramic Studio Founder",
      age: "42",
      lifestyle: "Artisan craft advocate, values tactile handmade objects, repairs her own garments, buys less than 6 new wardrobe pieces per year.",
      painPoints: ["Homogenized mall aesthetics", "Lack of size-inclusive slow fashion", "Cheap plastic zippers and synthetic blends"],
      purchasingDrivers: ["Visible craft & artisan credit", "Botanical dye subtleties", "Garments made to become family heirlooms"],
      preferredChannels: ["Instagram", "Pinterest"]
    }
  ],
  pillars: [
    {
      id: "material-science",
      name: "Material & Fiber Science",
      color: "#2A3D30",
      tagline: "Unmasking fabrics from seed to soil",
      description: "Deep-dive education on regenerative agriculture, natural fiber microbiology, the dangers of microplastics, and botanical non-toxic dye chemistry.",
      targetShare: 25,
      coreThemes: ["Normandy Flax vs Irrigated Cotton", "Microplastic water contamination", "Botanical madder root dyeing", "Compostable garment tests"]
    },
    {
      id: "artisan-craft",
      name: "Atelier & Human Hands",
      color: "#8C4A2F",
      tagline: "Honoring the skilled makers",
      description: "Documentary spotlights on our pattern-makers, cutters, and seamstresses in Porto, celebrating hereditary textile techniques and fair living wages.",
      targetShare: 20,
      coreThemes: ["Meet the master pattern cutter", "Living wage receipts", "Zero-waste marker layouts", "The anatomy of a bound seam"]
    },
    {
      id: "circular-care",
      name: "The Mending Club & Care",
      color: "#2C3E4C",
      tagline: "Clothing engineered to outlive you",
      description: "Empowering our audience with low-impact laundry practices, Japanese Sashiko mending tutorials, sweater de-pilling, and our lifetime repair service.",
      targetShare: 20,
      coreThemes: ["Sashiko denim reinforcement", "Cold-wash wool care", "De-pilling organic knitwear", "Customer repair before-and-after"]
    },
    {
      id: "capsule-styling",
      name: "Capsule Styling & Versatility",
      color: "#5C6B5E",
      tagline: "More expression with fewer garments",
      description: "Actionable style formulas showing how 5 foundational pieces yield 20+ timeless looks across seasons, office, travel, and leisure.",
      targetShare: 20,
      coreThemes: ["10 Pieces x 30 Days", "The True Cost-Per-Wear Formula", "Day to Evening Linen Layering", "Packing a week in one carry-on"]
    },
    {
      id: "honest-accounting",
      name: "Radical Transparency",
      color: "#7E5835",
      tagline: "No secrets, no greenwashing",
      description: "Publishing complete price architectures, carbon bills, water footprints, supply chain challenges, and what sustainability goals we still haven't reached.",
      targetShare: 15,
      coreThemes: ["Where your €180 goes", "Carbon receipt of a single parcel", "Why we don't have Black Friday sales", "Annual sustainability progress report"]
    }
  ],
  channels: [
    {
      platform: "Instagram",
      weeklyCadence: "5 posts + daily interactive stories",
      primaryRole: "Visual brand world, educational carousels, aesthetic styling reels, community interaction",
      formats: ["10-Slide Educational Carousels", "Short-Form High-Fidelity Reels", "Editorial High-Res Stills"]
    },
    {
      platform: "TikTok",
      weeklyCadence: "3-4 videos",
      primaryRole: "Unfiltered atelier reality, textile myth-busting, macro fabric tests, repair hacks",
      formats: ["Behind-the-Seams Talking Heads", "Textile Burn/Water Tests", "Mending Timelapses"]
    },
    {
      platform: "Pinterest",
      weeklyCadence: "7-10 idea pins & visual boards",
      primaryRole: "Long-tail evergreen discovery for capsule wardrobe formulas, aesthetic moodboards, eco-care infographics",
      formats: ["Infographic Pin Guides", "Capsule Wardrobe Flat-lays", "Palette Moodboards"]
    },
    {
      platform: "LinkedIn",
      weeklyCadence: "1-2 strategic thought leadership posts",
      primaryRole: "B2B credibility, founder perspectives on regenerative supply chain logistics, circular economic models",
      formats: ["Founder First-Person Essays", "Supply Chain Architecture Breakdowns", "Living Wage Case Studies"]
    }
  ],
  heroImage: "/src/assets/images/sustainable_fashion_hero_1792384377545.jpg",
  textileImage: "/src/assets/images/sustainable_textile_closeup_1792384378463.jpg",
  artisanImage: "/src/assets/images/sustainable_atelier_artisan_1792384379776.jpg",
  capsuleImage: "/src/assets/images/sustainable_capsule_collection_1792384379096.jpg"
};
