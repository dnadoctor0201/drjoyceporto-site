# Changelog

All notable changes to drjoyceporto.com are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), adapted for a long-lived academic medical website rather than a software application: entries describe *what* changed for a visitor or contributor, not internal implementation detail. This project adheres to [Semantic Versioning](https://semver.org/).

**This file is not the same as the Design Decision Log** in `DESIGN_SYSTEM.md`. The Decision Log explains *why* a governing design or architectural choice was made and is meant to be read occasionally, in full. This file explains *what* changed between releases and is meant to be scanned, one version at a time.

---

## Versioning Policy

This site uses Semantic Versioning (`MAJOR.MINOR.PATCH`), adapted from software conventions to fit a content-driven website:

- **MAJOR** (e.g., `2.0.0`) — a significant change to the site's capabilities, architecture, or user experience. Examples: a working patient intake system, a secure physician referral portal.
- **MINOR** (e.g., `1.1.0`) — new sections, pages, or features that expand the site while preserving everything that already works. Examples: a Publications section, an Education section, a new interactive tool.
- **PATCH** (e.g., `1.0.1`) — fixes, editorial refinements, accessibility or SEO improvements, and styling adjustments that don't change what the site *does*, only how well it does it.

Version numbers here should match Git tags/releases in the repository — a version documented in this file without a corresponding tag, or vice versa, is a sign the two have drifted and should be reconciled.

---

## [Unreleased]

Nothing currently staged beyond what's listed under Known Limitations for `1.0.0`.

---

## [1.0.0] — 2026-07-05

Initial public release: the complete Phase 1 site, built on a shared Jekyll architecture, with its governing Design System established alongside it.

### Added
- Eight Phase 1 pages: Home, About, Neurogenetics Service, General Neurology, For Referring Physicians, Genetic Testing Explained, Research Overview, and Contact.
- Shared Jekyll architecture: two content layouts (`page`, `service`), reusable includes (site head, header, navigation, footer, patient and physician call-to-action callouts), and a single data-driven navigation source (`_data/nav.yml`).
- `DESIGN_SYSTEM.md` (v1.1) — the site's Brand Style Guide and governing reference for writing, visual design, components, accessibility, SEO, and repository conventions.
- Accessibility baseline: skip-to-content link, visible keyboard focus states throughout, ARIA-managed mobile navigation drawer and dropdown menu, semantic landmark structure, and respect for reduced-motion preferences.
- SEO foundation: unique per-page titles and meta descriptions, canonical URLs, Open Graph and Twitter Card tags, `schema.org/Physician` structured data, and sitemap generation via the `jekyll-sitemap` plugin.
- Responsive navigation, including a keyboard- and touch-accessible mobile drawer and "Clinical Services" dropdown.
- GitHub Pages–compatible build configuration (`Gemfile`, `_config.yml`).
- Homepage section, "Could Genetics Play a Role?" — a self-identification list of common referral scenarios linking to the Neurogenetics Service page.
- Contact page sections for clinic locations, office hours, and a map embed (currently placeholders; see Known Limitations).

### Improved
- Homepage repositioned to lead with general adult neurology, presenting neurogenetics as an area of expertise rather than the practice's sole focus.
- Homepage patient pathway broadened so general-neurology visitors and genetics-specific visitors are addressed with equal weight, rather than the earlier genetics-forward framing.
- Physician-facing call-to-action wording standardized to "Refer a patient" across every page.
- One-off inline styles across all content pages replaced with a shared set of reusable CSS utility classes (`.prose`, `.button-row`, `.cta-stack`, `.section--tint-navy`/`--tint-teal`, and others), consolidated in `components.css` and `layout.css`.
- Full editorial and UX consistency pass across all eight pages, following a formal review against the site's stated tone and audience goals.

### Fixed
- Removed a duplicated explanation of "why genetic testing is not one-size-fits-all," previously present on both the Neurogenetics Service and Genetic Testing Explained pages. The full explanation now lives only on Genetic Testing Explained; Neurogenetics Service links to it.
- Removed duplicated discussion of the Philippines neurogenetics capacity-building mission, previously repeated in full across Home, About, and Research Overview. The full account now lives only on About; the other two pages reference it briefly and link there.
- Removed a sentence repeated twice within the same page ("co-management is welcomed") on For Referring Physicians.
- Added a plain statement that testing strategy, turnaround time, and estimated cost are discussed individually during consultation — closing a gap identified during editorial review without introducing pricing or insurance information.

### Known Limitations
- Publications section reserved for a future release; no publication list is yet published.
- Education & Teaching section reserved; not yet built.
- Condition explainer pages (individual disease pages under Patient Resources) not yet built.
- Patient intake form not yet implemented — Contact currently states this directly rather than presenting a non-functional form.
- Physician referral portal planned for a future release.
- Photography assets not yet in place; no portrait or supporting photographs are currently published on the site.
- Certain launch assets are pending: favicon, Open Graph social preview image, `robots.txt`, a custom 404 page, and `.gitignore`.
- Contact page's clinic location, office hours, and secretary phone number fields are currently bracketed placeholders pending real information.

---

[Unreleased]: https://github.com/REPLACE-WITH-ORG/drjoyceporto-site/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/REPLACE-WITH-ORG/drjoyceporto-site/releases/tag/v1.0.0
