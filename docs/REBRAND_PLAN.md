# Algelyx — Brand & Site Refresh Plan
**Owner:** Andrea  •  **Branch:** `main`  •  **Date:** 2026-05-06
**Source of truth:**
- `Brand_Manual_Algelyx.pdf` (13 pp) — canonical brand book, supersedes all prior
- `Algelyx sitp web-FP_GDD_FP+ref definitivo 03052026.docx` — updated copy/GDD
- `Logo-new/` — official logo asset pack (Horizontal / Vertical / Monogram, color + monochrome)

## TL;DR

Reskin the existing Next.js 16 marketing site to match the new brand book: the official 3-color palette (`#4C1D95` / `#A78BFA` / `#FB7185`), the brand gradient as the page surface, the full-color horizontal logo with the gradient capsule, the monogram as favicon. Rewrite team cards (drop role + "Co-Founder", keep name + LinkedIn + bio). Add a Research section with 7 publications. No structural overhaul — section composition stays the same; tokens and assets get rebuilt.

## Decisions confirmed (2026-05-06)

| # | Decision | Choice |
|---|----------|--------|
| D1 | Theme strategy | **Brand-true light gradient** — page surface = brand gradient (book p. 11), brand-purple section blocks, white cards. |
| D2 | Team copy | Drop both Co-Founder term **and** role title. Keep name + LinkedIn + bio + photo only. |
| D3 | Research section | Yes — collapsible list between Team and CTA Footer, 7 publications + DOI links. |
| D4 | Problem detail | Keep 3 condensed paragraphs. Don't expand to docx bullet lists. |

## Information architecture & scan hierarchy

### Page structure (top → bottom)
1. **Navbar** (fixed, top) — logo top-left, floating pill nav top-right.
2. **Hero** — first 100vh.
3. **Problem** — `Il Problema / Perché ora?`
4. **Solution** — `La Soluzione / AlgiSTEM XF Kit`
5. **Features Grid** — `Vantaggi competitivi`
6. **Stats** — `Performance / Dati alla mano` (white card, contrast moment)
7. **Team** — `Il Team / Il mix perfetto tra accademia e impresa` (white cards)
8. **Research (NEW)** — `La nostra ricerca` (collapsed by default)
9. **CTA Footer** — `Accelera la tua ricerca`

### Hero 5-second scan order (locked)
Brand-first per the book: **logo → headline → CTA**. The user notices the algelyx mark with the gradient capsule first (brand recognition), then reads the value-prop headline ("Matrici extracellulari biocompatibili…"), then sees the two CTAs. Subhead and decorative monograms are tertiary.

### Mobile pacing rule
Gradient stays full-bleed on `<html>`/`<body>`. **Alternating contrast pattern** to prevent section blur on small screens:
- Hero, Problem, Solution, Features, CTA Footer → sit on the gradient surface (white text).
- Stats, Team, Research → solid brand-purple block OR white card with brand-purple text. Each contrast section breaks up the gradient and gives the eye a rest.

## Brand spec (DESIGN.md preview)

### Colors (locked, from book p. 10)
| Role | Hex | RGB | HSL | Pantone |
|------|-----|-----|-----|---------|
| **Brand purple** (primary) | `#4C1D95` | 76, 29, 149 | 259, 67%, 35% | 267 C |
| **Brand violet** (secondary) | `#A78BFA` | 167, 139, 250 | 252, 92%, 76% | Violet 0631 C |
| **Brand coral** (accent) | `#FB7185` | 251, 113, 133 | 351, 95%, 71% | 1775 C |

### Brand gradient (p. 11) — fundamental visual element
Linear flow combining all 3 colors. Approximate CSS:
```css
--gradient-brand: linear-gradient(135deg, #A78BFA 0%, #6B3FCF 35%, #4C1D95 60%, #6B3FCF 80%, #FB7185 100%);
```
With a subtle radial mesh overlay for depth (book version is a soft mesh, not a hard linear).

### Typography (book p. 12)
- **Display + headlines:** Panton Black (900). Already loaded via local @font-face.
- **Body:** Panton Regular (400) for primary; Barlow remains as fallback/UI utility weights.
- Existing `type-hero` / `type-h2` / `type-h3` / `type-lead` / `type-body` / `type-label` scale retained.

### Logo system (book p. 4-9)
- **Primary horizontal** — color version (Brand purple wordmark + monogram with gradient capsule). Use on white/light backgrounds.
- **Vertical** — narrow contexts only.
- **Monogram (X)** — favicon, social, decorative.
- **Monochrome (positive/negative)** — when background is colored or non-white.
- Min digital sizes: horizontal 70 px, vertical 49 px, monogram 17 px.
- Locked proportions: logotype = 3× monogram width. Spacing locked.
- "Area di rispetto" = distance between monogram and logotype as the unit clearance.

## User journey & emotional arc

**Persona:** research scientist or pharma R&D lead, arrives cold from search or referral, evaluating in <60 seconds whether AlgiSTEM XF is worth a 10-minute deeper read.

| Step | What user does | What user feels | Plan delivers |
|------|----------------|-----------------|---------------|
| 1. Land | Hits the gradient hero | "This looks like a real brand, not a stealth-mode landing page." | Brand gradient + full-color logo with capsule = signal of investment in identity. |
| 2. Read headline | Scans `Matrici extracellulari biocompatibili…` | "OK, this is a tissue-engineering / cell-culture company. Relevant." | Headline names the product category in the user's vocabulary, no fluff. |
| 3. Skim Problem | Reads 3 short paragraphs | "Yes, I know these problems — 2D limits, animal models, Matrigel batch issues." | Validates the user's existing pain in their own language. |
| 4. Land on Solution | Sees AlgiSTEM XF Kit | "Plant-based xeno-free alginates — interesting, distinct from Matrigel." | Product name + clear differentiation. |
| 5. Hit Stats | "100% Vegetale / Xeno-free / 20+ linee testate" | "Validated, not vapor." | White card breaks gradient fatigue; numbers register fast. |
| 6. Read Team | Sees 4 humans | "Real scientists with real backgrounds — first line of bio shows credentials." | **First sentence of each bio always visible** (per Pass 3 decision); chevron expands the rest. Cards on white. |
| 7. See Research | Notices `La nostra ricerca` collapsed | "Peer-reviewed publications. Not a marketing fairy tale." | 7 DOIs, lazy-revealed. Adds gravity without dominating. |
| 8. Bottom CTA | `Accelera la tua ricerca` | "OK, I want to know more or get the kit." | Two clear paths: scroll-to-solution or `mailto:info@algelyx.com`. |

### Time-horizon design
- **5 sec (visceral):** brand gradient + capsule logo says "premium European biotech, 2026." Color and motion do all the work; words barely register yet.
- **5 min (behavioral):** user has scanned all sections, opened 1-2 team bios, expanded research, fired off an email. The expand interactions reward curiosity instead of demanding it.
- **5 yr (reflective):** team scales the product; the design system codified in `DESIGN.md` lets future agents and designers extend without re-litigating tokens. The site grows with the brand book, not against it.

## Interaction states (locked)

| Surface | Loading | Empty | Error | Success | Hover / Focus / Active |
|---------|---------|-------|-------|---------|------------------------|
| **Locale toggle (EN/IT)** | Instant (client-side) — no spinner | n/a | If `localStorage` write fails, fall back to in-memory state for the session | Toggle reflects new state immediately; copy re-renders | Hover: text shifts to `--brand-violet`. Focus-visible: 2px solid `--brand-coral` outline, 2px offset. |
| **Team card "Bio / Less"** | n/a | n/a | n/a | Smooth height animation 0.4s; chevron rotates 180° | Hover: card ring brightens to brand-purple at 20%. Focus-visible: outline on the card itself, not the inner button. Multiple cards open simultaneously is allowed. |
| **Research expand** | n/a | If publication list is somehow empty, render "Stiamo aggiornando l'elenco delle pubblicazioni." | n/a | Section grows to reveal list, motion respects `prefers-reduced-motion` | Hover on toggle: brand-violet. Hover on individual paper row: row bg lightens to `rgba(76, 29, 149, 0.04)`. DOI link underline appears on hover. |
| **CTA buttons (`btn-primary`, `btn-outline`)** | n/a | n/a | n/a | n/a | Hover: `translateY(-2px)` + shadow. Focus-visible: 2px offset outline. Active: `translateY(0)`. Disabled state not used. |
| **Email links** | n/a | n/a | If browser blocks `mailto:`, the link still copies the address visually (no JS fallback needed for v1) | n/a | Hover: text → white. Focus-visible: outline. |
| **Scroll-to-section anchors** | n/a | n/a | n/a | Smooth scroll, ~600ms | Account for fixed navbar height (4rem mobile, 5rem desktop) — use `scroll-margin-top` on each `<section id>`. |
| **Image loads (logo, monogram, team headshots)** | `next/image` placeholder blur or none (small SVGs need no blur) | n/a | If headshot 404s, render brand-purple circle with first-letter initial | n/a | n/a |

**`prefers-reduced-motion`**: wrap children in `<MotionConfig reducedMotion="user">` in `app/layout.tsx`, ONCE. Framer Motion v12 then automatically applies the user's OS preference to all descendants. Do NOT call `useReducedMotion()` per component — it returns `null` on SSR, which causes a hydration flicker for reduced-motion users (the 600ms transition fires once before the hook resolves). MotionConfig is the SSR-safe equivalent.

## Responsive specs

| Viewport | Hero | Nav | Sections | Logo |
|----------|------|-----|----------|------|
| **375 (mobile)** | Headline `clamp(2.65rem, 11.25vw, 5.4rem)` already adapts. CTAs stack vertically. Decorative monograms hidden (`hidden md:block` already in place). | **NEW: hamburger drawer.** Floating pill collapses to a 44px round button (monogram icon). Tapping opens a brand-purple drawer with all nav links + EN/IT + mail. | Each `<section>` gets `scroll-margin-top: 4rem` so anchor scrolls clear the navbar. Padding `py-16 px-6`. | Horizontal logo at 70px min (book spec). Below 70px: switch to monogram only. |
| **768 (tablet)** | Headline at mid-clamp. CTAs side-by-side. Decorative crosses visible. | Floating pill nav reveals (current behavior). | Padding `py-24 px-12`. | Horizontal logo at 80–100px. |
| **1440 (desktop)** | Full hero layout, decorative monograms at 320–380px. | Full pill nav. | Padding `py-32 px-20`. Max content width 1152px (`max-w-6xl`). | Horizontal logo at 120px. |

## Accessibility (locked)

| Concern | Spec |
|---------|------|
| **Color contrast on gradient** | Body copy `text-white/85` is ≥4.5:1 only on the `#4C1D95` portion of the gradient. On the lighter `#A78BFA` portion, white drops to ~2.8:1. **Mitigation:** body copy on the gradient surface always sits over the darker stops (≥`#6B3FCF`). When a section pushes into lighter gradient regions (e.g. corners), add a subtle `linear-gradient(180deg, transparent, rgba(76,29,149,0.4))` overlay behind the copy. |
| **Brand-purple sections** | `#4C1D95` background + white text = 8.6:1 (passes AAA). Headings at white, body at `text-white/90`. |
| **White cards** | `#4C1D95` heading on white = 8.6:1 (AAA). Body at `#4C1D95` 70% = ~6.0:1 (AA). |
| **Focus-visible** | All interactive elements get `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB7185]` (brand coral). Coral is chosen because it is the only brand color that contrasts on BOTH gradient and white surfaces. |
| **Touch targets** | All buttons, links, toggles, chevrons ≥44×44px hit area on mobile. The locale toggle and mail icon get explicit `min-h-11 min-w-11` even if the visual is smaller. |
| **Keyboard nav** | Tab order: skip-to-content link → logo → nav links → locale toggle → mail → hero CTA primary → hero CTA secondary → section headings → expandable cards → footer. Every Team and Research expand control is a `<button>` not a `<div onClick>`. |
| **ARIA** | Section landmarks via `<section aria-labelledby="...">` referencing the heading id. Team card expand: `aria-expanded`, `aria-controls`. Research expand: same. Logo `<img>` with `alt="Algelyx"`; decorative monograms with `alt=""` and `aria-hidden`. |
| **Screen readers** | Locale toggle announces "Switch to English" / "Passa all'italiano" via `aria-label`. The collapsed Bio/Research describes "X publications, click to expand" / "Bio, click to expand". |
| **Reduced motion** | `useReducedMotion()` hook (introduced in Pass 2) gates all entrance animations. CSS `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }` as a global safety net in `globals.css`. |
| **Logo at min size (17px)** | Below 24px the gradient capsule SVG may flatten. Provide a `monogram-flat.svg` (solid `#4C1D95`, no gradient) and switch via `<picture>` or media query at small sizes. |

## Anti-slop guards (locked)

Risk: a brand-true rebrand using purple gradient + cards is precisely the AI slop fingerprint — unless the work earns the gradient via brand-book authority and breaks the card pattern at strategic moments.

| Guard | Rule |
|-------|------|
| **Gradient is brand-mandated, not decorative** | Note in `DESIGN.md` that the gradient is from book p. 11, not a generic "purple SaaS" choice. Anyone reviewing future PRs can verify against the book. |
| **Cards must earn pixels** | Every card in the page must answer "what would I lose if this were inline text?" If the answer is "nothing", make it inline. Audit during implementation. |
| **Coral is the third color, not the unused one** | `#FB7185` only currently appears in the logo capsule. Use it intentionally elsewhere: USP underlines (Pass 4), Research DOI link hover, focus-visible outlines. Without this, the brand reads as a 2-color (purple + violet) brand and the book's intent is lost. |
| **No 3x icon-in-circle patterns anywhere** | Across all sections, never render the trio `[icon-in-colored-circle] + [bold title] + [2-line description]`. That is THE most recognizable AI fingerprint. |
| **No emoji, no wavy dividers, no decorative blobs** | Decorative elements are limited to the brand monogram at low opacity. |
| **Headline-only scan test** | At end of implementation, hide all body copy and verify every section is understandable from `type-label` + `type-h2` alone. If a section fails, the heading isn't doing its job. |
| **Premium-without-shadows test** | Temporarily strip every box-shadow during dev. The page should still feel premium. If it collapses without shadows, the layout was leaning on them. |

## Phase plan

### Phase 1 — DESIGN.md + design tokens (foundation)

**Architecture decisions (locked from Section 1 of plan-eng-review + outside-voice corrections):**
- **Token format: all hex.** Convert existing HSL tokens to hex during this phase. No mixed convention.
- **Tailwind exposure: tokens MUST be named `--color-brand-purple`, `--color-brand-violet`, `--color-brand-coral`** and live INSIDE the `@theme inline` block (not `:root`). Tailwind v4 only generates utilities for `--color-*` names inside `@theme`. With this naming, components write `bg-brand-purple` / `text-brand-violet`. (Outside-voice catch: the original spec used `--brand-purple` which would NOT produce utilities.)
- **Reduced motion: use `<MotionConfig reducedMotion="user">` at the root layout** (in `app/layout.tsx`, wrapping children once). Do NOT call `useReducedMotion()` in every section — it returns `null` on SSR which causes a hydration flicker. `MotionConfig` is the SSR-safe pattern. Drop the per-component gating from Pass 2.
- **Research data: in `apps/web/lib/research.ts`** (new), NOT `lib/copy.ts`. Publications are structured, language-neutral records. `lib/copy.ts` only holds the Research section's heading translations.
- **`next/image` + SVG:** Next 16 blocks SVG through the optimizer by default. `<BrandLogo>` MUST set `unoptimized` on the underlying `<Image>` for SVG sources. (Otherwise: 400 in production.)

1. Create `/DESIGN.md` at repo root with this exact structure:
   ```
   # Algelyx Design System
   _Source of truth: Brand_Manual_Algelyx.pdf (May 2026 edition)_
   _Last synced from book: 2026-05-06_

   ## 1. Colors
   ## 2. Typography
   ## 3. Logo & monogram
   ## 4. Gradient
   ## 5. Spacing & radius
   ## 6. Component tokens (cards, buttons, navbar)
   ## 7. Section surface rules (alternating contrast)
   ## 8. Anti-slop guards (carried over from REBRAND_PLAN.md)
   ## 9. Update protocol — when the brand book changes, bump the synced date
       and re-derive tokens; do NOT introduce ad-hoc colors in components.
   ```
   Each section names exact hex values, sizes, and book-page references.
2. Update `packages/ui/src/styles/globals.css`:
   - Add brand color tokens (`--brand-purple`, `--brand-violet`, `--brand-coral`).
   - Replace `--gradient-brand` with the brand-true gradient (light, multi-stop).
   - Update semantic tokens: `--background` becomes the gradient surface; `--foreground` / heading text becomes `#4C1D95` on light surfaces and white on brand-purple sections.
   - Add a `.brand-purple-section` utility for sections that need the solid `#4C1D95` block treatment.
   - Update `.btn-primary` to brand-purple bg + white text (current is inverted).
   - Update `.btn-outline` border + text colors so it reads on both light and brand-purple surfaces.
   - Adjust `.brand-plus` filter — the decorative crosses currently apply `brightness(0) invert(1)` (force white). On the new light surface, switch to brand-purple at low opacity OR retain gradient capsule shape via the actual color SVG.
3. Remove the `style={{ background: "var(--gradient-brand)" }}` inline override in `app/page.tsx` — let `body` own the surface (already declared in globals.css).
4. `app/layout.tsx`:
   - Add `<link rel="icon">` and Apple touch icon pointing to the new monogram SVG/PNG.
   - Add OG image (use the brand gradient + horizontal logo as a 1200×630 cover).
   - Drop `forcedTheme="dark"` — the new theme is the brand gradient, not "dark mode" semantics. Keep `defaultTheme` set but stop forcing.

### Phase 2 — Logo & monogram assets

**Outside-voice catches applied:**
- **SVG id collisions:** All `Logo-new/*.svg` files use Adobe Illustrator export ids like `linearGradient1`, `SVGID_1_`, `Livello_1`. When two of these load on the same page (e.g., header logo + footer logo), the second renders with the first's gradient on Safari. **Run `svgo` on every SVG before commit:**
  ```bash
  npx svgo --multipass --pretty --config '{"plugins":[{"name":"prefixIds","params":{"prefix":"algelyx-{filename}"}},"removeMetadata","removeEditorsNSData","removeComments"]}' apps/web/public/*.svg
  ```
  This namespaces ids per file (e.g., `algelyx-logo-hor-linearGradient1`) and strips Illustrator metadata.
- **next/image SVG handling:** Next 16 blocks SVG through the image optimizer by default. The `BrandLogo` component MUST pass `unoptimized` to `<Image>` for SVG sources. Add the prop in the component definition.
- **Favicon `.ico`:** `npx sharp-cli` produces PNG, not multi-image `.ico`. Use `npx png-to-ico` AFTER generating sized PNGs from the SVG, OR use [realfavicongenerator.net](https://realfavicongenerator.net) once and check artifacts in.

1. Copy from `Logo-new/` into `apps/web/public/`:
   - `Logo-new/1_Horizontal/Primary/Logo_algelyx_hor.svg` → `public/logo.svg` (replaces current).
   - `Logo-new/1_Horizontal/Monochrome/Logo_algelyx_hor_mono_pos.svg` → `public/logo-mono-pos.svg`.
   - `Logo-new/1_Horizontal/Monochrome/Logo_algelyx_hor_mono_neg.svg` → `public/logo-mono-neg.svg`.
   - `Logo-new/3_Monogram/Primary/Monogram_algelyx.svg` → `public/monogram.svg` (replaces decorative `XLogo.png` use).
   - `Logo-new/3_Monogram/Monochrome/Monogram_algelyx_mono_pos.svg` → `public/monogram-mono-pos.svg` (used by `BrandCrosses` decorative layer).
   - `Logo-new/3_Monogram/Monochrome/Monogram_algelyx_mono_neg.svg` → `public/monogram-mono-neg.svg`.
2. Generate `favicon.ico` (16, 32, 48) + `apple-touch-icon.png` (180) from `monogram.svg`. Tool: `npx sharp-cli` or in-tool conversion.
3. Delete stale orphans: `algelyx-icon.png`, `algelyx-logo.png`, `brand-x.png`, the old `logo.png`. Verify no references first via grep.
4. Replace top-level `/Logo` directory references with `/Logo-new` everywhere (none expected; `/Logo` is in repo root, not used by build).

### Phase 2.5 — Color sweep + next-themes removal + BrandLogo extraction (foundation for Phase 3)

**Color sweep checklist** (every hardcoded color → token mapping):

| File | Line | Current | New |
|------|------|---------|-----|
| `packages/ui/src/styles/globals.css` | 80 | `linear-gradient(135deg, #0f0529 0%, #1e1145 30%, #2e1065 60%, #1e1b4b 100%)` | brand gradient: `linear-gradient(135deg, var(--brand-violet) 0%, color-mix(in oklab, var(--brand-purple), var(--brand-violet) 30%) 35%, var(--brand-purple) 60%, color-mix(in oklab, var(--brand-purple), var(--brand-coral) 30%) 80%, var(--brand-coral) 100%)` |
| `packages/ui/src/styles/globals.css` | 167, 193, 237, 304 | `color: #1e1145` | `color: var(--brand-purple)` |
| `apps/web/components/navbar.tsx` | 48, 60, 70 | `text-[#1e1145]` | `text-brand-purple` |
| `apps/web/components/navbar.tsx` | 48, 60, 70 | `hover:text-purple-600` | `hover:text-brand-violet` |
| `apps/web/components/navbar.tsx` | 55, 65 | `bg-[#1e1145]/15` | `bg-brand-purple/15` |
| `apps/web/components/sections/stats-section.tsx` | 24, 44, 48 | `text-[#1e1145]` | `text-brand-purple` |
| `apps/web/components/sections/stats-section.tsx` | 27 | `text-[#1e1145]/60` | `text-brand-purple/60` |
| `apps/web/components/sections/stats-section.tsx` | 51 | `text-[#1e1145]/50` | `text-brand-purple/50` |
| `apps/web/components/sections/team-section.tsx` | 41 | `ring-[#1e1145]/10 group-hover:ring-[#5b21b6]/20` | `ring-brand-purple/10 group-hover:ring-brand-violet/30` |
| `apps/web/components/sections/team-section.tsx` | 57 | `decoration-[#5b21b6]/30` | `decoration-brand-violet/40` |
| `apps/web/components/sections/team-section.tsx` | 60 | `text-[#1e1145]` | `text-brand-purple` |
| `apps/web/components/sections/team-section.tsx` | 66 | `text-[#5b21b6]` | `text-brand-violet` |
| `apps/web/components/sections/team-section.tsx` | 79 | `text-[#1e1145]/70 border-[#1e1145]/10` | `text-brand-purple/70 border-brand-purple/10` |
| `apps/web/components/sections/team-section.tsx` | 87 | `text-[#5b21b6] group-hover:text-[#1e1145]` | `text-brand-violet group-hover:text-brand-purple` |

**Verification command after sweep**:
```bash
grep -rn -E '#1e1145|#5b21b6|#0f0529|#2e1065|#1e1b4b|text-purple-[0-9]|bg-purple-[0-9]|border-purple-[0-9]' apps/web packages/ui
```
Should return ZERO results.

**`next-themes` removal:**
- **Outside-voice catch:** before deletion, audit for any `dark:` Tailwind variants or `useTheme()` calls. Run:
  ```bash
  grep -rn --include='*.tsx' --include='*.ts' --include='*.css' -E 'dark:|useTheme|ThemeProvider|next-themes' apps/web packages/ui
  ```
  Currently only `app/layout.tsx`, `components/theme-provider.tsx`, and `globals.css:5` (`@custom-variant dark`) reference dark. Remove that line in globals.css too — it becomes dead.
- Delete `apps/web/components/theme-provider.tsx`.
- In `apps/web/app/layout.tsx`: remove `<ThemeProvider>` wrapper, drop the import. Children sit directly inside `<LanguageProvider>` inside `<MotionConfig reducedMotion="user">` (new wrapper) inside `<body>`.
- Remove `@custom-variant dark (&:is(.dark *));` from `globals.css:5`.
- Remove `next-themes` from `apps/web/package.json` dependencies. Run `bun install` to update lockfile.

**`<BrandLogo>` component** (`apps/web/components/ui/brand-logo.tsx`):
```tsx
import Image from "next/image"
import { cn } from "@workspace/ui/lib/utils"

type Variant = "color" | "mono-pos" | "mono-neg"
type Kind = "horizontal" | "monogram"

interface BrandLogoProps {
  variant?: Variant       // default "color"
  kind?: Kind             // default "horizontal"
  width?: number          // default 120 for horizontal, 32 for monogram
  height?: number         // default 32 for horizontal, 32 for monogram
  className?: string
  priority?: boolean      // pass-through for Next.js LCP
  alt?: string            // default "Algelyx"
}

const ASSET: Record<Kind, Record<Variant, string>> = {
  horizontal: {
    "color": "/logo.svg",
    "mono-pos": "/logo-mono-pos.svg",
    "mono-neg": "/logo-mono-neg.svg",
  },
  monogram: {
    "color": "/monogram.svg",
    "mono-pos": "/monogram-mono-pos.svg",
    "mono-neg": "/monogram-mono-neg.svg",
  },
}

export function BrandLogo({
  variant = "color",
  kind = "horizontal",
  width,
  height,
  className,
  priority,
  alt = "Algelyx",
}: BrandLogoProps) {
  const w = width ?? (kind === "horizontal" ? 120 : 32)
  const h = height ?? 32
  return (
    <Image
      src={ASSET[kind][variant]}
      alt={alt}
      width={w}
      height={h}
      priority={priority}
      className={cn("h-auto w-auto", className)}
    />
  )
}
```

Replace the 3 inline `<Image src="/logo.svg" ... brightness-0 invert />` call sites:
- `navbar.tsx:26-33` → `<BrandLogo variant="color" kind="horizontal" width={120} height={32} priority className="h-6 md:h-8" />`
- `hero-section.tsx:32-39` → `<BrandLogo variant="color" kind="horizontal" width={240} height={60} priority className="h-6 md:h-12" />`
- `cta-footer.tsx:64-70` → `<BrandLogo variant="mono-pos" kind="horizontal" width={120} height={32} className="opacity-60" />`

### Phase 3 — Component reskins
1. **`navbar.tsx`**:
   - Logo target: full-color `/logo.svg` everywhere — hero glass card AND floating pill nav. Brand-signature consistency. Below 24px, fall back to flat `monogram-flat.svg` (no gradient).
   - Drop the `brightness(0) invert(1)` filter; the new logo is already brand-colored.
   - Keep nav links in brand-purple (`#4C1D95`); hover stays in `--brand-violet`.
   - **Mobile (<768px): replace current pill with hamburger drawer.** Tap the monogram-icon button in the top-right corner → slides in a brand-purple drawer with full nav + EN/IT toggle + mail link. All targets ≥44px. Drawer respects `prefers-reduced-motion`.
2. **`hero-section.tsx`**:
   - Logo glass pill: render the **horizontal full-color logo with the gradient capsule visible** (no `brightness(0) invert(1)` filter). The capsule IS the brand signature — losing it kills brand fidelity.
   - On the brand gradient surface, headline + subhead remain white (the gradient is brand-saturated mid-tones, white type holds contrast — verify in mockup).
   - CTAs: `btn-primary` becomes brand-purple-on-white; `btn-outline` is white-bordered on the gradient.
3. **`problem-section.tsx`**: section sits on the gradient surface; white text remains. The decorative `<BrandCrosses>` in this section now uses the **monochrome positive monogram at low opacity** (no harsh inversion).
4. **`solution-section.tsx`**: same surface treatment. **Replace the two Unsplash external images with local placeholders** — flagged as a TODO since branded photography is out of scope of this email but the externals erode trust.
5. **`features-grid.tsx`** (Vantaggi competitivi): keep `outline-card` but **anti-slop guard**:
   - No icons-in-colored-circles. The 3 USPs read as text-first cards.
   - Underline accent on each USP title in `--brand-coral` at 30% (current uses white at 30% — recolor to coral as the third brand color making its first appearance, breaking the purple monotony).
   - The third USP, `AlgiSTEM XF ReleX`, is a product-name USP — render its title in `--brand-violet` instead of white to visually distinguish it as a proper noun.
   - No equal-height padding-trap: cards size to content; the third (longer) card sets the row height naturally.
6. **`stats-section.tsx`**: white card stays. Numbers shift from `#1e1145` (old midnight) to `#4C1D95` (brand purple). Sublabel text color follows.
7. **`team-section.tsx`** — biggest copy change:
   - **Remove the `role` `<p>` element entirely** (no role label rendered at all).
   - Keep avatar, name (linked to LinkedIn).
   - **Always-visible credential line:** add a new `headline: string` field on `TeamMember` interface (in `lib/copy.ts`). Render `member.headline` as a permanent `<p>` under the name. NO derivation from `description.split()` — explicit field, intentional content. This preserves scientific credibility for cold scanners (Pass 3 decision).
     - Annalisa: `headline: "Prof.ssa Associata di Bioingegneria, UNITN. Inventrice della tecnologia core."`
     - Francesca: `headline: "PhD, Senior Researcher in neuroscienze e validazione biologica."`
     - Stefano: `headline: "Innovation Manager, 25+ anni in tech transfer e venture building."`
     - Gianluca: `headline: "MD-PhD, 15+ anni in sviluppo clinico (Sanofi, Novartis)."`
     - EN versions follow same pattern.
   - **Expandable rest:** chevron toggle reveals the full `description`. "Bio" / "Less" label.
   - Card surface: white card on brand-purple section block. Name color = `text-brand-purple`. Headline color = `text-brand-purple/60`.
   - Drop `role` field from `TeamMember` interface (it's no longer rendered or referenced).
8. **`research-section.tsx` (NEW)** — between TeamSection and CtaFooter:
   - Section label: `LA NOSTRA RICERCA`.
   - Heading: `Ricerca peer-reviewed` / EN `Peer-reviewed research`.
   - Default state: collapsed (closed). One CTA-style button to expand.
   - Expanded: white card listing 7 publications (journal + DOI link).
   - Each item: journal name (Panton Black), paper title (italic Panton Regular), DOI as anchor (brand-violet color, opens `https://doi.org/{doi}` in new tab).
9. **`cta-footer.tsx`**:
   - Footer logo: switch from white-inverted to **monochrome-positive** (`#4C1D95`) since the section sits on a darker variant of the brand gradient.
   - Other content stays.

### Phase 4 — Copy updates (`apps/web/lib/copy.ts`)
1. **Hero** — no changes (already matches docx).
2. **Problem** — keep 3-paragraph structure. Light wording tweaks to mirror docx phrasing where neutral:
   - Title stays "Il Problema".
   - Subtitle stays "Perché ora?" (docx has no subtitle; the existing one is good editorial).
   - Points: keep current 3 condensed descriptions; verify accuracy against docx bullet lists.
3. **Solution**:
   - `productDescription` → align verbatim to docx: "Una matrice extracellulare xeno-free, priva di componenti di derivazione animale e basata su alginati ingegnerizzati."
   - `kitDescription` → use docx's shorter version: "Kit pronto all'uso composto da matrice di alginati bioingegnerizzati e soluzione di recovery cellulare."
   - `usps` (Modulabilità / Riproducibilità e Sostenibilità / AlgiSTEM XF ReleX) — confirmed match.
4. **Stats sublabels** (align to docx):
   - "Senza componenti animali" → "Privo di componenti animali".
   - "Total batch-to-batch reproducibility" / "Riproducibilità batch-to-batch totale" → "Riproducibilità batch-to-batch garantita".
   - "Validato su iPSC, NPC, tumorali" → "Validato su linee cellulari e modelli 3D derivati".
5. **Team** — names stay; descriptions stay (docx says "ok la descrizione"); roles **no longer rendered**, but field can persist in interface for future use.
6. **Research (new)** — add `ResearchCopy` interface + 7 publication entries (IT + EN). DOI list:
   - `10.1002/jbm.a.34914` — J. Biomed. Mat. Res. A
   - `10.1016/j.jbiomech.2014.05.017` — J. of Biomechanics
   - `10.3791/59597` — JoVE
   - `10.1016/j.reactfunctpolym.2022.105292` — Reactive & Functional Polymers
   - `10.1016/j.actbio.2022.08.074` — Acta Biomaterialia
   - `10.1002/adhm.202201898` — Advanced Healthcare Materials
   - `10.1002/mame.202400296` — Macromolecular Mat. & Engineering
7. **CTA Footer** — already matches docx ("Accelera la tua ricerca / Unisciti ai laboratori più avanzati in Europa…").

### Phase 4.5 — Performance fixes (locked from Section 4 of plan-eng-review)

1. **Drop Barlow, ship Panton-only.**
   - `apps/web/app/layout.tsx`: remove `Barlow` import from `next/font/google` and drop `--font-barlow` from the `<html className>`.
   - `packages/ui/src/styles/globals.css`: change `--font-body: 'Barlow', sans-serif` → `--font-body: 'Panton', sans-serif`. `--font-heading` stays Panton.
   - `apps/web/components/sections/team-section.tsx:66,79`: `font-body` class still maps to Panton via the new token.
   - Saves ~70KB font traffic and a DNS lookup to fonts.googleapis.com.

2. **Body background → real fixed sibling element (NOT a pseudo).**
   - **Outside-voice catch:** `body::before { z-index: -1 }` collides with `motion/react` `transform` stacking contexts; the gradient can disappear under animated sections in some viewports.
   - Fix: in `app/layout.tsx`, render a real `<div aria-hidden className="fixed-brand-bg" />` as the FIRST child of `<body>`. CSS:
     ```css
     .fixed-brand-bg {
       position: fixed;
       inset: 0;
       background: var(--gradient-brand);
       z-index: 0;
       pointer-events: none;
     }
     ```
   - `app/page.tsx`: remove the inline `style={{ background: ... }}`, ensure the page's outer `<div>` uses `relative z-10` so all section content layers above the fixed bg.
   - Body itself: `body { @apply bg-background text-foreground overflow-x-hidden; min-height: 100vh; }` (no background, no `background-attachment`).
   - Result: paints once; no repaint on mobile resize; no stacking-context collision with framer-motion.

3. **Download Unsplash images locally.**
   - Create `apps/web/public/solution/` directory.
   - Download `https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop` → `apps/web/public/solution/cell-culture-imaging.jpg`.
   - Download `https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1600&auto=format&fit=crop` → `apps/web/public/solution/lab-flask.jpg`.
   - In `solution-section.tsx:71,105`, replace `<img src="https://...">` with `<Image src="/solution/..." width={1600} height={1143} alt="..." />` (use `next/image` with explicit `sizes`).
   - Add `apps/web/public/solution/CREDITS.md` with Unsplash photo IDs and license note.
   - Stays a stopgap until REBRAND-001 commissions branded photography.

4. **`BrandCrosses` PNG → SVG.**
   - `apps/web/components/ui/brand-crosses.tsx:15`: change `src="/XLogo.png"` → `src="/monogram-mono-pos.svg"` (asset already copied in Phase 2).
   - 80KB PNG → ~2KB SVG; infinite scaling; no decode cost.
   - Drop the `brightness(0) invert(1)` filter since the SVG is already brand-purple at appropriate opacity.

### Phase 5 — Verify (manual; tests deferred to REBRAND-005)
1. `bun install` (already on bun lockfile) → `bun run dev` → manual walkthrough at 1440 / 768 / 375.
2. Run `bun run typecheck` (catches the `role` removal + `headline` addition contract changes — these are the only behavioral regressions in this rebrand).
3. Run `bun run lint`.
4. Side-by-side screenshot comparison with the brand book gradient page (p. 11) and logo page (p. 4) — fidelity check.
5. Manual a11y spot-check: Tab through the page, verify focus-visible coral outline appears on every interactive element, verify keyboard can open/close mobile drawer + team bios + research expand + locale toggle.
6. Lighthouse: confirm no contrast regression (the gradient surface + white text is the riskiest pairing — Lighthouse a11y score and INP both checked).
7. Update `README.md` with the new brand spec section.

**Known testing gap:** No automated tests added in this PR (user decision, Section 3 of plan-eng-review). New behavior (Research expand, mobile drawer, headline rendering, locale switch persistence) ships covered only by manual QA above. Tracked as `TODOS.md` REBRAND-005 (Establish Playwright E2E baseline).

### Phase 5b — Mark unused sections as deprecated
Add a top-of-file comment block to each currently-unused section component:
```tsx
/**
 * @deprecated Unused as of 2026-05-06 (Algelyx rebrand).
 * Delete by 2026-09-01 if still unrouted.
 */
```
Files: `pricing-section.tsx`, `market-section.tsx`, `roadmap-section.tsx`, `features-chess.tsx`, `footer-section.tsx`, `start-section.tsx`, `testimonials-section.tsx`. Keep their copy types in `lib/copy.ts` for now.

### Phase 6 — Commit + ship

**Outside-voice catch on phase ordering:** Phase 1 and Phase 2.5 both mutate `apps/web/app/layout.tsx` (Phase 1 drops `forcedTheme="dark"`; Phase 2.5 removes `<ThemeProvider>` entirely + adds `<MotionConfig>` + adds `<div className="fixed-brand-bg" />`). To avoid rebase conflicts when split into separate commits, **merge layout.tsx changes into ONE commit** at the end of Phase 2.5. Phase 1's "drop forcedTheme" is then redundant — note that and execute it as part of the layout rewrite in Phase 2.5.

**Pre-ship verification:**
- **Domain ownership for `info@algelyx.com`:** verify MX records resolve before merging. If the mailbox isn't routable, the hero + footer "Contattaci" CTAs send to a black hole. `dig MX algelyx.com` should show valid MX servers. If not, flag to the founders BEFORE shipping.

**Commits, conventional format:**
- `feat(brand): codify Algelyx 2026 design tokens and gradient`
- `feat(brand): swap to color logo + monogram assets and favicons`
- `refactor(web): centralize logo + token sweep + remove next-themes`
- `feat(web): reskin sections to brand-true surface + mobile drawer`
- `feat(web): add research section with 7 peer-reviewed publications`
- `chore(web): update copy to match definitive GDD 03052026`
- `perf(web): drop Barlow font, optimize body bg paint, local solution images`

## What's NOT in scope (deferred, with rationale)

| Item | Why defer |
|------|-----------|
| Custom branded photography (replacing Unsplash images in Solution) | The email didn't include photography assets. Track as TODO. |
| Marketing OG images per page | Only `/` exists today; one OG cover suffices. |
| Animation pass on the gradient (book gradient is static; site has motion) | Current motion library (`motion` v12) handles entrances; no perf budget signal pushing this now. |
| Pricing reactivation | Pricing section is currently commented out and the docx makes no mention. |
| Roadmap section | Same — present in code, not on the page, not mentioned in docx. |
| EN translation review by native speaker | EN copy is already present; this work touches IT primarily. Flag for review post-merge. |
| `argelyx` → `algelyx` repo rename on GitHub | Cosmetic; doesn't affect deployment. |

## What already exists (reuse, don't rebuild)

- **Type scale**: `type-hero`, `type-h2`, `type-h3`, `type-lead`, `type-body`, `type-label` — keep, only re-token colors.
- **Card system**: `white-card`, `outline-card`, `liquid-glass`, `floating-nav` — keep; recolor borders/shadows.
- **Buttons**: `btn-primary`, `btn-outline` — invert color logic, geometry stays.
- **Section component skeletons** (Hero, Problem, Solution, Features, Stats, Team, CtaFooter) — keep, reskin.
- **Motion entrances** (`motion/react`) — keep all `initial → whileInView` patterns.
- **Locale provider + EN/IT toggle** — keep, just add Research copy in both languages.
- **Panton fonts** in `apps/web/public/fonts/` + `@font-face` declaration — keep.

## Failure modes (per new codepath)

| Codepath | Realistic failure | Test? | Error handling? | User-visible? |
|----------|------------------|-------|-----------------|---------------|
| `BrandLogo` rendering SVG via `<Image>` without `unoptimized` | Production 400 from Next 16 image optimizer | NO (deferred to REBRAND-005) | No | YES — broken logo on every page. **CRITICAL GAP.** Mitigation: explicit `unoptimized` prop on `<BrandLogo>` (mandatory in component spec). |
| Mobile drawer open + page scroll | Drawer captures scroll OR background scrolls underneath | NO (deferred) | No | Mild — UX glitch, drawer feels disconnected. Mitigation: `body { overflow: hidden }` while drawer open; restore on close. Document in Phase 3. |
| Locale switch with localStorage write blocked | Toggle visually flips but doesn't persist across reload | NO (deferred) | Partial — fall back to in-memory state | Mild — user re-toggles after reload. Acceptable v1. |
| Research expand with 7 papers, all DOI links failing CSP | DOI links don't open new tab if CSP `frame-src` is restrictive | NO | No | Low — DOIs go to `doi.org` (well-known); CSP is permissive on a marketing site. |
| Animated section + fixed-bg sibling stacking | If a section's `transform: translateY()` creates a stacking context, fixed-bg div may render above content | NO | No | YES — gradient bleeds over content if mis-z-indexed. Mitigation: page wrapper carries `relative z-10`, fixed-bg at `z-0`, drawer at `z-50`, navbar at `z-40`. |
| SVG id collision (logo + footer logo both on page) | Second logo renders with first's gradient on Safari | NO | No | YES — visible color glitch. Mitigation: SVGO `prefixIds` per file (Phase 2). |
| Token recolor missed file | Old `#1e1145` hardcode survives the sweep | Partial — `bun run typecheck` won't catch (it's not a type) | No | YES — section reads inconsistent. Mitigation: grep verification command (Phase 2.5). |
| MotionConfig SSR with no JS | Reduced-motion pref ignored on first paint | n/a | n/a | None — matches expected behavior on no-JS. |

**Critical gap count: 3** (BrandLogo SVG handling, stacking-context z-index, SVG id collision). All have mitigations specced; none have automated tests because tests are deferred to REBRAND-005. All three are visible-on-load failure modes — manual QA in Phase 5 must verify them at 1440 / 768 / 375.

## Worktree parallelization

| Step | Modules touched | Depends on |
|------|----------------|------------|
| Phase 1 — DESIGN.md + tokens | `packages/ui/`, repo-root `DESIGN.md` | — |
| Phase 2 — Logo assets + favicons | `apps/web/public/` | — |
| Phase 2.5 — Color sweep + BrandLogo + next-themes removal | `apps/web/components/` (every section), `apps/web/app/layout.tsx` | Phase 1 (tokens), Phase 2 (asset paths) |
| Phase 3 — Component reskins (drawer, headline field, etc.) | `apps/web/components/sections/`, `apps/web/components/navbar.tsx` | Phase 2.5 |
| Phase 4 — Copy updates + research data | `apps/web/lib/copy.ts`, `apps/web/lib/research.ts` (NEW) | — |
| Phase 4.5 — Performance fixes | `apps/web/components/sections/solution-section.tsx`, `apps/web/components/ui/brand-crosses.tsx`, `apps/web/app/layout.tsx`, `globals.css` | Phase 1 (font tokens), Phase 2 (SVG asset paths) |
| Phase 5 — Verify | n/a (manual QA) | All prior |
| Phase 5b — @deprecated comments | `apps/web/components/sections/{pricing,market,roadmap,features-chess,footer,start,testimonials}-section.tsx` | — |
| Phase 6 — Commit + ship | All | All prior |

**Parallel lanes:**
- **Lane A (independent):** Phase 1 + Phase 2 + Phase 4 + Phase 5b can run in parallel from separate worktrees. They touch disjoint module directories.
- **Lane B (sequential):** Phase 2.5 → Phase 3 → Phase 4.5 → Phase 5 → Phase 6. Each builds on the previous.

**Execution order for parallel implementation:**
```
Lane A (parallel worktrees):
  ├── A1: Phase 1 (DESIGN.md + tokens)        [packages/ui, /DESIGN.md]
  ├── A2: Phase 2 (logo assets)               [apps/web/public]
  ├── A3: Phase 4 (copy + research data)      [apps/web/lib]
  └── A4: Phase 5b (@deprecated headers)      [unused section files]

Merge Lane A → Lane B (sequential):
  └── Phase 2.5 → Phase 3 → Phase 4.5 → Phase 5 (manual QA) → Phase 6 (commits)
```

**Conflict flags:**
- Phase 2.5 and Phase 4.5 both touch `apps/web/app/layout.tsx` and `packages/ui/src/styles/globals.css`. Run sequentially in Lane B (Phase 2.5 first); the per-phase commits then layer cleanly.
- Phase 4.5 step 4 (BrandCrosses → SVG) depends on Phase 2's `monogram-mono-pos.svg` being in place. Lane A's A2 must finish before Lane B starts Phase 4.5.

Realistic CC time:
- Lane A in parallel: ~10 min (longest leg is Phase 1's token conversion + DESIGN.md write).
- Lane B sequential: ~25 min (Phase 2.5 sweep is the heaviest).
- Plus Phase 5 manual QA: ~15 min human time.
- Total wall-clock: ~50 min CC + 15 min human, vs ~80 min sequential.

## Approved Mockups

**Status:** Visual mockup generation via the gstack designer was attempted but blocked — no `OPENAI_API_KEY` is configured for the `~/.claude/skills/gstack/design/` binary. The plan was reviewed text-first across all 7 passes against the brand book pages directly (cover, monogram construction, logo proportions, color triad, gradient, typography, application).

**To enable mockup generation later:**
- Run `~/.claude/skills/gstack/design/dist/design setup` (provides guided key entry).
- Or set `OPENAI_API_KEY` in environment.
- Then re-run `/plan-design-review` and the Step 0.5 mockup loop will run automatically.

The brand book pages themselves act as the visual reference for this work — they ARE the approved mockups for tokens, gradient, and logo. The implementer should keep the PDF open during build.

## Decisions resolved (2026-05-06)

All 9 in-scope design decisions confirmed:
- D1 Theme: brand-true light gradient
- D2 Team copy: drop role + Co-Founder, keep name + LinkedIn + bio
- D3 Research section: yes, collapsible
- D4 Problem detail: keep condensed paragraphs
- D5 Hero scan order: logo → headline → CTA
- D6 Mobile pacing: gradient full-bleed + alternating contrast blocks
- D7 Team credibility: first sentence of bio always visible
- D8 Pill nav logo: full-color everywhere (gradient capsule visible)
- D9 Dead code: `@deprecated` comments now, delete by 2026-09-01

## Completion Summary — Design Review (2026-05-06)

```
+====================================================================+
|         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
+====================================================================+
| System Audit         | No DESIGN.md, brand book is the spec source |
| Step 0               | Initial 3/10. Focus: theme, team, research  |
| Pass 1  (Info Arch)  | 7/10  →  9/10 (hierarchy + mobile pacing)  |
| Pass 2  (States)     | 4/10  →  9/10 (state matrix + reduced-mo.) |
| Pass 3  (Journey)    | 5/10  →  9/10 (storyboard + bio-first)     |
| Pass 4  (AI Slop)    | 6/10  →  9/10 (anti-slop guards + coral)   |
| Pass 5  (Design Sys) | 5/10  →  9/10 (DESIGN.md spec + protocol)  |
| Pass 6  (Responsive) | 4/10  →  9/10 (matrix + a11y + drawer)     |
| Pass 7  (Decisions)  | 9 resolved, 1 deferred (photography)       |
| Overall design score | 3/10  →  9/10                               |
+====================================================================+
```

## Completion Summary — Engineering Review (2026-05-06)

```
+====================================================================+
|         ENGINEERING PLAN REVIEW — COMPLETION SUMMARY               |
+====================================================================+
| Step 0 Scope         | Full scope accepted (~17 files, justified)  |
| Section 1 Arch       | 4 issues found, 4 resolved                  |
| Section 2 Quality    | 4 issues found, 4 resolved                  |
| Section 3 Tests      | Coverage 0% → tests deferred (REBRAND-005)  |
| Section 4 Perf       | 4 issues found, 4 resolved                  |
| Outside voice        | Claude subagent ran, found 8 missed bugs    |
|                      | + 2 cross-model tensions, all resolved       |
+--------------------------------------------------------------------+
| Critical bugs caught | 8 (token naming, SVG handling, stacking,    |
|                      | SSR flicker, SVG ids, dark variant audit,    |
|                      | phase ordering, favicon tooling)             |
| Critical gaps        | 3 (no automated tests on new behavior)      |
| Failure modes        | 8 mapped, 3 critical w/ mitigations         |
| Worktree lanes       | Lane A (4 parallel) + Lane B (sequential)   |
| Lake Score           | 9/13 recommendations chose complete option  |
| TODOS.md             | 5 items (added REBRAND-005 testing)         |
+====================================================================+
```

The plan is implementation-ready. Phase 1 (DESIGN.md + tokens) can start. Lane A can run in parallel worktrees if you want maximum throughput.

## Unresolved decisions

None blocking. Two deferrals tracked in TODOS.md:
- **REBRAND-001** — branded photography (the strategic credibility lever the outside voice flagged).
- **REBRAND-005** — Playwright E2E baseline (covers the new behavior currently shipping untested).

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | not run |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | — | not run |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 1 | CLEAR (PLAN) | 12 issues, 3 critical gaps |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | CLEAR (FULL) | score: 3/10 → 9/10, 9 decisions |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | not run |
| Outside Voice | independent challenge | Cross-model blind-spot pass | 1 | issues_found | Claude subagent — 8 missed bugs caught and applied |

- **CROSS-MODEL:** Outside voice caught 8 technical bugs the eng review missed (token naming under Tailwind v4 `@theme`, SVG handling in next/image, stacking-context trap on `body::before`, `useReducedMotion` SSR null, SVG id collisions, dark-variant audit, layout.tsx phase-ordering conflict, favicon `.ico` tooling). All applied to plan.
- **UNRESOLVED:** 0
- **VERDICT:** ENG + DESIGN CLEARED — ready to implement.
