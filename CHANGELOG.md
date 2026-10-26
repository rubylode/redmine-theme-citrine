# Changelog

All notable changes to this theme. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Citrine: cream paper, a serif title, thick ink borders with an offset shadow, and amber, in the Open Color variables Redmine 7 is built on.
- Pill tabs for the general links across the top, a centred project title with search and project jump under it, the project menu as a row of chunky tiles (amber when selected), and the page and sidebar as bordered cards in one centred column. All plain CSS; the administration menu stays on the left on every admin page.
- The issue list reads as a to-do list: a big round check before each subject (filled amber and ticked when the issue is closed), a chip around the tracker and round initials for the assignee. The chips and initials come from one small script, `javascripts/theme.js`, which only reads the page.
- Activity is a feed with a serif date and dashed lines.
- Paper stripes and dashed column lines in tables, a dashed issue card, pill buttons with an offset shadow, a login card.
- A dark set for the system dark setting, in one block at the end of the stylesheet.
- The theme skeleton, the demo Redmine, the page check, the screenshot script and the recorder.
- Tested on Redmine 7.0.2 and the 7.0 line, in light and dark, at desktop and phone width: no console errors, no failed requests, no sideways scrolling, and text at AA contrast on the pages that matter, including the wiki, the activity page and the Rubylode to-do page.
