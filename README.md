# drjoyceporto.com

Source for the professional website of Dr. Kristine Joyce L. Porto, MD, PhD, FPNA —
neurologist and neurogeneticist. Static site built with Jekyll for GitHub Pages.

## Status

**Phase 1 skeleton.** The shared architecture (layouts, includes, data,
CSS, JS) is built. Individual pages are being added on top of it.

Phase 1 page scope: Home, About, Neurogenetics Service, General Neurology,
For Referring Physicians, Genetic Testing Explained, Research Overview, Contact.

Reserved for Phase 2 (folders/routes exist, not yet linked in navigation):
Education & Teaching, full Publications list, Condition Explainers library,
News/Blog, Patient Intake Form, Physician Referral Portal.

## Repository documentation

- **`DESIGN_SYSTEM.md`** — the governing Brand Style Guide: writing style,
  visual design, components, accessibility, SEO, and repository conventions.
  Read this before adding any new page, component, or piece of copy.
- **`CHANGELOG.md`** — what changed between releases, following
  [Keep a Changelog](https://keepachangelog.com/) and
  [Semantic Versioning](https://semver.org/). Update this file, not
  `DESIGN_SYSTEM.md`'s Decision Log, when shipping a new version.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Folder structure

```
_config.yml          Site settings, defaults, plugins
Gemfile              Ruby dependencies (matches GitHub Pages' build environment)

_layouts/
  default.html        Base HTML shell — every page passes through this
  page.html            Single-column content page (About, Contact, etc.)
  service.html         Two-audience layout: patient summary + physician detail

_includes/
  head.html            <head> — meta tags, SEO, Open Graph, CSS links
  header.html           Site brand + nav toggle
  nav.html               Primary navigation, rendered from _data/nav.yml
  footer.html           Footer nav + credentials line
  cta-patient.html      Reusable "Request an appointment" callout
  cta-physician.html    Reusable "Refer a patient" callout

_data/
  nav.yml              Single source of truth for navigation —
                       edit this file, not header/footer HTML, to
                       add or reorder pages

assets/
  css/
    variables.css       Design tokens: color, type, spacing, radius
    base.css            Reset + typography defaults + focus states
    layout.css          Header, footer, nav, containers, page structure
    components.css      Buttons, cards, callouts, service split
  js/
    nav.js              Mobile drawer toggle + accessible dropdown
  images/
    portrait/ icons/ og/

index.md               Placeholder homepage (confirms the skeleton renders)
```

## How new pages should work

**Standard content page** (About, Contact, Research Overview, Genetic
Testing Explained):

```yaml
---
layout: page
title: "About"
eyebrow: "Background"
description: "One-sentence summary for SEO and the page header."
---
Page content in Markdown goes here.
```

**Service page** (Neurogenetics Service, General Neurology) — write the
patient-facing content first, then a `<!--physician-->` marker on its
own line, then the physician-facing content:

```yaml
---
layout: service
title: "Neurogenetics Service"
patient_cta_url: "/contact/"
physician_cta_url: "/for-physicians/"
---
Patient-facing content in plain language.

<!--physician-->

Physician-facing clinical detail.
```

If the `<!--physician-->` marker is omitted, the whole page renders in
the patient-facing section — nothing breaks.

## Adding a nav item

Edit `_data/nav.yml` only. Header, mobile drawer, and footer all read
from that one file.


## Deployment

Push to the branch GitHub Pages is configured to build from. The
`CNAME` file (to be added when the domain is pointed at GitHub Pages)
should contain exactly: `drjoyceporto.com`
