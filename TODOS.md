# TODOS

Deferred work. Not blocking the active branch.

---

## REBRAND-001 — Branded photography for Solution section
**Why:** The Solution section currently uses two Unsplash external images. Stock cell-culture imagery is a credibility leak for a biotech product whose differentiation is scientific rigor.
**Pros:** Real lab/product photography upgrades trust signal; reduces external-domain DNS lookups; matches brand book's visual standard.
**Cons:** Cost of photographer or lab session; coordination with the Trento team.
**Context:** The /Users/andreasalomone/devving/algelyx/Brand_Manual_Algelyx.pdf doesn't specify photography style — define this when commissioning. Two images needed: (1) a 3D culture / cells in matrix close-up for the AlgiSTEM XF Kit row; (2) a cell recovery / hands-in-lab moment for the AlgiSTEM XF ReleX row.
**Depends on:** Brand book's photography style guide (not yet provided), or a creative direction call with the team.
**Source:** Email from Algelyx team, 2026-05-06.

---

## REBRAND-002 — Rename GitHub repo `argelyx` → `algelyx`
**Why:** The repo slug doesn't match the brand. Email + brand book + product all spell it `algelyx`. The `argelyx` spelling is an artifact.
**Pros:** Brand-source consistency. New contributors land on the right name. URLs and clones stop carrying the typo.
**Cons:** Existing clones need to update remotes. Any external links to the repo break (GitHub does add a redirect).
**Context:** `gh repo rename algelyx` in the repo. Update README, package.json `name` if relevant, CI references. Then `git remote set-url origin git@github.com:andreasalomone/algelyx.git` for local clones.
**Depends on:** None.
**Source:** Audit during 2026-05-06 rebrand plan.

---

## REBRAND-003 — Native EN-speaker copy review
**Why:** The EN translations were created during a prior milestone and weren't part of the 2026-05-06 GDD update. Some passages read translation-y (e.g. "Total batch-to-batch reproducibility" reads slightly off). A native review would catch register, idiom, and scientific-English nuance.
**Pros:** Levels up the EN site to native quality without rewriting the IT version. Improves search/conversion for EN-speaking research audiences.
**Cons:** Cost of reviewer time; needs domain expertise (cell biology / biotech vocabulary).
**Context:** All EN strings live in `apps/web/lib/copy.ts` under the `en` key. Reviewer needs the IT version side-by-side to check faithfulness.
**Depends on:** Rebrand merge (so reviewer doesn't review copy that's about to change).
**Source:** Pass review during 2026-05-06 rebrand.

---

## REBRAND-005 — Establish testing baseline (Playwright E2E)
**Why:** Site currently has zero tests. The 2026-05-06 rebrand adds new behavior (Research expand, mobile drawer, team headline rendering, locale switch) shipped untested. Visual regressions and interaction bugs surface only via manual QA.
**Pros:** E2E coverage on critical user flows (locale switch, expands, scroll CTAs); axe-core a11y baseline; visual regression screenshots; CI gate before merges. Cheap with AI assistance (~25 min setup + tests).
**Cons:** Adds Playwright as a dev dependency; CI run time grows by ~30s; first set of snapshots needs human approval.
**Context:** Recommended scope for first pass: 8 E2E tests covering page-renders, locale-switch EN↔IT with reload persistence, team card expand/collapse, research expand, mobile drawer open/close + section-anchor close + Esc close, scroll-to-solution CTA, mailto CTA, axe-core no-critical violations. Add `apps/web/playwright.config.ts`, `apps/web/e2e/*.spec.ts`. Wire into Turborepo as `test:e2e` script.
**Depends on:** Rebrand merge (so tests target the new design, not the old).
**Source:** Section 3 of the 2026-05-06 plan-eng-review.

---

## REBRAND-004 — Decide deletion of deprecated section components by 2026-09-01
**Why:** As of 2026-05-06, seven section components are unused but kept with `@deprecated` comments (pricing, market, roadmap, features-chess, footer, start, testimonials). Leaving them indefinitely confuses future contributors.
**Pros:** Smaller `apps/web/components/sections/` directory; less mental load; clean tree-shaken bundle.
**Cons:** If any section is wanted back, requires git restore (still cheap).
**Context:** Audit each on the deadline. If any are still wanted, document why they exist. Otherwise delete them and their related types in `lib/copy.ts`.
**Depends on:** None — a calendar reminder will do.
**Source:** Pass 7 of the 2026-05-06 plan-design-review.
