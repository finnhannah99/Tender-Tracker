# Push Group Design System

> Bold, technically confident, AI-first design system for PUSH — a performance marketing agency founded in 2007 with offices in London, New York, Dubai, and Athens.

Push is a Google Premier Partner (top 3% in EMEA), Meta Premium Partner, Microsoft Elite Partner, and TikTok Gold Partner. The brand system codifies a **dark-first**, **type-driven**, **wave-graphic** visual identity across marketing, product, and presentation surfaces.

## Sources

No codebase or Figma files were attached — this system was built directly from the PUSH Group Brand System brief supplied by the user. If a source of truth exists (Figma library, marketing site repo, brand PDF), re-attach via Import so we can align pixel-for-pixel.

- Brand brief: user-supplied prose (colours, type, visual style, logo, voice)
- Official logo (2022 wordmark, white + black): `assets/push-logo-white.png`, `assets/push-logo-black.png`
- Live site: [pushgroup.co.uk](https://www.pushgroup.co.uk) — referenced, not scraped; re-import via Figma/codebase for pixel-accurate UI kit updates
- Sample products: marketing website (UI kit inferred from brand voice & pushgroup.co.uk surface)

---

## Content Fundamentals

**Voice:** Bold, technically confident, AI-first. PUSH speaks as a specialist, not a generalist — it name-drops partnerships (Google Premier, Meta Premium, Microsoft Elite, TikTok Gold) and trades in measurable outcomes, not vibes. Copy is short, assertive, and uses industry terminology confidently (ROAS, MER, incrementality, creative velocity) without explaining it.

**Casing:**
- Headlines are **sentence case** — never Title Case, never ALL CAPS. E.g. "Performance marketing, engineered."
- Eyebrow labels, nav, tags, section markers are **ALL CAPS** and set in the mono — e.g. `// SERVICES`, `TECHNOLOGY`, `CASE STUDY 01`.
- Body copy is sentence case, no Oxford comma drama — plain, direct.

**Person:** "We" for Push, "you" for the client. Confident, not chummy. Avoids "we're excited to" / "we're passionate" openers.

**Tone moves:**
- Declarative openers. ("Growth isn't a guess.")
- Stat-forward. Numbers carry the sentence. ("+412% ROAS. 90 days.")
- Acronym-first, then explain once. ("AOV — average order value.")
- Technical where it matters ("server-side tagging", "pMax", "GA4 event schema") — never dumbed down.

**Emoji:** Never. Not in product, not in decks, not in copy.

**Specific examples (in-voice):**
- ✓ "Performance marketing, engineered."
- ✓ "Media, creative, data — one operating system for growth."
- ✓ "AI-first. Human-checked. Outcome-proven."
- ✗ "We're passionate about helping brands grow! 🚀"
- ✗ "Let's take your marketing to the next level."

---

## Visual Foundations

### Colour

**Dark-first.** Every canvas starts on PUSH Off-Black (`#1F1F1F`). Light surfaces exist but are the exception — used for press, print, or inverted sections.

- **Primary:** PUSH Purple `#7061F0`, PUSH Green `#1FFF99`
- **Neutrals:** PUSH Off-Black `#1F1F1F`, PUSH Off-White `#F5F5F5`
- **Service accents** (never mix more than one per surface unless in a chart):
  - Technology Yellow `#FFBF59`
  - Delivery Blue `#0091FF`
  - Training Pink `#FF2EAB`

**Gradients:** **Linear only. Never radial.** Approved pairs:
- PUSH Green → PUSH Purple (signature)
- PUSH Green → Off-Black
- PUSH Purple → Off-Black
- Either primary → Off-White (inverse surfaces)

Imagery is cool-leaning, high-contrast, low-saturation with occasional neon pops of green/blue. The official wave asset runs **green → blue** (the brief's "green → purple" language describes the adjacent brand gradient, which is used for type highlights, CTAs, and data accents). No warm orange/brown tones, no sepia, no heavy grain.

### Typography

- **Display / Headlines:** Aeonik Bold — sentence case, tight tracking, generous leading
- **Body & sub-headings:** Aeonik Medium / Aeonik Regular
- **Eyebrows, labels, code, nav:** Basis Grotesque Mono — ALL CAPS, wider tracking (`+0.08em`)
- **Web fallbacks:** **DM Sans** replaces Aeonik, **Roboto Mono** replaces Basis Grotesque Mono. *(Flagged below — see Substitutions.)*

Type hierarchy is big. Hero headlines go 96–160px on desktop. Body 16–18px. Eyebrows 12–14px.

### Signature graphic device — the Wave

The PUSH wave is a flowing ribbon made of **fine parallel lines** (~60–120 strands, ~1px stroke) sweeping across the canvas. The official asset fades from teal/green on the left through to indigo/blue on the right and sits on Off-Black. It **always sits behind content**, never foregrounded, never cropping type.

Shipped assets in `assets/`:
- `wave-hero.png` (1920×1080-ish) — full signature wave, green→blue, for hero surfaces
- `wave-corner-blue.png` — blue-only top-left fall-off, for secondary sections
- `wave-top-fade.png` — subtle top banding, for quiet headers and cards

### Layout

- Clean, spacious, modern. Big gutters, strong hierarchy.
- 12-column grid on web; 8px base unit.
- Full-bleed hero sections with the wave behind; content sections on solid Off-Black with generous vertical rhythm.
- Fixed top nav, transparent over hero, solid `rgba(31,31,31,0.8)` + backdrop-blur on scroll.

### Corner radii

Rounded — but not playful. 4px for inputs, 8px for buttons, 16–20px for cards, 999px (pill) for tags and CTAs. Never sharp 0px outside of charts/dividers.

### Shadows & elevation

Dark-first means shadows are subtle. Elevation is signalled primarily through:
- Surface luminosity lift (`#1F1F1F` → `#2A2A2A` → `#353535`)
- 1px inner border at `rgba(245,245,245,0.08)` on cards
- Soft outer glow on primary CTAs (`0 0 40px rgba(112,97,240,0.35)` on hover)

Light-mode shadows: `0 1px 2px rgba(31,31,31,0.06), 0 8px 24px rgba(31,31,31,0.08)`.

### Borders

- Dark surfaces: `1px solid rgba(245,245,245,0.08)` hairline
- Light surfaces: `1px solid rgba(31,31,31,0.08)`
- Dividers use the same hairline; never heavier than 1px.

### Hover / press

- **Hover:** Luminosity lift (+6%) on surfaces; primary buttons gain a soft green/purple glow; links underline with `text-underline-offset: 4px`.
- **Press:** `scale(0.98)` + 80ms ease-out. No colour change on press.
- **Focus:** 2px PUSH Green ring offset 2px. Always visible for a11y.

### Motion

- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)` for UI; `cubic-bezier(0.65, 0, 0.35, 1)` for hero/wave drift.
- Durations: 120ms micro, 240ms standard, 480ms stage, 1200ms+ for wave drift.
- No bounces. No spring overshoot. Confident, controlled.
- The wave itself drifts slowly and loops; never pulses, never flashes.

### Transparency & blur

Used sparingly. Sticky nav uses `backdrop-filter: blur(16px)` over `rgba(31,31,31,0.72)`. Modals use a 60% Off-Black scrim with blur. Cards are solid — transparency is not a card treatment.

### Cards

Solid surface (`#1F1F1F` or `#2A2A2A` lifted), 16–20px radius, 1px inner border, 24–32px internal padding. No drop shadow on dark cards. On light surfaces, a soft 24px diffuse shadow at 8% Off-Black.

### Imagery vibe

Cool, high-contrast, editorial. Product photography is dark-studio. Agency photography is candid, desaturated, occasionally duotoned (green/purple). Data viz uses the service palette — yellow/blue/pink against the Off-Black canvas.

---

## Iconography

PUSH does not ship a proprietary icon system in the supplied brief. For this design system we adopt **Lucide** as the standard icon library — thin (1.5–2px) stroke, 24px base, rounded line caps. Lucide matches the brand's clean, technical, modern aesthetic and aligns with the Aeonik/DM Sans type.

**Rules:**
- Icons match the body text colour (`currentColor`) by default; `color-fg-2` for secondary.
- Stroke only. No filled icons in primary UI. Filled icons permitted for on/pressed states (e.g. bookmark, favourite).
- 24px default; 20px in dense UI; 16px inline with body copy; 32px in feature grids; 48px+ in hero sections.
- Never coloured (no blue download icon, etc) unless it's a brand/service-accent indicator.
- No emoji anywhere. No Unicode dingbats. No hand-drawn SVG icons — only the icon library.

**Logo treatment:** Official lowercase `push™` wordmark (2022) shipped as PNG in `assets/`. White on dark (default), Off-Black on light. Never stretched, rotated, gradient-filled, multi-coloured, or combined with other marks. Minimum size 24px height. Clear-space = cap-height of the `p`.

**Substitutions flagged:**
- **Aeonik → DM Sans** (Google Fonts). Aeonik is a commercial licence; DM Sans is the closest free match. Please provide Aeonik font files for production use.
- **Basis Grotesque Mono → Roboto Mono** (Google Fonts). Basis is commercial; Roboto Mono is the closest free substitute. Please provide Basis Grotesque Mono for production use.
- **Lucide icons** — adopted as substitute because no proprietary icon set was supplied.

---

## Index

### Root

- `README.md` — this document
- `colors_and_type.css` — CSS custom properties for colours, type, spacing, radii, shadows, motion
- `SKILL.md` — agent-skill manifest

### Folders

- `fonts/` — web fonts (DM Sans + Roboto Mono loaded via Google Fonts CDN in CSS)
- `assets/` — logos (`push-logo-white.png`, `push-logo-black.png` — official 2022 wordmark), the wave graphic (procedural `wave.svg`)
- `preview/` — Design System tab cards (colour, type, spacing, components, brand)
- `ui_kits/website/` — marketing-site UI kit (homepage hero, services, case study grid, footer) with interactive prototype in `index.html`

### Quick reference

| Need | Go to |
|---|---|
| Colour tokens | `colors_and_type.css` → `--color-*` |
| Type ramp | `colors_and_type.css` → `--font-*`, `.h1`–`.h6`, `.body-*`, `.eyebrow` |
| Logo | `assets/push-logo-white.png`, `assets/push-logo-black.png` |
| Wave graphic | `assets/wave-hero.png`, `assets/wave-corner-blue.png`, `assets/wave-top-fade.png` — or the `<Wave>` component in `ui_kits/website/Wave.jsx` |
| Component patterns | `ui_kits/website/` |
| Brand voice examples | "Content Fundamentals" above |
