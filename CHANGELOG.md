# Changelog

Notable changes to this theme. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
