# Changelog

All notable changes to Algelyx are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project follows the 4-digit `MAJOR.MINOR.PATCH.MICRO` versioning convention.

## [0.1.0.0] - 2026-05-07

The Algelyx 2026 brand rebuild. Site now reflects the May 2026 brand book and the
definitive GDD copy (`Algelyx sitp web-FP_GDD_FP+ref definitivo 03052026.docx`).

### Added
- Brand-true design system: `#4C1D95` / `#A78BFA` / `#FB7185` triad exposed as
  Tailwind v4 utilities (`bg-brand-purple`, `text-brand-violet`, `border-brand-coral`)
  via `@theme inline`, plus the multi-stop brand gradient on a fixed sibling div.
- `DESIGN.md` at repo root — canonical design system spec, synced from the brand book.
- `<BrandLogo>` component with `unoptimized` for SVG safety on Next 16.
- Mobile hamburger drawer in the navbar with `role="dialog"`, focus trap, body scroll
  lock, Esc-to-close, and click-outside dismissal.
- Research section (`lib/research.ts` + `research-section.tsx`): 7 peer-reviewed
  publications, collapsible, brand-coral focus rings on DOI links.
- Explicit `headline` field on `TeamMember` interface; first-line credential renders
  always-visible under the name (replaces the fragile `description.split('. ')` heuristic).
- Local solution-section photography under `apps/web/public/solution/` with
  `next/image` and proper `sizes`. Replaces external Unsplash references.
- 6 namespaced logo SVGs (horizontal + monogram, color + monochrome positive +
  monochrome negative). SVG ids prefixed per file to avoid Safari gradient collisions.
- `favicon.ico` (16/32/48 multi-image) + `apple-touch-icon.png` (180px) from the new monogram.
- "Ricerca" / "Research" link added to desktop pill nav and mobile drawer.

### Changed
- Page surface from dark midnight gradient to brand-true light gradient (book p. 11).
- Body background moved off `body` onto a real fixed sibling `<div>` to avoid
  stacking-context collisions with `motion/react` transforms.
- Floating pill nav now translucent (`rgb(255 255 255 / 0.78)` + 18px backdrop blur)
  so section headings remain legible underneath while scrolling.
- Headlines (hero/h2/h3) gained `text-wrap: balance` to even out line lengths.
- Typography unified to Panton (Black for display, Regular for body); Barlow dropped.
- Solution section copy aligned to GDD: simpler `kitDescription`, exact wording on
  `productDescription`, stats sublabels updated ("Privo di componenti animali",
  "Riproducibilità batch-to-batch garantita", "linee cellulari e modelli 3D derivati").
- Team cards no longer render role labels; show name + LinkedIn + headline + bio.
- USP underlines in Features Grid switched from white/30 to `decoration-brand-coral/30`;
  third USP title (`AlgiSTEM XF ReleX`) renders in `text-brand-violet`.

### Removed
- `next-themes` package and the `<ThemeProvider>` wrapper (single-mode brand site).
- Stale orphan assets: `XLogo.png`, `algelyx-icon.png`, `algelyx-logo.png`,
  `brand-x.png`, `logo.png`, `hero-bg.jpg`.
- All hardcoded color values (`#1e1145`, `#5b21b6`, `text-purple-N`, `bg-purple-N`)
  across the codebase. Verified by grep.
- The `brightness(0) invert(1)` filter pattern. New logos are already brand-colored.

### Fixed
- Floating nav obscuring section content during scroll (translucent + blur fix).
- Research section unreachable from nav.
- Headline orphan-word wrapping at mid widths.

### Internal
- 7 unused section components (`pricing`, `market`, `roadmap`, `features-chess`,
  `footer`, `start`, `testimonials`) marked `@deprecated` with 2026-09-01 deletion deadline.
- `MotionConfig reducedMotion="user"` at the root replaces per-component
  `useReducedMotion` calls (SSR-safe).
- Brand source materials committed for provenance: `Brand_Manual_Algelyx.pdf`,
  GDD `.docx`, and the full `Logo-new/` asset pack.
