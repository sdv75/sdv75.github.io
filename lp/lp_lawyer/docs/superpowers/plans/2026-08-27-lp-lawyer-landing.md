# LP Lawyer Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static, reference-matched legal landing page in the current empty workspace.

**Architecture:** The site is a no-build static front end: `index.html` owns semantic content, `styles.css` owns layout/visual matching, `main.js` owns small UI behavior, and `assets/` stores local images. Tests use Node's built-in test runner and inspect the served static artifact boundaries.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node built-in `node:test`, local raster/SVG assets.

**Spec:** `docs/superpowers/specs/2026-08-27-lp-lawyer-design.md`

## Global Constraints

- No backend submission; the contact form is visual-only.
- Use only local assets referenced from the workspace.
- Desktop reference matching is the priority, with responsive mobile behavior included.
- `OPENAI_API_KEY` is missing, so OpenAI Image API generation is unavailable in this run.
- This workspace is not a git repository; commit steps are intentionally skipped.

---

### Task 1: Static Contract Tests

**Files:**
- Create: `package.json`
- Create: `tests/landing.test.js`

**Interfaces:**
- Consumes: workspace root path.
- Produces: `npm test` command that validates the final static landing page.

- [ ] **Step 1: Write the failing test**

```javascript
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');

function read(relativePath) {
  return readFileSync(path.join(root, relativePath), 'utf8');
}

test('landing page exposes the full reference section flow', () => {
  const html = read('index.html');
  for (const id of ['hero', 'practice', 'cases', 'pricing', 'faq', 'contact', 'footer']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`

Expected: FAIL because `index.html` does not exist yet.

- [ ] **Step 3: Add remaining static contract tests**

Add tests for visual-only form behavior and local asset existence.

- [ ] **Step 4: Keep tests red until production files exist**

Run: `npm test`

Expected: FAIL because production files are still missing.

### Task 2: Local Visual Assets

**Files:**
- Create: `assets/hero-legal.png`
- Create: `assets/case-corporate.png`
- Create: `assets/case-contract.png`
- Create: `assets/case-family.png`
- Create: `assets/map-preview.png`
- Create: `assets/image-prompts.md`

**Interfaces:**
- Consumes: `reference/lp_lawyer_1.png`.
- Produces: asset files referenced by `index.html`.

- [ ] **Step 1: Extract temporary raster assets**

Run a Pillow crop script from the reference screenshot, saving the outputs under `assets/`.

- [ ] **Step 2: Save future image generation prompts**

Create `assets/image-prompts.md` with the CLI prompts for replacing the temporary crops once `OPENAI_API_KEY` is configured.

- [ ] **Step 3: Confirm assets exist**

Run: `Get-ChildItem assets`

Expected: all five image files plus `image-prompts.md`.

### Task 3: Landing Markup

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: local assets from Task 2.
- Produces: semantic landing page consumed by CSS, JS, and tests.

- [ ] **Step 1: Implement the HTML shell**

Create header, hero, practice cards, cases, pricing card, FAQ, contact form, map block, and footer.

- [ ] **Step 2: Run tests**

Run: `npm test`

Expected: tests fail until CSS/JS and all linked files exist.

### Task 4: Styling and Interaction

**Files:**
- Create: `styles.css`
- Create: `main.js`

**Interfaces:**
- Consumes: `index.html` classes and data attributes.
- Produces: responsive layout and local-only UI behavior.

- [ ] **Step 1: Implement CSS**

Match the reference page spacing, navy/amber palette, card borders, desktop grids, and responsive breakpoints.

- [ ] **Step 2: Implement JS**

Add smooth anchor scrolling, FAQ toggles, and prevent default form submission.

- [ ] **Step 3: Run tests**

Run: `npm test`

Expected: PASS.

### Task 5: Manual Verification

**Files:**
- No new files required.

**Interfaces:**
- Consumes: completed static site.
- Produces: a local URL for browser review.

- [ ] **Step 1: Start static server**

Run: `python -m http.server 4173`

Expected: server listens on `http://localhost:4173/`.

- [ ] **Step 2: Report verification**

Report test results, server URL, and the image generation limitation caused by the missing key.
