# Changelog

Notable changes to this theme. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.0.1] - 2026-11-02

### Added

- The theme defines the chart colour tokens the Stats plugin reads.

## [2.0.0] - 2026-11-02

### Changed

- The theme is built on the shared Rubylode theme base. The stylesheets, `javascripts/theme.js`, `test/`, `bin/demo` and `docker-compose.yml` are generated from it, and a drift check compares them with the base.
- `application.css` is now a small file that loads Redmine's own stylesheet, then `tokens.css`. `responsive.css` loads `structure.css`, `plugins.css`, `dark.css` and `flourishes.css`.
- The dark set moved from the end of `application.css` to `dark.css`. To keep the theme light-only, remove its import from `responsive.css`.
- Colours, corners, fonts and sizes are `--theme-*` tokens, with the same names in every Rubylode theme. Custom overrides that used the old names need the new ones (see the table below).
- The text font is Noto Sans and the code font Noto Sans Mono, both shipped in `citrine/fonts/`. The Inter stack of 1.0.0 is dropped. Titles keep the system serif.
- The base text size is 16px and every other size follows the token `--theme-font-size`. Lists, labels, fields and buttons are larger than in 1.0.0.
- The header is two rows from the base: the global links, the search, the project switcher and the account in the top bar, and the project name beside its tiles below. In 1.0.0 the project name was centred over the search and the tiles. The project name is smaller than before.
- The project tiles wrap onto a second row when they do not fit, as in 1.0.0, so every tab is in reach.
- The administration menu is in the right-hand sidebar, where Redmine puts it. In 1.0.0 it was moved to the left.
- The amber step 6 is `#9c6700`, darker than the `#c58a00` of 1.0.0, so text and borders in it reach AA.
- The issue card has a 4px edge in the status colour as well as its dashed outline.
- Activity entries sit in one dashed card per day, with the serif date on top, instead of one feed.
- Status chips in the issue list, the priority arrow, the sign-in card, flash messages, tabs, pagination and the text editor follow the base, so they differ in small ways from 1.0.0.
- The page check covers 29 pages instead of 17, and the demo mounts every Rubylode plugin it finds.
- The workflows and `docs/ci.md` match the other Rubylode themes: manual runs only on `main`, and a release job that runs after the check job.

### Added

- Styles for the pages 1.0.0 did not cover: the roadmap, subtasks and child issues, the Gantt chart, the calendar, spent time, project settings, administration and the wiki editor.
- The Rubylode plugins' blocks take the theme's colours: Projects, Home, To-do, Uptime Kuma, GlitchTip, Windmill, Beszel, Stats and the New issue button.
- A status dot beside the group name in an issue list grouped by status, and a shadow under the top bar once the page scrolls.
- A small mark in the top bar.
- The tracker chip and the round assignee initials of 1.0.0 now come from the theme's own part of `javascripts/theme.js`. The six colours of the initials are `--theme-initials-tone-*` tokens.
- `docs/accessibility.md` with the measured contrast ratios in light and dark.
- Screenshots and walkthroughs from the new demo data, with the plugin pages in them.
- Tested on Redmine 7.0.2 and the 7.0 line: 116 of 116 gated page runs in light, dark and phone width, with no console errors, no failed requests, no sideways scrolling and text at AA contrast.

### Removed

- The wiki and to-do screenshots; the walkthrough still shows both pages.

### Token names

| 1.0.0 | 2.0.0 |
|---|---|
| `--citrine-paper` | `--theme-page` |
| `--citrine-card` | `--theme-surface` |
| `--citrine-ink` | `--theme-ink` |
| `--citrine-line` | `--theme-line-strong` |
| `--citrine-amber-0` to `--citrine-amber-8` | `--theme-accent-0` to `--theme-accent-8` |
| `--citrine-serif` | `--theme-title-font` |
| `--citrine-chip` | `--theme-tracker-chip-background` |
| `--citrine-chip-ink` | `--theme-tracker-chip-ink` |
| `--citrine-phone-menu` | `--theme-phone-menu-background` |
| `--citrine-phone-menu-ink` | `--theme-phone-menu-ink` |
| `--fonts-main` | `--theme-font` |
| `--oc-gray-0` to `--oc-gray-9` | `--theme-neutral-0` to `--theme-neutral-9` |
| `--color-top-menu-background`, `--color-header-background` | `--theme-header-background` |

## [1.0.0] - 2026-10-26

### Added

- Citrine theme: cream paper, a serif title, thick ink borders with an offset shadow, and amber. It remaps the Open Color variables Redmine 7 is built on.
- Pill tabs for the general links, a centred project title with search and project jump under it, the project menu as a row of tiles (amber when selected), and the page and sidebar as bordered cards in one centred column. The administration menu stays on the left on admin pages.
- The issue list reads as a to-do list: a round check before each subject (filled amber and ticked when the issue is closed), a chip around the tracker and round initials for the assignee. `javascripts/theme.js` adds the chips and initials. It only reads the page.
- Activity is a feed with a serif date and dashed lines.
- Paper stripes and dashed column lines in tables, a dashed issue card, pill buttons with an offset shadow and a login card.
- A dark set for the system dark setting, in one block at the end of the stylesheet.
- The demo Redmine, the page check, the screenshot script and the recorder.
- Tested on Redmine 7.0.2 and the 7.0 line, in light and dark, at desktop and phone width. No console errors, failed requests or sideways scrolling, and text at AA contrast on the pages checked, including the wiki, the activity page and the to-do page.
