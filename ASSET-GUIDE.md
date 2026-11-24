# ASSET GUIDE — Ronak Gadhavi Portfolio

This document lists every media asset required by the website,
including location, recommended dimensions, format and suggested filename.

**Workflow:**
1. Prepare your asset at the recommended spec.
2. Place it at the exact path shown below.
3. The placeholder will be replaced automatically — no code changes needed.

---

## ⚠️ Important Notes

- Never place assets in the project root or `src/` — always use `public/assets/`.
- All video assets must be encoded as **H.264 MP4** for maximum browser compatibility.
- Use WebP for all still images where possible (JPG as fallback).
- Compress images before adding — target under 300 KB for thumbnails, under 1 MB for hero images.
- Video files should be compressed: showreel under 10 MB, project videos under 30 MB.

---

## 🎬 VIDEO ASSETS

### Showreel
| Field | Value |
|-------|-------|
| **Location** | `public/assets/video/showreel.mp4` |
| **Used in** | Hero section |
| **Aspect Ratio** | 16:9 |
| **Resolution** | 1920 × 1080 px (minimum) |
| **Duration** | 15–25 seconds |
| **Format** | H.264 MP4, AAC audio |
| **Target size** | Under 10 MB |
| **Poster image** | `public/assets/images/showreel-poster.jpg` |
| **Notes** | Muted autoplay is disabled. User must press play. |

---

### Project Hero Videos (one per project)

| Project Slug | File Path | Label |
|---|---|---|
| product-film-01 | `public/assets/video/product-film-01-hero.mp4` | Product Film hero |
| motion-graphics-01 | `public/assets/video/motion-graphics-01-hero.mp4` | Motion Graphics hero |
| corporate-video-01 | `public/assets/video/corporate-video-01-hero.mp4` | Corporate Video hero |
| real-estate-01 | `public/assets/video/real-estate-01-hero.mp4` | Real Estate hero |
| social-media-01 | `public/assets/video/social-media-01-hero.mp4` | Social Media hero |
| experimental-01 | `public/assets/video/experimental-01-hero.mp4` | Experimental hero |

**Spec for all project hero videos:**
- Aspect Ratio: 16:9
- Resolution: 1920 × 1080 px
- Format: H.264 MP4
- Target size: Under 30 MB

---

### Project Final Videos (one per project)

| Project Slug | File Path |
|---|---|
| product-film-01 | `public/assets/video/product-film-01-final.mp4` |
| motion-graphics-01 | `public/assets/video/motion-graphics-01-final.mp4` |
| corporate-video-01 | `public/assets/video/corporate-video-01-final.mp4` |
| real-estate-01 | `public/assets/video/real-estate-01-final.mp4` |
| social-media-01 | `public/assets/video/social-media-01-final.mp4` |
| experimental-01 | `public/assets/video/experimental-01-final.mp4` |

Same spec as hero videos above.

---

## 🖼 IMAGE ASSETS

### Showreel Poster
| Field | Value |
|-------|-------|
| **Location** | `public/assets/images/showreel-poster.jpg` |
| **Used in** | Hero section (video poster frame) |
| **Aspect Ratio** | 16:9 |
| **Resolution** | 1920 × 1080 px |
| **Format** | JPG or WebP |
| **Target size** | Under 200 KB |

---

### About Portrait
| Field | Value |
|-------|-------|
| **Location** | `public/assets/images/about-portrait.jpg` |
| **Used in** | About section |
| **Aspect Ratio** | 4:5 (portrait / vertical) |
| **Resolution** | 800 × 1000 px (minimum) |
| **Format** | JPG or WebP |
| **Target size** | Under 300 KB |
| **Notes** | Professional or creative portrait. Well-lit. Plain or intentional background. |

---

### About Workspace
| Field | Value |
|-------|-------|
| **Location** | `public/assets/images/about-workspace.jpg` |
| **Used in** | About section |
| **Aspect Ratio** | 16:9 |
| **Resolution** | 1600 × 900 px |
| **Format** | JPG or WebP |
| **Target size** | Under 400 KB |
| **Notes** | Editing desk, screen with timeline, or behind-the-scenes shot. |

---

### Project Thumbnails (one per project)

| Project | File Path | Aspect Ratio | Resolution |
|---|---|---|---|
| product-film-01 | `public/assets/images/product-film-01-thumb.jpg` | 4:3 | 1200 × 900 px |
| motion-graphics-01 | `public/assets/images/motion-graphics-01-thumb.jpg` | 16:9 | 1920 × 1080 px |
| corporate-video-01 | `public/assets/images/corporate-video-01-thumb.jpg` | 16:9 | 1920 × 1080 px |
| real-estate-01 | `public/assets/images/real-estate-01-thumb.jpg` | 16:9 | 1920 × 1080 px |
| social-media-01 | `public/assets/images/social-media-01-thumb.jpg` | 9:16 | 1080 × 1920 px |
| experimental-01 | `public/assets/images/experimental-01-thumb.jpg` | 1:1 | 1200 × 1200 px |

Format: JPG or WebP · Target size: Under 300 KB each

---

### Process Section Images (one per step)

| Step | File Path | Aspect Ratio | Suggested Content |
|---|---|---|---|
| 01 | `public/assets/images/process-01.jpg` | 16:9 | Brief document / moodboard |
| 02 | `public/assets/images/process-02.jpg` | 16:9 | Storyboard or concept frame |
| 03 | `public/assets/images/process-03.jpg` | 16:9 | Edit timeline screenshot |
| 04 | `public/assets/images/process-04.jpg` | 16:9 | Colour grade / scopes |
| 05 | `public/assets/images/process-05.jpg` | 16:9 | Export / delivery formats |

Format: JPG or WebP · Resolution: 1600 × 900 px · Target size: Under 300 KB each

---

### Project Supporting / Process Images (2 per project)

| Project | Image 1 Path | Image 2 Path |
|---|---|---|
| product-film-01 | `public/assets/images/product-film-01-process-1.jpg` | `public/assets/images/product-film-01-process-2.jpg` |
| motion-graphics-01 | `public/assets/images/motion-graphics-01-process-1.jpg` | `public/assets/images/motion-graphics-01-process-2.jpg` |
| corporate-video-01 | `public/assets/images/corporate-video-01-process-1.jpg` | `public/assets/images/corporate-video-01-process-2.jpg` |
| real-estate-01 | `public/assets/images/real-estate-01-process-1.jpg` | `public/assets/images/real-estate-01-process-2.jpg` |
| social-media-01 | `public/assets/images/social-media-01-process-1.jpg` | `public/assets/images/social-media-01-process-2.jpg` |
| experimental-01 | `public/assets/images/experimental-01-process-1.jpg` | `public/assets/images/experimental-01-process-2.jpg` |

Format: JPG or WebP · Resolution: 1600 × 900 px · Target size: Under 300 KB each

---

## 🌐 SEO / META ASSETS

| Asset | Path | Spec |
|---|---|---|
| Open Graph image | `public/og-image.jpg` | 1200 × 630 px, JPG, under 200 KB |
| Favicon | `public/favicon.ico` | 32 × 32 px, ICO |
| Apple touch icon | `public/apple-touch-icon.png` | 180 × 180 px, PNG |

---

## 📁 Final public/assets/ Structure

```
public/
└── assets/
    ├── images/
    │   ├── showreel-poster.jpg
    │   ├── about-portrait.jpg
    │   ├── about-workspace.jpg
    │   ├── process-01.jpg … process-05.jpg
    │   ├── product-film-01-thumb.jpg
    │   ├── product-film-01-process-1.jpg
    │   ├── product-film-01-process-2.jpg
    │   ├── motion-graphics-01-thumb.jpg
    │   ├── motion-graphics-01-process-1.jpg
    │   ├── motion-graphics-01-process-2.jpg
    │   ├── corporate-video-01-thumb.jpg
    │   ├── corporate-video-01-process-1.jpg
    │   ├── corporate-video-01-process-2.jpg
    │   ├── real-estate-01-thumb.jpg
    │   ├── real-estate-01-process-1.jpg
    │   ├── real-estate-01-process-2.jpg
    │   ├── social-media-01-thumb.jpg
    │   ├── social-media-01-process-1.jpg
    │   ├── social-media-01-process-2.jpg
    │   ├── experimental-01-thumb.jpg
    │   ├── experimental-01-process-1.jpg
    │   └── experimental-01-process-2.jpg
    └── video/
        ├── showreel.mp4
        ├── product-film-01-hero.mp4
        ├── product-film-01-final.mp4
        ├── motion-graphics-01-hero.mp4
        ├── motion-graphics-01-final.mp4
        ├── corporate-video-01-hero.mp4
        ├── corporate-video-01-final.mp4
        ├── real-estate-01-hero.mp4
        ├── real-estate-01-final.mp4
        ├── social-media-01-hero.mp4
        ├── social-media-01-final.mp4
        ├── experimental-01-hero.mp4
        └── experimental-01-final.mp4
```

---

## 🎨 Recommended Export Settings

### Videos (Adobe Premiere Pro / DaVinci Resolve)
- **Format:** H.264 MP4
- **Codec:** H.264
- **Resolution:** 1920 × 1080 (or 1080 × 1920 for 9:16)
- **Frame rate:** Match your original (usually 24, 25 or 30 fps)
- **Bitrate:** 8–12 Mbps for web delivery
- **Audio:** AAC, 48kHz, 320 kbps

### Still Images
- **Tool:** Photoshop / Lightroom → Export for Web
- **Format:** WebP (quality 80–85) or JPG (quality 85)
- **sRGB colour profile** — always embed
- **Progressive JPG** for large images

---

*Last updated: November 2024*
