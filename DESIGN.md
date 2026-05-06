# Algelyx Design System
_Source of truth: `Brand_Manual_Algelyx.pdf` (May 2026 edition)_
_Last synced from book: 2026-05-06_

## 1. Colors
| Token | Hex | RGB | Pantone | Use |
|-------|-----|-----|---------|-----|
| `--brand-purple` | `#4C1D95` | 76, 29, 149 | 267 C | Primary. Headings on white, primary section blocks, focus states. |
| `--brand-violet` | `#A78BFA` | 167, 139, 250 | Violet 0631 C | Secondary accent. Hover states, gradient mid-stop. |
| `--brand-coral`  | `#FB7185` | 251, 113, 133 | 1775 C | Tertiary accent. Focus-visible outlines, USP underlines, gradient end-stop. |

Tailwind utility classes: `bg-brand-purple`, `text-brand-violet`, `border-brand-coral`. Generated automatically by `@theme inline` in `packages/ui/src/styles/globals.css`.

## 2. Typography
- **Display + body:** Panton (local @font-face). Black (900) for headings, Regular (400) for body.
- Files: `apps/web/public/fonts/Panton-{Black,Regular}.{woff2,woff,ttf,eot}`.
- Type scale (utility classes in globals.css): `type-hero` / `type-h2` / `type-h3` / `type-lead` / `type-body` / `type-label`.

## 3. Logo & monogram
- Files in `apps/web/public/`: `logo.svg` (color), `logo-mono-pos.svg`, `logo-mono-neg.svg`, `monogram.svg`, `monogram-mono-pos.svg`, `monogram-mono-neg.svg`.
- Min digital sizes: horizontal 70 px, vertical 49 px, monogram 17 px (per book p. 9).
- Logotype = 3× monogram width. Spacing locked.
- Use full-color logo on white/light surfaces; monochrome on colored surfaces.
- Render via `<BrandLogo>` component (Phase 2.5) — do NOT inline `<Image>` calls with `brightness(0) invert(1)` filters.

## 4. Gradient
Defined in `globals.css` as `--gradient-brand`. Multi-stop linear flow violet → purple → coral. Applied as page surface via the fixed `.fixed-brand-bg` element rendered in `app/layout.tsx`.

## 5. Spacing & radius
- Section padding: `py-16 px-6` (mobile) / `py-24 px-12` (tablet) / `py-32 px-20` (desktop).
- Pill radius: `9999px` for navs, buttons, badges.
- Card radius: `2rem`–`2.5rem` (white cards).

## 6. Component tokens
- `.btn-primary` — white fill, brand-purple text, coral focus outline.
- `.btn-outline` — white border, white text, coral focus outline.
- `.white-card` — white surface, brand-purple text, soft shadow.
- `.outline-card` — translucent white border on gradient surfaces.
- `.brand-purple-section` — solid `#4C1D95` block for alternating contrast (Stats, Team, Research).
- `.floating-nav` — white pill nav.
- `.fixed-brand-bg` — the fixed gradient surface element (in `<body>`).

## 7. Section surface rules (alternating contrast)
Page surface stays the brand gradient. Sections that need contrast sit on white cards or solid brand-purple blocks:
- Hero, Problem, Solution, Features, CTA Footer → on the gradient (white text).
- Stats, Team, Research → solid brand-purple block OR white card with brand-purple text.

## 8. Anti-slop guards
- The brand gradient is mandated by the book (p. 11), not a generic SaaS choice.
- No icons-in-colored-circles, no 3-column feature mosaics, no decorative blobs.
- Coral is the third active brand color — used in USP underlines, focus rings, DOI hover.
- Cards must earn pixels.
- No system-ui or default font stacks anywhere.

## 9. Update protocol
When the brand book changes, bump the synced date and re-derive tokens. Do NOT introduce ad-hoc colors in components — every color value goes through `--brand-*` tokens or semantic tokens that resolve to them.
