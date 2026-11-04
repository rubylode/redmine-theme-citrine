# Rubylode Citrine for Redmine

<p><img src="docs/thumbnail.png" alt="Rubylode Citrine theme" width="160"></p>

[![check](https://img.shields.io/github/actions/workflow/status/rubylode/redmine-theme-citrine/check.yml?branch=main&label=check)](https://github.com/rubylode/redmine-theme-citrine/actions/workflows/check.yml)
[![security](https://img.shields.io/github/actions/workflow/status/rubylode/redmine-theme-citrine/security.yml?branch=main&label=security)](https://github.com/rubylode/redmine-theme-citrine/actions/workflows/security.yml)
[![version](https://img.shields.io/github/v/tag/rubylode/redmine-theme-citrine?sort=semver&label=version)](https://github.com/rubylode/redmine-theme-citrine/tags)
[![license](https://img.shields.io/github/license/rubylode/redmine-theme-citrine)](https://github.com/rubylode/redmine-theme-citrine/blob/main/LICENSE)
![Redmine](https://img.shields.io/badge/Redmine-7.0-b22222)

A warm theme for Redmine 7 and up: cream paper and amber, thick ink outlines with hard offset shadows, serif titles and a to-do list look in the issue list.

It is plain CSS plus one small script (`javascripts/theme.js`), with no plugin, no build step and no change to Redmine itself.
The script only reads the page: it puts a status dot beside the group name in an issue list grouped by status, gives the top bar a
shadow once the page scrolls, and adds round initials beside the assignee and a chip around the tracker name in issue lists.
Without it the theme still works, with plainer lists. The dark set follows your system setting (see [Dark mode](#dark-mode)).
It is built on the shared Rubylode theme base, which also gives it the pages and plugin blocks listed below.

![A walk through Rubylode Citrine: the project, the issue list, an issue, the wiki, the to-do page and the new issue form](docs/demo/walkthrough-light.gif)

| | |
|---|---|
| ![The issue list](docs/screenshots/issues-light.png) | ![An issue](docs/screenshots/issue-light.png) |
| ![The new issue form](docs/screenshots/new-issue-light.png) | ![The project overview, with the Rubylode Projects plugin](docs/screenshots/project-light.png) |
| ![The projects list, with the Rubylode Projects plugin](docs/screenshots/projects-light.png) | ![The home page, with the Rubylode Home plugin](docs/screenshots/home-light.png) |
| ![My page, with the Rubylode Home plugin](docs/screenshots/my-page-light.png) | ![A status block, with the Rubylode Uptime Kuma plugin](docs/screenshots/service-status-light.png) |
| ![The Stats page, with the Rubylode Stats plugin](docs/screenshots/stats-light.png) | ![Sign in](docs/screenshots/login-light.png) |

Dark mode:

![A walk through Rubylode Citrine in dark mode](docs/demo/walkthrough-dark.gif)

| | |
|---|---|
| ![The issue list in dark mode](docs/screenshots/issues-dark.png) | ![An issue in dark mode](docs/screenshots/issue-dark.png) |
| ![The new issue form in dark mode](docs/screenshots/new-issue-dark.png) | ![The project overview in dark mode](docs/screenshots/project-dark.png) |
| ![The projects list in dark mode](docs/screenshots/projects-dark.png) | ![The home page in dark mode](docs/screenshots/home-dark.png) |
| ![My page in dark mode](docs/screenshots/my-page-dark.png) | ![A status block in dark mode](docs/screenshots/service-status-dark.png) |
| ![The Stats page in dark mode](docs/screenshots/stats-dark.png) | ![Sign in in dark mode](docs/screenshots/login-dark.png) |

The screenshots come from the demo Redmine in this repository; the people, projects and issues in it are made up.

## Contents

- [What it looks like](#what-it-looks-like)
- [Install](#install)
- [What is covered](#what-is-covered)
- [Rubylode plugins](#rubylode-plugins)
- [Customising](#customising)
- [Fonts](#fonts)
- [Dark mode](#dark-mode)
- [Accessibility](#accessibility)
- [Compatibility](#compatibility)
- [Development](#development)
- [Checks and releases](#checks-and-releases)
- [License](#license)

## What it looks like

- Cream paper for the page, with the content in white cards that have a 2px ink outline and a hard offset shadow, in one centred column.
- The global links across the top bar, with the search, the project switcher and your avatar. A pill fills with ink when you point at a link.
- The project name in a serif face, and its menu as a row of chunky tiles with an outline and an offset shadow, amber when selected. The tiles wrap onto a second row when they do not fit.
- Titles, card headings and wiki headings are serif. Table headings are small upper-case labels.
- The issue list reads as a to-do list: a round check before each subject, filled amber and ticked when the issue is closed, with the subject struck through.
  The tracker sits in a chip and the assignee is a round badge with their initials (the name is its tooltip).
- Tables have a dashed rule, faint paper stripes and dashed column lines. The issue is a dashed card inside the page card.
- Buttons are pills with an outline and a small offset shadow; the primary one is amber with ink text. Fields have a 2px ink border.
- The phone slide-out menu is dark, in light mode too.

## Install

1. Download the zip attached to the latest release (the Releases page of this repository) and unzip it inside the `themes` folder of your Redmine, so that `themes/citrine/stylesheets/application.css` exists. Or clone this repository and copy (or link) its `citrine` folder into `themes/`.
2. Restart Redmine.
3. In Administration, Settings, Display, choose **Rubylode Citrine** as the theme and save.

To go back, choose another theme on the same page. Nothing is written to the database apart from that setting.

The theme folder holds the stylesheets, `javascripts/theme.js`, the Noto Sans fonts and a small mark for the top bar.

## What is covered

The page check loads these pages, in light and dark, at desktop and phone width: sign in, the home page, the project
overview (Redmine's own and the Rubylode Projects plugin's), the projects list, the issue list (plain and grouped), activity, the
roadmap, an issue, an issue with subtasks, a child issue, the edit and new issue forms, the to-do page, the Stats page, the pages
of the four status plugins, My page (Redmine's own and the Rubylode Home plugin's), a wiki page and its editor, spent time, Gantt,
the calendar, project settings and administration.
Flash messages, tabs, the right-click menu, dropdowns, pagination, the text editor and the phone slide-out menu are styled as well.

<!-- rubylode-plugins:start -->
## Rubylode plugins

Rubylode Citrine styles the Rubylode plugins' blocks natively. Each plugin draws with its own CSS custom properties, and one section of the
theme, `citrine/stylesheets/plugins.css`, points them at Rubylode Citrine's tokens, so the blocks follow the theme in light and dark:

- [Rubylode Projects](https://github.com/rubylode/redmine-rubylode-projects) (`--rubylode-projects-*`): the overview cards and the projects list.
- [Rubylode Home](https://github.com/rubylode/redmine-rubylode-home) (`--rubylode-home-*`): My page and the welcome page.
- [Rubylode To-do](https://github.com/rubylode/redmine-rubylode-todo) (`--todo-*`): the to-do page.
- [Rubylode Uptime Kuma](https://github.com/rubylode/redmine-rubylode-uptime-kuma) (`--rubylode-uptime-kuma-*`),
  [Rubylode GlitchTip](https://github.com/rubylode/redmine-rubylode-glitchtip) (`--rubylode-glitchtip-*`),
  [Rubylode Windmill](https://github.com/rubylode/redmine-rubylode-windmill) (`--rubylode-windmill-*`) and
  [Rubylode Beszel](https://github.com/rubylode/redmine-rubylode-beszel) (`--rubylode-beszel-*`): the status blocks.
- [Rubylode Stats](https://github.com/rubylode/redmine-rubylode-stats) (`--stats-tooltip-*`): the chart tooltip.
- [Rubylode New issue button](https://github.com/rubylode/redmine-rubylode-new-issue-button): a rounded primary button beside the search.
  Plugins load their stylesheets after the theme's, so these rules start with `body #header` to win whatever the order.

None of them is needed. Without a plugin its rules match nothing.
<!-- rubylode-plugins:end -->

## Customising

Every colour, corner, shadow, font and a few sizes are custom properties in `citrine/stylesheets/tokens.css` (light values) and
`citrine/stylesheets/dark.css` (dark values). Change them there, or override them from a stylesheet of your own. The names
start with `--theme-` and are the same in every Rubylode theme. The main ones:

| Token | What it is |
|---|---|
| `--theme-page`, `--theme-surface`, `--theme-surface-sunken`, `--theme-surface-hover` | the paper, the cards, the stripes, hovered rows |
| `--theme-line`, `--theme-line-soft`, `--theme-line-strong` | the tan dashed rules, column lines, the ink of the outlines and field borders |
| `--theme-ink`, `--theme-ink-soft`, `--theme-ink-muted` | text, secondary text, labels and notes |
| `--theme-accent-0` to `--theme-accent-9` | the amber ramp; `--theme-link`, `--theme-primary` and Redmine's blue ramp point into it |
| `--theme-secondary`, `--theme-tertiary` and their `-pale` twins | the lilac in selections, the coral in search highlights |
| `--theme-primary-background`, `--theme-header-background` | the primary button and the top bar |
| `--theme-status-new`, `-in-progress`, `-resolved`, `-feedback`, `-closed`, `-rejected` | status colours, by Redmine's default status ids 1 to 6 |
| `--theme-success`, `--theme-warning`, `--theme-danger`, `--theme-danger-strong` | meaning colours |
| `--theme-radius-small`, `--theme-radius`, `--theme-radius-panel`, `--theme-radius-pill` | corners of fields, tiles, cards and pills |
| `--theme-border-width`, `--theme-border-style`, `--theme-density` | table rules (dashed), and the height of table rows and list items |
| `--theme-shadow-card`, `--theme-shadow-popup`, `--theme-shadow-primary-button` | the hard offset shadows |
| `--theme-font-size` | the size of running text (16px); every other text size follows it |
| `--theme-font`, `--theme-font-monospace`, `--theme-title-font`, `--theme-title-weight` | the text, code and heading fonts |
| `--theme-tracker-chip-background`, `--theme-tracker-chip-ink`, `--theme-initials-tone-0` to `-5` | Citrine's own: the tracker chip and the six colours of the assignee initials |

The rest (messages, avatars, diffs, the Gantt chart, the header heights, the icons drawn in the stylesheet) are listed with a
comment each in `tokens.css`.

What the tokens cannot say is in `citrine/stylesheets/flourishes.css`: the 2px outlines and offset shadows, the tile tabs, the
to-do check in the issue list, the tracker chip and the initials, and the dark phone menu. The initials and the chip come from
`javascripts/theme.js`.

Status and tracker looks are matched by Redmine's default ids (statuses 1 New to 6 Rejected, trackers 1 Bug to 3 Support). If
yours differ, change the ids in the "issue list" section of `citrine/stylesheets/structure.css`.

## Fonts

Citrine ships its own text fonts, so text looks the same on every system and nothing is loaded from another site: Noto Sans for
text and Noto Sans Mono for code, as woff2 files in `citrine/fonts/` (latin and latin-ext). Both are under the SIL Open
Font License 1.1; the licence texts are in the same folder. A browser downloads a file only when a page uses it. Titles use a
serif from the system (Iowan Old Style, Palatino or Georgia), so no file ships for them. To use other fonts, change
`--theme-font`, `--theme-font-monospace` and `--theme-title-font` in `citrine/stylesheets/tokens.css`. The size of running text is
`--theme-font-size` (16px), and every other text size follows it.

## Dark mode

Dark mode follows your system setting (`prefers-color-scheme`): warm charcoal paper with cream ink and outlines, and a lighter
amber for links. The primary button stays amber with ink text. Code blocks stay light, since Redmine's syntax colours are made
for a light background. To keep Citrine light-only, remove the line `@import url(dark.css);` from
`citrine/stylesheets/responsive.css`; every dark value is in that one file, apart from a few rules in `flourishes.css`.

## Accessibility

Text and controls meet WCAG AA in both modes. The page check measures every visible text against the colour behind it on every
page; the tokens were also measured one by one, including the parts the check cannot see (field borders, focus rings, the
status colours drawn as shapes). The measured ratios are in [docs/accessibility.md](docs/accessibility.md). In short: body text at
least 15.5:1 in light and 11.6:1 in dark, muted text at least 5.8:1 and 5.7:1, links at least 5.3:1 and 9.0:1, ink on the primary
10.1:1, every status chip at least 6.4:1 in light and 5.4:1 in dark.

## Compatibility

Redmine 7.0 and newer. Tested on 7.0.2, from both the `7.0.2` and the `7.0` image tags (on 2026-11-02 the 7.0 line was at 7.0.2).
Older versions are not expected to work: Redmine 7 reads a theme from `themes/<name>` and is built on the Open Color variables
this theme remaps.

Browsers: current Chrome, Edge, Firefox and Safari. The theme uses `:has()` and `color-mix()` (Chrome 111, Firefox 121,
Safari 16.4 and newer); an older browser shows plainer status chips and keeps the rest.

## Development

You need Docker, Ruby, Node and Chrome.

```
npm install
ruby bin/demo up        # a throwaway Redmine with demo data at http://localhost:3104 (admin / admin)
npm run check           # loads every page in light and dark, at desktop and phone width
npm run screenshots     # docs/screenshots
npm run record          # docs/demo, a GIF of a walk through the pages
ruby bin/demo reset     # wipe the demo
```

If copies of the Rubylode plugins listed above sit next to this repository (`../redmine-rubylode-todo` and so on, or in a folder
named in `RUBYLODE_PLUGINS_DIR`), the demo mounts them and the check, screenshots and recording show their pages. The demo points
the status plugins at an address where nothing answers, so their pages show the "unavailable" state. Without the plugins the
demo is plain Redmine, and the check skips their pages.

The stylesheets other than `flourishes.css`, `javascripts/theme.js`, `test/`, `bin/demo` and `docker-compose.yml` are generated from
the base all Rubylode themes share, so a fix there reaches every theme. If you send a change to one of them, I will carry it over to the base.

The check fails on console errors, failed requests, sideways scrolling and text below WCAG AA contrast. `REDMINE_TAG=7.0 ruby bin/demo up`
runs it against another Redmine version. After you change a stylesheet, run `ruby bin/demo restart` and reload: Redmine caches theme
files until it restarts.

## Checks and releases

Every push starts a real Redmine from its Docker image (7.0.2 and the 7.0 line), loads every page of the theme in light and dark at desktop and phone width, and fails on console errors, failed requests, sideways scrolling and low text contrast. On GitHub that is `.github/workflows/check.yml`, on GitHub's own runners, and it also runs on pull requests. On a self-hosted Gitea it is `.gitea/workflows/check.yml`, which runs only on pushes to `main`, because that runner works on the host with Docker access and must only run code that is already merged.

A tag such as `v2.0.0` runs the same check, builds `citrine-<version>.zip` holding the theme folder, and attaches it to a release with the matching section of `CHANGELOG.md` as its notes (`release.yml` in the same folders). The tag needs a section for that version in the changelog. More on both, and on the drift check against the shared base, in [docs/ci.md](docs/ci.md).

## License

GPL version 2 or later, the same as Redmine. See `LICENSE`. Copyright (C) 2026  Nick Gorbikoff.

No warranty, as the GPL says. Try it on a copy of your tracker before the real one.
