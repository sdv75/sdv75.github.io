# LP Lawyer Landing Design

## Goal

Build a static front-end landing page matching the provided `reference/lp_lawyer_*.png` screenshots as closely as possible.

## Scope

- Create a standalone static site in the workspace root.
- Match the desktop reference structure: header, hero, stats, practice areas, cases, consultation price, urgency strip, FAQ, visual-only contact form, quick contact block, map preview, and footer.
- Keep the contact form front-end only: no network request, no working backend, no external service.
- Use local assets only. The OpenAI image CLI was approved, but `OPENAI_API_KEY` is not present, so final AI-generated bitmap assets cannot be produced in this run.
- Use reference-derived local raster crops and/or local SVG assets as temporary visual assets, saved inside `assets/`.
- Make the layout responsive for tablet and mobile while keeping the desktop reference as the primary target.

## Visual Direction

- Brand: `LEX PRO`, legal company tone.
- Palette: deep navy, white, light gray, warm amber accents.
- Typography: serif headings with sans-serif body text.
- Layout: centered 1240px-style container, slim top navigation, card grids, reserved white space, restrained shadows.

## Verification

- Node built-in tests verify that the static page exposes all core sections, keeps the form front-end only, and references only existing local assets.
- Manual verification starts a local static server and opens the page URL for review.
