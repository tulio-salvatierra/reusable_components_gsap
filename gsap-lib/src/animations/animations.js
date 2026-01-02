
export const TARGETS = ["headline", "subhead", "primaryCta", "secondaryCta", "image"];

export const animationRecipes = [
  {
    id: "fade-up-hero",
    name: "Fade Up Hero",
    description: "Smooth fade-in with upward motion for a calm, polished entrance.",
    defaults: { duration: 0.8, ease: "power2.out" },
    timeline: [
      { target: "headline", from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 } },
      { target: "subhead",  from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 }, at: "-=0.4" },
      { target: "primaryCta", from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, at: "-=0.3" },
      { target: "secondaryCta", from: { opacity: 0, y: 16 }, to: { opacity: 1, y: 0 }, at: "-=0.25"},
    ],
  },

  {
    id: "stagger-pop",
    name: "Stagger Pop",
    description: "Playful pop-in using scale + stagger-like pacing.",
    defaults: { duration: 0.5, ease: "back.out(1.6)" },
    timeline: [
      { target: "headline", from: { opacity: 0, scale: 0.9 }, to: { opacity: 1, scale: 1 } },
      { target: "subhead",  from: { opacity: 0, scale: 0.95 }, to: { opacity: 1, scale: 1 }, at: "-=0.2" },
      { target: "primaryCta", from: { opacity: 0, scale: 0.85 }, to: { opacity: 1, scale: 1 }, at: "-=0.2" },
      { target: "secondaryCta", from: { opacity: 0, scale: 0.85 }, to: { opacity: 1, scale: 1 }, at: "-=0.2" },
    ],
  },

  {
    id: "slide-split",
    name: "Slide Split",
    description: "Text slides in from the left while the image enters from the right.",
    defaults: { duration: 0.9, ease: "power3.out" },
    timeline: [
      { target: "headline", from: { opacity: 0, x: -80 }, to: { opacity: 1, x: 0 } },
      { target: "subhead",  from: { opacity: 0, x: -60 }, to: { opacity: 1, x: 0 }, at: "-=0.5" },
      { target: "image",    from: { opacity: 0, x: 80 }, to: { opacity: 1, x: 0 }, at: "-=0.6" },
       { target: "primaryCta", from: { opacity: 0, x: 0.85 }, to: { opacity: 1, x: 0 }, at: "-=0.2" },
      { target: "secondaryCta", from: { opacity: 0, x: 0.85 }, to: { opacity: 1, x: 0 }, at: "-=0.2" }
    ],
  },

  {
    id: "minimal-fade",
    name: "Minimal Fade",
    description: "Subtle opacity-only fade (nice for reduced-motion friendly UIs).",
    defaults: { duration: 0.6, ease: "power1.out" },
    timeline: [
      { target: "headline", from: { opacity: 0 }, to: { opacity: 1 } },
      { target: "subhead",  from: { opacity: 0 }, to: { opacity: 1 }, at: "-=0.3" },
    ],
  },

  {
    id: "hero-cascade",
    name: "Hero Cascade",
    description: "Cascading entrance that guides the eye from headline to CTAs.",
    defaults: { duration: 0.7, ease: "power2.out" },
    timeline: [
      { target: "headline", from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
      { target: "subhead",  from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 }, at: "-=0.4" },
      { target: "primaryCta", from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 }, at: "-=0.3" },
      { target: "secondaryCta", from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, at: "-=0.2" },
    ],
  },
];