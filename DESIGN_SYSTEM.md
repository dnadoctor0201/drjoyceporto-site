# drjoyceporto.com — Design System & Brand Style Guide
### Version 1.1 · Reference document for all future contributors

This document is the single source of truth for how this website looks, reads, and behaves. Anyone adding a page, component, illustration, or line of copy — including a future version of this same collaboration — should be able to open this file and know exactly how to make it feel like it belongs.

Nothing here is aspirational unless explicitly marked as forward-looking guidance (Sections 16–17). Most of what follows names and explains decisions already implemented in the live codebase.

---

## Design Decision Log

This log tracks significant *site* milestones — distinct from any internal development-phase labels (Phase 1, Release Candidates) used during a given build cycle. A future contributor should be able to read this log alone and understand what changed and why, without needing that internal history.

**Version 1.0**
- Initial design system established: brand philosophy, typography, color and spacing tokens, component library, navigation rules, accessibility and SEO standards, photography and illustration direction, GitHub/Jekyll conventions.
- Canonical-ownership principle established (Section 16): recurring ideas get one full home and links elsewhere, rather than being re-argued per page.

**Version 1.1** *(this version)*
- Added: Non-goals ("What This Website Is Not"), AI Usage Policy, Evidence Policy, Image Naming Convention, Markdown Authoring Standards, and a closing guiding principle.
- No existing section was weakened or reversed — all additions extend the Version 1.0 philosophy rather than introducing a new one.

**Version 1.2** *(reserved)* — anticipated to cover Publications, Education, and Condition Explainer content once those sections are built.

**Version 2.0** *(reserved)* — anticipated to cover Patient Intake and the Physician Referral Portal, once those become real features rather than placeholders.

---

## 1. Brand Philosophy

This is the website of a practicing physician-scientist, not an institution or a product. Every design and writing decision should be measured against one question: **does this build the kind of trust a careful, evidence-based physician earns in person?**

That means:

- **Restraint over impression.** The site should never try harder to look credible than the work itself already is. No visual flourish should exist purely to impress.
- **Two audiences, one voice.** Patients and physicians read this site for different reasons, but they should never sense two different people wrote it. Vocabulary shifts; sincerity and rigor do not.
- **Say what is true, not what is impressive.** Every claim on this site should survive being read by a skeptical colleague. If a sentence needs softening to stay honest, soften the sentence — never the fact.
- **The mission is real, not marketing.** This site exists partly to build neurogenetics capacity in the Philippines. That mission is stated once, plainly, on the About page, and referenced — never re-argued — elsewhere.

If a future design or content decision doesn't obviously serve trust, clarity, or one of these two audiences, it doesn't belong on this site, regardless of how polished it looks in isolation.

---

## 2. What This Website Is Not

Stating boundaries explicitly is as important as stating principles — this section exists specifically to prevent feature creep as the site grows over years and contributors.

- **Not a hospital or institutional website.** It represents one physician's practice and research, not a multi-department institution. Content, tone, and scope should stay calibrated to that reality even as the practice grows.
- **Not a laboratory website.** Laboratory and sequencing capability is discussed only in service of explaining clinical care and research — never as a standalone technical showcase.
- **Not a commercial genetics company.** No product marketing, no direct-to-consumer testing language, no pricing pages. Genetic testing is discussed as a clinical decision made with a physician, never as a product to purchase.
- **Not a replacement for medical consultation.** Every patient-facing page should read as preparation for a conversation with a physician, never as a substitute for one. This is also why the site carries no diagnostic tools, symptom checkers, or self-assessment quizzes.
- **Not a news-first website.** The reserved `/news/` section (Version 1.2 or later) is for occasional, substantive updates — not a content-marketing blog cadence. If maintaining a real publishing cadence ever becomes the goal, that's a signal to build a different kind of site, not to redefine this one.

When evaluating a proposed addition, check it against this list first. If it makes the site resemble any of the above, that's reason enough to decline it — regardless of how well-executed the proposal is on its own terms.

---

## 3. Design Principles

1. **Clarity beats decoration.** Every visual element must earn its place by making something easier to understand or act on.
2. **One signature, quietly repeated.** The `.trace-divider` motif (a short sequencing-trace line) is the site's single recurring visual signature. It appears once per page, never doubled up, never used decoratively.
3. **Hierarchy through type and space, not color.** Color is reserved for meaning (navy = primary/patient actions, teal = accent/physician actions) — not for decoration or emphasis.
4. **Consistency across sessions.** A component built today should look and behave identically to one built a year from now. This is why the token system (Sections 6–7) exists — new work should always reference existing variables, never introduce new hex values or spacing numbers.
5. **Accessible by default, not by retrofit.** Every new component should be built keyboard-navigable and screen-reader-legible from the first draft, not audited in afterward.
6. **Earn the right to add.** New sections, pages, or visual elements are added only when they solve a real gap identified through actual use of the site — not because a template offers them, and not if they would move the site toward anything listed in Section 2.

---

## 4. Writing Style Guide

This is the most important section in this document. The design system supports the writing; it does not substitute for it.

### Voice
Warm, academic, humble, patient-centered, evidence-based. The site should read as though a thoughtful physician is speaking directly to the person in front of them — never as an institution, a brand, or a marketing department.

### Rules that apply everywhere
- **Never overpromise.** Use "may help clarify," "can inform," "is intended to" — never "will diagnose," "guarantees," or "ensures." A test result "may help clarify a diagnosis"; it does not "give you answers."
- **No superlatives, ever.** No "leading," "cutting-edge," "world-class," "best," or "first." If a claim is factually true and relevant (e.g., a specific credential), state it plainly and let the fact carry its own weight.
- **Conservative claims, stated with confidence.** Being conservative about what genetics can promise is not the same as sounding tentative. Write plainly and directly about limitations — don't hedge every sentence.
- **No CV-listing tone in prose sections.** Credentials belong in bulleted lists (About, Home's Background section) — never narrated as achievements within paragraphs. When a paragraph must reference a credential, explain *why it mattered*, not just that it happened.
- **State a fact once, thoroughly, in its natural home; link to it elsewhere.** If two pages need to make the same point, the fuller version lives in exactly one place (Section 16 on canonical ownership), and every other page gives the short version with a link.

### Voice by audience
| | Patients | Physicians |
|---|---|---|
| Vocabulary | Plain language, defined terms, no unexplained jargon | Precise clinical terminology, assumes background knowledge |
| Sentence rhythm | Shorter sentences, more white space between ideas | Denser, can carry more clauses per sentence |
| What earns trust | Calm tone, clear process, explicit limitations | Specificity, methodology, defensible reasoning |
| Evidence shown | Minimal citation; clarity takes priority (see Evidence Policy below) | Cites relevant guidelines where appropriate |
| Closing action | "Request an appointment" | "Refer a patient" |

### Evidence Policy
Different pages carry different evidentiary weight, and the site should be honest about that rather than applying one citation standard everywhere:

- **Patient pages** prioritize clarity over citation density. Unnecessary references interrupt plain-language explanation and rarely change what a patient does with the information — they're avoided unless a specific claim genuinely needs external grounding.
- **Physician-facing pages** (the physician half of service pages, For Referring Physicians) cite relevant clinical guidelines where doing so strengthens a specific referral or testing recommendation — not as a blanket bibliography, but where precision matters to a clinical decision.
- **Research pages** prioritize primary literature whenever a specific finding or method is referenced, over secondary summaries or general statements.

### AI Usage Policy
This site is built in collaboration with AI tools, and that fact is handled the same way any other authorship question would be: honestly, and without letting it lower the bar for what gets published.

- AI may assist with drafting educational material, software development, editing, and illustration planning.
- **All medical information, scientific content, educational material, and clinical recommendations are reviewed by Dr. Porto before publication.** This is a hard requirement, not a courtesy step.
- AI-generated content is never published without physician review — this applies equally to a full page and to a single sentence added during a later edit.

### The "by Filipinos, for Filipinos" rule
This phrase appears **exactly once, site-wide** — in the About page's "Building for the Philippines" section, as the conclusion of a paragraph, never as a heading or a standalone line. If a future page needs to reference the mission, it links to About; it does not restate or rephrase the line. This is a hard rule, not a style preference — repeating it dilutes it.

### Faith
Faith is discussed in exactly one place — About's "Faith and Vocation" section — as context for what motivates the work, never as an expectation placed on the reader. No other page references faith, scripture, or religious language, regardless of how naturally it might seem to fit a sentence about mission or service.

### Editing checklist for any new copy
Before publishing, check every paragraph against:
- Does this sound like a physician talking to this specific reader, or like an institution talking to a category of people?
- Is there a claim here a skeptical colleague could challenge?
- Does this repeat something better said elsewhere on the site? If so, cut it and link instead.
- Would this survive being read aloud to the patient it's about?

---

## 5. Typography System

| Role | Stack | Usage |
|---|---|---|
| Display / Headings | `Georgia, "Iowan Old Style", "Palatino Linotype", "URW Palladio L", Palatino, serif` | All `h1`–`h4`, `.page-header__eyebrow`'s label pairing, `.credentials-line` |
| Body | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | Paragraphs, lists, UI text, buttons |

**Why system fonts:** zero external network requests, no font-swap layout shift, and a serif/sans pairing that already reads as academic-medical without needing a licensed typeface. If a future redesign introduces a custom webfont, it must be evaluated against this baseline — the performance and simplicity tradeoff has to be worth it, not assumed.

### Type scale
| Token | Size | Typical use |
|---|---|---|
| `--font-size-sm` | 0.875rem | Captions, eyebrows, nav links, button text |
| `--font-size-base` | 1rem | Body copy |
| `--font-size-lg` | 1.125rem | Card headings (h4-equivalent), lead sentences |
| `--font-size-xl` | 1.375rem | h3 |
| `--font-size-2xl` | 1.75rem | h2 |
| `--font-size-3xl` | 2.25rem | Reserved for future large-format use |
| `--font-size-4xl` | 2.875rem | h1 |

Line height: `1.25` for headings (tight), `1.65` for body copy (readable at length). Paragraphs are capped at a `.prose` measure (62ch) — never let body text run full-width on a wide viewport.

---

## 6. Color System

Every color used on the site is a named CSS custom property in `variables.css`. No page or component should introduce a new hex value — if a new color feels necessary, it's a signal to revisit this section first, not to add one inline.

| Token | Value | Meaning / usage |
|---|---|---|
| `--color-bg` | `#FBFAF7` | Page background — warm off-white, not stark |
| `--color-surface` | `#FFFFFF` | Cards, header background |
| `--color-ink` | `#24292E` | Body text |
| `--color-ink-muted` | `#5B6470` | Captions, metadata, page descriptions |
| `--color-border` | `#E3E1DA` | Hairline dividers, card borders |
| `--color-navy` | `#1B2A45` | Primary brand color — patient-facing actions, headings |
| `--color-navy-dark` | `#101A2C` | Hover states, footer background |
| `--color-navy-tint` | `#EDF0F5` | Patient-facing callouts, mission-section backgrounds |
| `--color-teal` | `#2E8B82` | Accent — physician-facing actions, focus ring, links |
| `--color-teal-dark` | `#206760` | Link text, physician CTA text |
| `--color-teal-tint` | `#E4F2F0` | Physician-facing callouts and section backgrounds |

**The color-coding rule:** navy always means a patient-facing action or primary emphasis; teal always means a physician-facing action or secondary emphasis. This mapping must never be reversed or mixed — a physician CTA in navy, or a patient CTA in teal, breaks a pattern a returning visitor has already learned to read.

---

## 7. Spacing System

An 8-point-adjacent scale, expressed as named tokens rather than raw values:

| Token | Value |
|---|---|
| `--space-2xs` | 0.25rem |
| `--space-xs` | 0.5rem |
| `--space-sm` | 0.75rem |
| `--space-md` | 1.25rem |
| `--space-lg` | 2rem |
| `--space-xl` | 3.25rem |
| `--space-2xl` | 5rem |

**Rule:** every margin, padding, and gap value in new CSS must reference one of these tokens. A literal pixel or rem value in new CSS is a signal the scale is missing a step — extend the scale deliberately rather than working around it.

`--container-width` (72rem) and `--container-padding` (`--space-md`) govern all page-width content; `--radius-sm` (4px) and `--radius-md` (8px) are the only two corner-radius values in use, on buttons/small elements and cards/callouts respectively.

---

## 8. Iconography

**Current state:** the site uses text glyphs (☰ for the mobile menu, ▾ for dropdowns) rather than a dedicated icon set. This was an acceptable Phase 1 shortcut, not a permanent standard.

**Standard going forward:** a small, consistent inline-SVG icon set, single-color (inheriting `currentColor` so it follows navy/teal context automatically), line-weight matched to roughly 1.5px at a 24×24 viewBox. Icons should be used only where they clarify an action (menu, external link, dropdown chevron) — never as decoration next to a heading or as a substitute for a real photograph or illustration.

**Icons currently needed:** hamburger menu, dropdown chevron, external-link indicator (for the SeriousMD link and any future off-site link). Do not introduce icons for concepts already served by clear text labels — an icon next to "Contact" in the nav, for instance, would add visual noise without adding clarity.

Icon files follow the same naming convention as other visual assets — see Section 10.

---

## 9. Illustration Style

No illustrations exist yet. When they're introduced (see Section 17), they should follow:

- **Line-based, not filled.** Thin, consistent stroke weight (matching the `.trace-divider` motif's restraint), in navy and teal only — no additional illustration-specific palette.
- **Diagrammatic, not decorative.** Every illustration must replace prose that would otherwise be harder to follow as a bulleted list — never added purely for visual interest (see Section 17 for the specific list of candidates).
- **No people in illustrations.** Human figures, if ever needed, should be photographed (Section 10), not illustrated — mixing photographic and illustrated human figures on the same site reads as inconsistent and slightly uncanny.
- **Flat, not skeuomorphic.** No gradients, shadows, or 3D effects on illustrations — they should sit visually flush with the site's restrained aesthetic, not compete with it.

Illustration files follow the naming convention defined in Section 10 (e.g., `diagram-referral-pathway.svg`).

---

## 10. Photography Direction

**Philosophy:** authentic and specific, never stock. A photograph of this practice's actual clinical or academic environment is always preferable to a polished but generic substitute — even if the real photograph is less technically perfect.

### Standing rules for every photograph on this site
- Natural or naturalistic lighting — no harsh studio lighting, no visible flash.
- Muted, real-world backgrounds — avoid busy or brightly colored backdrops that compete with the navy/teal palette.
- Candid engagement over posed smiling-at-camera shots — the tone is "captured while working," not "portrait session."
- Patient privacy is absolute: no identifiable patient faces in any photograph, ever, regardless of consent status, unless a specific written release exists and is documented outside this repository.

### Photograph plan
1. **Professional portrait** — Home hero and About. The single non-negotiable photograph before any photography-dependent launch milestone.
2. **Consultation in progress** (patient not identifiable) — Neurogenetics Service.
3. **Teaching / lecturing** — Research Overview.
4. **Laboratory / bench work** — Research Overview.
5. **Speaking engagement or conference** *(Phase 2, optional)* — About or Research.

Target 3–5 photographs total for the current phase. More can be added later without the site becoming photo-heavy; fewer than 3 leaves the site feeling under-populated relative to the warmth the writing already establishes.

### Technical specification
- Minimum 2000px on the longest edge, delivered as optimized JPEG or WebP.
- Every photo needs a specific, descriptive `alt` attribute written for someone who cannot see it — not a generic label like "doctor photo."
- Explicit `width`/`height` (or CSS `aspect-ratio`) on every `<img>` tag to prevent layout shift.

### Image Naming Convention
Every image and illustration file committed to this repository follows a `type-context[-detail].extension` pattern — descriptive enough that a filename alone tells a future contributor what the file is and where it belongs, without needing to open it:

| Pattern | Example |
|---|---|
| `portrait-{location}` | `portrait-home.webp`, `portrait-about.webp` |
| `workflow-{topic}` | `workflow-genetic-testing.svg` |
| `diagram-{topic}` | `diagram-referral-pathway.svg` |
| `conference-{event}-{year}` | `conference-aaic-2026.webp` |
| `lab-{context}` | `lab-sequencing-bench.webp` |

Generic camera-export filenames (`IMG_2345.jpg`, `Photo1.png`) are never committed directly — rename before adding to the repository. This applies to every asset type: photographs, illustrations, icons, and any future diagram exports.

---

## 11. Component Library

Every reusable component currently in the system, with its CSS class and correct usage:

| Component | Class(es) | Use |
|---|---|---|
| Card | `.card` | Any boxed content block — service summaries, research focus areas |
| Two-column split | `.two-path-split` | Audience splits, service grids, research focus grids |
| Callout (patient) | `.callout`, `.callout--patient` | Patient-facing CTA block, rendered via `cta-patient.html` |
| Callout (physician) | `.callout`, `.callout--physician` | Physician-facing CTA block, rendered via `cta-physician.html` |
| Service page split | `.service-section`, `.service-section--patient` / `--physician` | The two-audience layout inside `service.html` |
| Credentials line | `.credentials-line` | Small-caps rendering of "MD, PhD, FPNA" wherever it appears |
| Signature divider | `.trace-divider` | One per page, marking a major structural pivot |
| Section tint | `.section--tint-navy` / `.section--tint-teal` | Background-tinted sections (Mission, Research Focus) |
| Prose measure | `.prose` / `.prose-narrow` | Capping paragraph/list width for readability |
| Plain list | `.list-plain` | Credential lists without bullet markers |
| Button row | `.button-row` / `.button-row--spaced` | Horizontal groups of buttons |
| Stacked callouts | `.cta-stack` | Vertical stack of patient + physician callouts (Home's final CTA) |
| Spacing utility | `.mt-lg` | One-off top-margin need that doesn't warrant a new component |

**Rule for new components:** before creating a new class, check whether an existing one (possibly with a new modifier) already solves the problem. The component list above should grow slowly and deliberately, not per-page.

---

## 12. Button Hierarchy

Two button styles, two meanings — never a third without a documented reason:

- **`.btn-primary`** — solid navy fill, white text. Reserved for the single most important action on a page, almost always patient-facing ("Request an appointment").
- **`.btn-secondary`** — teal outline, teal text, transparent fill. Used for the secondary action, almost always physician-facing ("Refer a patient") or a lower-priority navigational action (e.g., "View research" on About).

**Standardized wording:** the physician-facing action is always **"Refer a patient"** — this was inconsistent in early drafts ("Refer or discuss a case" appeared once) and has since been unified. Any new physician CTA must use this exact phrase unless there is a specific, documented reason to deviate.

A page should never present more than one primary button. If two actions feel equally important, one of them is actually secondary — decide which.

---

## 13. Navigation Rules

- **Single source of truth:** all navigation — header, mobile drawer, footer — renders from `_data/nav.yml`. No navigation link should ever be hardcoded directly into an include or layout.
- **The physician link is never inside a dropdown.** "For Referring Physicians" is pinned, visible at all times in the header (desktop and mobile), because a physician arriving from a colleague's referral note should never have to hunt for it.
- **Dropdowns are click/keyboard-activated, not hover-only** — this is an accessibility requirement, not a stylistic choice (see Section 14).
- **New pages are added to `_data/nav.yml` deliberately**, not automatically — a page's existence doesn't obligate it to appear in primary navigation (e.g., condition-explainer pages, once built, may live under Patient Resources without each one cluttering the top-level nav).
- **Footer navigation is a subset, not a mirror,** of primary navigation — it exists for orientation and re-entry, not full site coverage.

---

## 14. Accessibility Standards

These are requirements, not aspirations. Every new page or component must meet all of the following before it's considered complete:

- **Semantic HTML first.** `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` used for their actual structural meaning — never a `<div>` where a semantic element applies.
- **Heading order never skips a level.** h1 → h2 → h3, always, on every page. This is the single source of truth for heading structure — see also Markdown Authoring Standards (Section 20), which references this rule rather than restating it.
- **Visible keyboard focus everywhere**, via the global `:focus-visible` rule — never remove an outline without providing an equally visible replacement.
- **Keyboard-operable interactive elements.** Every dropdown, drawer, and toggle must be fully usable via keyboard alone (Tab, Enter/Space, Escape), independent of mouse or touch.
- **ARIA used to describe real state, not decorate markup.** `aria-expanded`, `aria-haspopup`, `role="menu"` reflect actual toggle state — if the JS behavior changes, the ARIA attributes must be updated in the same commit.
- **Color contrast at or above WCAG AA** (4.5:1 for normal text, 3:1 for large text) for every text/background combination — verify new color pairings before shipping, don't assume.
- **`prefers-reduced-motion` respected** for any new animation (see Section 18).
- **Every image needs a specific, meaningful `alt` attribute** — or `alt=""` if genuinely decorative, never a missing attribute.
- **External links are labeled as external** — visually or via visually-hidden text — so a screen-reader user isn't surprised by leaving the site.
- **Skip-to-content link remains functional** on every page that uses `default.html`.

---

## 15. SEO Conventions

- **Every page defines its own `title` and `description` in front matter.** No page should rely on the site-wide default — a missing per-page description is a defect, not an acceptable gap.
- **Canonical URLs are generated automatically** via `head.html`'s Liquid logic — never hardcode a canonical tag on an individual page.
- **Open Graph and Twitter Card tags** are inherited from `head.html` automatically; a page only needs to set `social_image` in front matter if it has a more specific image than the site default.
- **Structured data (`schema.org/Physician`)** lives in `head.html` site-wide. If a future page represents a more specific entity (e.g., a specific clinical service), consider whether additional page-level structured data is warranted — don't duplicate the site-wide block unnecessarily.
- **Internal linking is mandatory, not optional.** Every new page must link to at least one other relevant page, and at least one other existing page should be updated to link to it. A page with no inbound or outbound internal links is incomplete, not just a missed nicety.
- **`robots.txt` and `sitemap.xml`** are site-wide concerns (the latter auto-generated by `jekyll-sitemap`) — no per-page action needed, but both must exist before any public launch.
- **Breadcrumbs** are not yet implemented; they become worth adding once any section of the site gains real nested depth (e.g., Patient Resources → Condition Explainers → a specific condition).

---

## 16. Future Page Templates

Two layouts cover every page type the site currently needs, and should cover most of what future versions add:

### `page.html` — single-column content page
Use for: About, Contact, Research Overview, Genetic Testing Explained, and any future single-audience page (Education, a specific condition explainer, a future News post).
Front matter needs: `layout: page`, `title`, `eyebrow` (optional), `description`.

### `service.html` — two-audience split page
Use for: any page that must speak to both patients and physicians about the same underlying service. Currently: Neurogenetics Service, General Neurology.
Authoring convention: patient-facing Markdown first, then an `<!--physician-->` marker on its own line, then physician-facing Markdown. If a future page doesn't cleanly split into two audiences, it should use `page.html` instead of forcing an artificial split.

### Canonical ownership — where a recurring idea lives
When the same fact or argument is relevant to more than one page, one page owns the full version and all others link to it rather than restating it:

| Idea | Canonical home | Everyone else |
|---|---|---|
| Why genetic testing isn't one-size-fits-all | Genetic Testing Explained | Link with a one-sentence summary |
| The Philippines neurogenetics capacity-building mission | About | Link with a one- or two-sentence reference |
| Referral indications (when genetics might be relevant) | Neurogenetics Service (physician half) | General Neurology and For Referring Physicians echo the same list, don't invent a new one |
| Co-management / collaboration philosophy | For Referring Physicians, "Collaboration" section | Referenced, not re-explained, elsewhere |

Before writing a new page, check this table (and update it) rather than re-deriving the argument from scratch.

### A new page's pre-publish checklist
1. Which existing layout does this use — `page` or `service`? If neither fits, that's a signal to revisit the layout system, not to hand-rewrite structure per page.
2. Does this page restate anything covered in the canonical-ownership table above? If so, cut it and link.
3. Does it belong on this website at all, per Section 2's non-goals?
4. Is it added to `_data/nav.yml`, and does it need to be — or is it reachable only via in-content links (acceptable for deeper content)?
5. Does at least one existing page now link to it?

---

## 17. Medical Illustration Standards

Illustrations are reserved for concepts that are genuinely harder to follow as prose than as a diagram — not decoration. Candidates identified so far, to be built as the site progresses:

1. **Testing-strategy escalation** (single-gene → panel → repeat expansion → exome → genome → long-read) — Genetic Testing Explained and/or Neurogenetics Service.
2. **Consultation workflow** (history → exam → decision → testing → counseling → follow-up) — Neurogenetics Service.
3. **Neurogenetics referral pathway** (general neurology → red-flag recognition → referral → shared care) — For Referring Physicians.
4. **The integrated-care loop** (phenotype → test → interpret → counsel → integrate into management) — For Referring Physicians and/or Research.

**Standards for every medical illustration:**
- Must be reviewed for clinical accuracy before publication — a simplified diagram is acceptable, a misleading one is not.
- Must avoid implying certainty the underlying science doesn't have (e.g., a "testing escalation" diagram should not imply every case moves linearly through every step).
- Uses only navy and teal, line-based per Section 9 — no illustration should introduce a new color to signal severity or urgency (this is a calm, non-alarming site by design).
- Must include a text-equivalent nearby (the existing prose or a caption) — an illustration should support the accessible text version, never replace it entirely for screen-reader users.

---

## 18. Animation Guidelines

The current site is almost entirely static, and that's a deliberate choice, not a placeholder state. Any future animation must justify itself against this baseline:

- **`prefers-reduced-motion` must be respected without exception** — the global CSS rule already reduces all animation/transition durations to near-zero for users who request it; any new CSS must not bypass this.
- **Transitions are utilitarian, not decorative.** The only motion currently in the system is the mobile nav drawer's slide-in (`--transition-base`, 250ms) and small hover-state color transitions (`--transition-fast`, 150ms) on links and buttons. Both exist to make state changes legible, not to add visual interest.
- **No scroll-triggered reveals, no parallax, no auto-playing motion of any kind.** These read as promotional/commercial patterns that work against the site's academic-medical register.
- **If a future interactive element (e.g., an illustrated diagram with hover states) is introduced,** motion should be limited to opacity or color changes — never movement, scaling, or bouncing effects.

---

## 19. GitHub Repository Conventions

- **Branching:** direct commits to the branch GitHub Pages builds from are acceptable for a single-maintainer site at this scale; if collaborators are added later, adopt a simple feature-branch-and-merge pattern rather than working directly on the production branch.
- **Commit messages** should describe intent, not just content — "Add office hours to Contact" rather than "update contact.md."
- **`Gemfile.lock` should be committed**, not ignored, for reproducible builds across contributors and CI.
- **`.gitignore`** should include `_site/`, `.jekyll-cache/`, `.sass-cache/`, `.bundle/`, `vendor/bundle/`, and `.DS_Store`.
- **No generated files committed** — `_site/` is a build artifact and should never be checked in.
- **Images committed to the repository** should already be optimized (compressed, correctly sized) and follow the naming convention in Section 10 before committing — this is not a task to defer to a future cleanup pass.

---

## 20. Jekyll Coding Conventions

- **Front matter is the only place page-specific configuration lives.** Layout logic belongs in `_layouts/` and `_includes/`, never duplicated inline in a page's Markdown.
- **New reusable navigation, CTAs, or repeated markup patterns belong in `_includes/`,** parameterized via `include` variables — never copy-pasted across multiple pages.
- **New structured, repeatable data (a new list of items, a new set of links) belongs in `_data/`,** following the pattern already established by `nav.yml` — not hardcoded into a template.
- **CSS additions go into the correct existing file** by concern: new tokens → `variables.css`; resets/typography → `base.css`; structural/layout patterns → `layout.css`; reusable components → `components.css`. A new file should only be added if an entirely new concern emerges (e.g., a `print.css` for a future print stylesheet) — not as a place to dump miscellaneous rules.
- **No inline `style=""` attributes in content pages.** If a one-off spacing or layout need arises, either reuse an existing utility class (Section 11) or add a new one to `components.css` — inline styles were deliberately removed from every content page and should not be reintroduced.
- **Liquid logic stays minimal in content pages.** Front matter variables and `{% include %}` calls are expected; anything more complex (conditionals, loops) belongs in a layout or include, not scattered through page Markdown.
- **New layouts should extend `default.html`** (via `layout: default` in their own front matter) rather than duplicating the `<html>`/`<head>`/`<body>` shell — there should only ever be one place that shell is defined.
- **Test locally with `bundle exec jekyll serve` before pushing** any layout, include, or `_config.yml` change — these are the changes most likely to break silently across the whole site rather than a single page.

### Markdown Authoring Standards
- **One H1 per page** — the page title, set via the layout, never repeated manually in body content.
- **No skipped heading levels** — see Section 14 for the full accessibility rationale; this is the same rule, not a separate one.
- Paragraphs generally stay short — if a paragraph needs more than four or five sentences to make its point, it's usually two ideas that should be split.
- **Tables only when a genuine comparison improves understanding** (as in this document's audience and canonical-ownership tables) — not as a default formatting choice for anything list-shaped.
- **Lists for processes and enumerable items**; prose for anything that requires connecting logic (cause, contrast, sequence of reasoning) — don't flatten an argument into bullets just because it has multiple parts.
- **Avoid bolding entire paragraphs or sentences.** Bold is reserved for short labels (as in definition-style lists) — a bolded paragraph reads as shouting, not emphasis.

---

## Guiding Principle

**When in doubt, remove rather than add.**

This website earns trust through clarity, restraint, and careful curation — not through comprehensiveness. Every new page, component, or visual element should solve a demonstrated need, not simply fill available space. If a future contributor is ever unsure whether something belongs here, the answer is more often *no* than the alternative — and that instinct should be trusted, not second-guessed.

*This document should be updated whenever a genuinely new pattern is introduced — not for every individual page, but whenever a decision here would otherwise need to be re-made from scratch by whoever builds the next page.*
