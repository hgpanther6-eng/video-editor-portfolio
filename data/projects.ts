export type ProjectCategory =
  | 'Product Films'
  | 'Motion Graphics'
  | 'Corporate Videos'
  | 'Real Estate'
  | 'Social Media'
  | 'Experimental Work';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  client?: string;
  description: string;
  objective: string;
  approach: string;
  myRole: string;
  tools: string[];
  process: string;
  thumbnailAspect: '16:9' | '4:3' | '1:1' | '9:16';
  thumbnailPlaceholderLabel: string;
  heroPlaceholderLabel: string;
  finalVideoPlaceholderLabel: string;
  supportingImageLabels: string[];
  isConfidential?: boolean;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    slug: 'product-film-01',
    title: '[PROJECT TITLE — PRODUCT FILM]',
    category: 'Product Films',
    year: '2024',
    client: '[CLIENT NAME]',
    description: 'A cinematic product showcase highlighting form, texture and motion — designed to convert attention into desire.',
    objective: '[Describe what the brand needed: launch campaign, e-commerce video, unboxing reveal, etc.]',
    approach: '[Describe your creative choices: lighting references, pacing, music direction, colour palette decisions.]',
    myRole: 'Video Editor · Motion Graphics · Colour Grade',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Firefly'],
    process: '[Walk through pre-production planning, shoot coordination, offline edit, motion graphics, colour and delivery.]',
    thumbnailAspect: '4:3',
    thumbnailPlaceholderLabel: '[PROJECT THUMBNAIL: PRODUCT FILM, 4:3, 1200×900px, .jpg/.webp]',
    heroPlaceholderLabel: '[CASE STUDY HERO: PRODUCT FILM VIDEO, 16:9, .mp4]',
    finalVideoPlaceholderLabel: '[FINAL PRODUCT FILM VIDEO, 16:9, .mp4]',
    supportingImageLabels: [
      '[PROCESS IMAGE: COLOUR GRADE SCREENSHOT, 16:9]',
      '[PROCESS IMAGE: MOTION GRAPHICS FRAME, 16:9]',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'motion-graphics-01',
    title: '[PROJECT TITLE — MOTION GRAPHICS]',
    category: 'Motion Graphics',
    year: '2024',
    client: '[CLIENT NAME]',
    description: 'Kinetic typography and animated brand elements that bring a static identity to life across digital platforms.',
    objective: '[Describe the animation brief: brand introduction, explainer, social bumper, opener, etc.]',
    approach: '[Describe your motion language, easing philosophy, typographic approach and audio sync strategy.]',
    myRole: 'Motion Designer · Animation · Sound Design',
    tools: ['Adobe After Effects', 'Adobe Premiere Pro', 'Google Veo'],
    process: '[Describe storyboarding, animatic, production, review cycles and export specs.]',
    thumbnailAspect: '16:9',
    thumbnailPlaceholderLabel: '[PROJECT THUMBNAIL: MOTION GRAPHICS, 16:9, 1920×1080px, .jpg/.webp]',
    heroPlaceholderLabel: '[CASE STUDY HERO: MOTION GRAPHICS VIDEO, 16:9, .mp4]',
    finalVideoPlaceholderLabel: '[FINAL MOTION GRAPHICS VIDEO, 16:9, .mp4]',
    supportingImageLabels: [
      '[PROCESS IMAGE: AFTER EFFECTS COMPOSITION, 16:9]',
      '[PROCESS IMAGE: STORYBOARD FRAME, 16:9]',
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'corporate-video-01',
    title: '[PROJECT TITLE — CORPORATE VIDEO]',
    category: 'Corporate Videos',
    year: '2024',
    client: '[CLIENT NAME]',
    description: 'A polished corporate brand film communicating vision, culture and credibility to investors and partners.',
    objective: '[Describe the corporate communication goal: about us film, investor deck video, event sizzle, etc.]',
    approach: '[Describe interview structure, B-roll strategy, narration approach and overall tone.]',
    myRole: 'Video Editor · Colour Grade · Graphics Package',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Adobe After Effects'],
    process: '[Describe footage review, story assembly, graphics production, colour and mastering.]',
    thumbnailAspect: '16:9',
    thumbnailPlaceholderLabel: '[PROJECT THUMBNAIL: CORPORATE VIDEO, 16:9, 1920×1080px, .jpg/.webp]',
    heroPlaceholderLabel: '[CASE STUDY HERO: CORPORATE VIDEO, 16:9, .mp4]',
    finalVideoPlaceholderLabel: '[FINAL CORPORATE VIDEO, 16:9, .mp4]',
    supportingImageLabels: [
      '[PROCESS IMAGE: EDIT TIMELINE SCREENSHOT, 16:9]',
      '[PROCESS IMAGE: GRAPHICS LOWER THIRD DESIGN, 16:9]',
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'real-estate-01',
    title: '[PROJECT TITLE — REAL ESTATE]',
    category: 'Real Estate',
    year: '2024',
    client: '[CLIENT NAME]',
    description: 'Cinematic property showcase combining aerial footage, interior walkthroughs and lifestyle B-roll to sell a vision.',
    objective: '[Describe property type, target buyer demographic and campaign goal.]',
    approach: '[Describe drone usage, interior shooting style, music selection and pacing.]',
    myRole: 'Video Editor · Colour Grade · Motion Graphics',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Adobe Firefly'],
    process: '[Describe location scouting, shot list, edit assembly, colour and delivery formats.]',
    thumbnailAspect: '16:9',
    thumbnailPlaceholderLabel: '[PROJECT THUMBNAIL: REAL ESTATE, 16:9, 1920×1080px, .jpg/.webp]',
    heroPlaceholderLabel: '[CASE STUDY HERO: REAL ESTATE VIDEO, 16:9, .mp4]',
    finalVideoPlaceholderLabel: '[FINAL REAL ESTATE VIDEO, 16:9, .mp4]',
    supportingImageLabels: [
      '[PROCESS IMAGE: AERIAL FRAME, 16:9]',
      '[PROCESS IMAGE: INTERIOR SHOT, 16:9]',
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'social-media-01',
    title: '[PROJECT TITLE — SOCIAL MEDIA]',
    category: 'Social Media',
    year: '2024',
    client: '[CLIENT NAME]',
    description: 'High-impact short-form content engineered for Instagram Reels and YouTube Shorts — built to stop the scroll.',
    objective: '[Describe the content goal: brand awareness, product launch, trend participation, challenge, etc.]',
    approach: '[Describe hook strategy, caption copywriting, trending audio, visual pace and CTA placement.]',
    myRole: 'Video Editor · Content Strategy · Motion Graphics',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'ChatGPT', 'Freepik'],
    process: '[Describe content brief, rapid editing workflow, review and scheduling process.]',
    thumbnailAspect: '9:16',
    thumbnailPlaceholderLabel: '[PROJECT THUMBNAIL: SOCIAL MEDIA REEL, 9:16, 1080×1920px, .jpg/.webp]',
    heroPlaceholderLabel: '[CASE STUDY HERO: SOCIAL MEDIA VIDEO, 9:16 or 16:9, .mp4]',
    finalVideoPlaceholderLabel: '[FINAL SOCIAL MEDIA VIDEO, 9:16, .mp4]',
    supportingImageLabels: [
      '[PROCESS IMAGE: REEL EDIT SCREENSHOT, 16:9]',
      '[PROCESS IMAGE: CONTENT CALENDAR / BRIEF, 16:9]',
    ],
    featured: false,
  },
  {
    id: '6',
    slug: 'experimental-01',
    title: '[PROJECT TITLE — EXPERIMENTAL WORK]',
    category: 'Experimental Work',
    year: '2024',
    description: 'A personal creative exploration pushing the boundaries of motion, generative AI visuals and experimental editing.',
    objective: '[Describe the personal creative brief or concept being explored.]',
    approach: '[Describe your experimental techniques: generative AI frames, optical flow, glitch, etc.]',
    myRole: 'Director · Editor · Motion Designer',
    tools: ['Adobe After Effects', 'DaVinci Resolve', 'Google Flow', 'Google Veo', 'Adobe Firefly', 'Antigravity'],
    process: '[Describe ideation, iteration, rendering and self-directed critique process.]',
    thumbnailAspect: '1:1',
    thumbnailPlaceholderLabel: '[PROJECT THUMBNAIL: EXPERIMENTAL, 1:1, 1200×1200px, .jpg/.webp]',
    heroPlaceholderLabel: '[CASE STUDY HERO: EXPERIMENTAL VIDEO, 16:9, .mp4]',
    finalVideoPlaceholderLabel: '[FINAL EXPERIMENTAL VIDEO, 16:9, .mp4]',
    supportingImageLabels: [
      '[PROCESS IMAGE: GENERATIVE AI FRAME, 16:9]',
      '[PROCESS IMAGE: EXPERIMENTAL COMPOSITE, 16:9]',
    ],
    isConfidential: false,
    featured: false,
  },
];

export default projects;
