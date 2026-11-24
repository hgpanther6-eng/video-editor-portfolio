// ============================================================
// FEATURED VIDEOS — Ronak Gadhavi Portfolio
// Accurately configured for native video aspect ratios:
// - 9:16 (1080x1920 Vertical Reels / Shorts)
// - 16:9 (1920x1080 Widescreen Films / Commercials)
// - 4:5 (720x900 Social & Motion Graphics)
// ============================================================

export interface FeaturedVideo {
  id: string;
  title: string;
  category: string;
  format: '9:16' | '16:9' | '4:5';
  aspectRatio: string;
  width: number;
  height: number;
  videoSrc: string;
  description: string;
  year: string;
  client?: string;
  badge: string;
}

const featuredVideos: FeaturedVideo[] = [
  // ── 9:16 VERTICAL REELS ──
  {
    id: 'v-vinyl',
    title: 'Halucinated Vinyl Crown Promo',
    category: 'Product Promo',
    format: '9:16',
    aspectRatio: '9/16',
    width: 1080,
    height: 1920,
    videoSrc: '/assets/video/vinyl-crown-promo.mp4',
    description: 'Cinematic promotional piece highlighting vinyl craft, texture, and visual identity with premium pacing and grade.',
    year: '2024',
    client: 'Vinyl Crown',
    badge: '9:16 Vertical Promo',
  },

  // ── 4:5 MOTION GRAPHICS ──
  {
    id: 'v-bounc',
    title: 'Bounc — Kinetic Motion Design',
    category: 'Motion Graphics',
    format: '4:5',
    aspectRatio: '4/5',
    width: 720,
    height: 900,
    videoSrc: '/assets/video/bounc.mp4',
    description: 'Fluid kinetic typography and physics-driven motion design study exploring playful elasticity and brand pacing.',
    year: '2024',
    badge: '4:5 Motion Design',
  },

  // ── 16:9 WIDESCREEN FILMS & COMMERCIALS ──
  {
    id: 'v-workly',
    title: 'Workly — App & Product Promo',
    category: 'Product Film',
    format: '16:9',
    aspectRatio: '16/9',
    width: 1920,
    height: 1080,
    videoSrc: '/assets/video/workly-final.mp4',
    description: 'Clean, modern product film showcasing software UI, smooth workflow animations, and user benefit storytelling.',
    year: '2024',
    client: 'Workly',
    badge: '16:9 Widescreen',
  },
  {
    id: 'v-payments',
    title: 'A Smarter Way to Manage Online Payments',
    category: 'Corporate Film',
    format: '16:9',
    aspectRatio: '16/9',
    width: 1920,
    height: 1080,
    videoSrc: '/assets/video/online-payments.mp4',
    description: 'Corporate product video explaining institution payment architecture with polished typography and financial UI motion.',
    year: '2024',
    client: 'OpenEduCat',
    badge: '16:9 Corporate',
  },
  {
    id: 'v-ai-erp',
    title: 'AI in Education ERP — Transforming Management',
    category: 'Corporate & AI',
    format: '16:9',
    aspectRatio: '16/9',
    width: 1920,
    height: 1080,
    videoSrc: '/assets/video/ai-education-erp.mp4',
    description: 'Visionary explainer video exploring how artificial intelligence is transforming modern education management systems.',
    year: '2024',
    client: 'OpenEduCat',
    badge: '16:9 Explainer',
  },
  {
    id: 'v-erp-cio',
    title: 'Choosing an Education ERP — 5 Questions Every CIO Should Ask',
    category: 'Executive Series',
    format: '16:9',
    aspectRatio: '16/9',
    width: 1920,
    height: 1080,
    videoSrc: '/assets/video/choosing-education-erp.mp4',
    description: 'Executive thought leadership piece tailored for CIOs and university decision makers, blending documentary pacing with clean graphics.',
    year: '2024',
    client: 'OpenEduCat',
    badge: '16:9 Executive',
  },
];

export default featuredVideos;
