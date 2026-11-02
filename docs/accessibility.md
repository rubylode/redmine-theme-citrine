# Contrast

Citrine aims at WCAG 2.2 AA in light and dark: 4.5:1 for text (3:1 for large text), and 3:1 for the parts of a control that
identify it (field borders), for focus indicators and for the status colours drawn as shapes, such as the dot beside a status name.

## How it is measured

- The page check (`npm run check`) loads 29 pages in light and dark, at 1280px and 390px wide, and measures every visible
  piece of text against the colour stacked behind it. On 2026-11-02 against Redmine 7.0.2 with the Rubylode plugins mounted it
  measured 6,240 text pairs across the 58 desktop runs and 6,488 across the 58 phone runs, and found none below AA: 116 of 116
  gated runs clean. At the 16px base size every measured pair also reaches 4.5:1, so none relies on the 3:1 allowance for large text.
- The tokens, one pair at a time, below (`tokens.css` and `dark.css`). The check skips text over a gradient or an image, and it
  does not see field borders or focus rings, so those are measured here. Chip colours are the mixes the stylesheet makes
  (`color-mix`), worked out on the colour of the row they sit on: the panel, a stripe or a hovered row. Citrine draws its stripes
  in the sunken colour. The header is a flat colour, so its text is measured on that colour.
- The figures come from a short Ruby script that reads the two token files and applies the WCAG relative luminance formula.

## Light

| Pair | Foreground | Background | Ratio |
|---|---|---|---|
| Body text on a panel | `#1d1a14` | `#ffffff` | 17.35 |
| Body text on a sunken panel or stripe | `#1d1a14` | `#f9f2df` | 15.53 |
| Body text on a hovered row | `#1d1a14` | `#fff3c4` | 15.59 |
| Body text on the page | `#1d1a14` | `#fbf6ea` | 16.09 |
| Secondary text on a panel | `#4a4234` | `#ffffff` | 9.91 |
| Secondary text on a sunken panel or stripe | `#4a4234` | `#f9f2df` | 8.87 |
| Muted text on a panel | `#675d4c` | `#ffffff` | 6.47 |
| Muted text on the page | `#675d4c` | `#fbf6ea` | 6.00 |
| Muted text on a sunken panel or stripe | `#675d4c` | `#f9f2df` | 5.79 |
| Muted text on a hovered row | `#675d4c` | `#fff3c4` | 5.81 |
| Link on a panel | `#8a5a00` | `#ffffff` | 5.93 |
| Link on the page | `#8a5a00` | `#fbf6ea` | 5.50 |
| Link on a sunken panel or stripe | `#8a5a00` | `#f9f2df` | 5.30 |
| Link on a hovered row | `#8a5a00` | `#fff3c4` | 5.33 |
| Primary button text | `#1d1a14` | `#f5be0a` | 10.12 |
| Primary button text, hovered | `#1d1a14` | `#ffd13d` | 11.93 |
| Button text | `#1d1a14` | `#ffffff` | 17.35 |
| Delete button text | `#9c2420` | `#fdebe9` | 6.79 |
| Header links | `#1d1a14` | `#fbf6ea` | 16.09 |
| Code block (kept light) | `#1d1a14` | `#f6efdc` | 15.12 |
| Closed or up message | `#1d5a33` | `#e7f4ec` | 7.24 |
| Warning message | `#5f3f00` | `#fff1c9` | 8.50 |
| Status block, up | `#1d5a33` | `#e3f2e8` | 7.08 |
| Status block, unavailable | `#6b4400` | `#fff1c9` | 7.62 |
| Tracker chip | `#6b4400` | `#fff8dc` | 8.04 |
| Initials badge, ink on the darkest fill | `#1d1a14` | `#ffe0a8` | 13.62 |
| Chip New, on a panel | `#194365` | `#dde8f1` | 8.31 |
| Chip New, on a stripe | `#194365` | `#d8ddd6` | 7.50 |
| Chip New, on a hovered row | `#194365` | `#dddec0` | 7.52 |
| Chip In Progress, on a panel | `#6e4300` | `#f4e8d6` | 7.04 |
| Chip In Progress, on a stripe | `#6e4300` | `#efddbb` | 6.38 |
| Chip In Progress, on a hovered row | `#6e4300` | `#f4dea5` | 6.42 |
| Chip Resolved, on a panel | `#1c532f` | `#deece3` | 7.39 |
| Chip Resolved, on a stripe | `#1c532f` | `#d9e1c8` | 6.68 |
| Chip Resolved, on a hovered row | `#1c532f` | `#dee2b1` | 6.71 |
| Chip Feedback, on a panel | `#50346a` | `#ebe4f2` | 8.29 |
| Chip Feedback, on a stripe | `#50346a` | `#e6d9d7` | 7.48 |
| Chip Feedback, on a hovered row | `#50346a` | `#ebdac1` | 7.51 |
| Chip Closed, on a panel | `#403b32` | `#e7e6e4` | 8.91 |
| Chip Closed, on a stripe | `#403b32` | `#e2dbc9` | 8.05 |
| Chip Closed, on a hovered row | `#403b32` | `#e7dcb2` | 8.09 |
| Chip Rejected, on a panel | `#78272d` | `#f6e1e2` | 7.89 |
| Chip Rejected, on a stripe | `#78272d` | `#f1d6c7` | 7.14 |
| Chip Rejected, on a hovered row | `#78272d` | `#f6d7b1` | 7.18 |
| Field border on a panel (control) | `#1d1a14` | `#ffffff` | 17.35 |
| Focus ring on a panel | `#8a5a00` | `#ffffff` | 5.93 |
| Focus ring on the page | `#8a5a00` | `#fbf6ea` | 5.50 |
| Status colour New (graphic), on a panel | `#2a6fa8` | `#ffffff` | 5.33 |
| Status colour In Progress (graphic), on a panel | `#b86f00` | `#ffffff` | 3.95 |
| Status colour Resolved (graphic), on a panel | `#2f8a4e` | `#ffffff` | 4.32 |
| Status colour Feedback (graphic), on a panel | `#8556b0` | `#ffffff` | 5.31 |
| Status colour Rejected (graphic), on a panel | `#c8414b` | `#ffffff` | 4.87 |

## Dark

| Pair | Foreground | Background | Ratio |
|---|---|---|---|
| Body text on a panel | `#f7f2e4` | `#26231b` | 14.03 |
| Body text on a sunken panel or stripe | `#f7f2e4` | `#2c281f` | 13.13 |
| Body text on a hovered row | `#f7f2e4` | `#3a3012` | 11.65 |
| Body text on the page | `#f7f2e4` | `#1c1a15` | 15.54 |
| Secondary text on a panel | `#e8e1d0` | `#26231b` | 12.04 |
| Secondary text on a sunken panel or stripe | `#e8e1d0` | `#2c281f` | 11.26 |
| Muted text on a panel | `#b6ab94` | `#26231b` | 6.90 |
| Muted text on the page | `#b6ab94` | `#1c1a15` | 7.65 |
| Muted text on a sunken panel or stripe | `#b6ab94` | `#2c281f` | 6.46 |
| Muted text on a hovered row | `#b6ab94` | `#3a3012` | 5.74 |
| Link on a panel | `#ffd13d` | `#26231b` | 10.79 |
| Link on the page | `#ffd13d` | `#1c1a15` | 11.95 |
| Link on a sunken panel or stripe | `#ffd13d` | `#2c281f` | 10.09 |
| Link on a hovered row | `#ffd13d` | `#3a3012` | 8.96 |
| Primary button text | `#1d1a14` | `#f5be0a` | 10.12 |
| Primary button text, hovered | `#1d1a14` | `#ffd13d` | 11.93 |
| Button text | `#f7f2e4` | `#26231b` | 14.03 |
| Delete button text | `#ffaea5` | `#42221f` | 8.01 |
| Header links | `#f7f2e4` | `#1c1a15` | 15.54 |
| Code block (kept light) | `#1d1a14` | `#f6efdc` | 15.12 |
| Closed or up message | `#c2f0d2` | `#173d27` | 9.63 |
| Warning message | `#ffe9a8` | `#4a3a0a` | 9.19 |
| Status block, up | `#8fe0ad` | `#173d27` | 7.75 |
| Status block, unavailable | `#ffd13d` | `#4a3a0a` | 7.60 |
| Tracker chip | `#ffe27a` | `#3a3012` | 10.18 |
| Initials badge, ink on the darkest fill | `#1d1a14` | `#ffe0a8` | 13.62 |
| Chip New, on a panel | `#b9d6f2` | `#3b464c` | 6.45 |
| Chip New, on a stripe | `#b9d6f2` | `#404a4f` | 6.04 |
| Chip New, on a hovered row | `#b9d6f2` | `#4b5045` | 5.51 |
| Chip In Progress, on a panel | `#ffe694` | `#5a4d23` | 6.74 |
| Chip In Progress, on a stripe | `#ffe694` | `#5f5126` | 6.32 |
| Chip In Progress, on a hovered row | `#ffe694` | `#69571c` | 5.70 |
| Chip Resolved, on a panel | `#a7e5bc` | `#344c35` | 6.53 |
| Chip Resolved, on a stripe | `#a7e5bc` | `#385038` | 6.14 |
| Chip Resolved, on a hovered row | `#a7e5bc` | `#43562e` | 5.59 |
| Chip Feedback, on a panel | `#decbf2` | `#4c414c` | 6.43 |
| Chip Feedback, on a stripe | `#decbf2` | `#50454f` | 6.04 |
| Chip Feedback, on a hovered row | `#decbf2` | `#5b4b45` | 5.49 |
| Chip Closed, on a panel | `#a7e5bc` | `#344c35` | 6.53 |
| Chip Closed, on a stripe | `#a7e5bc` | `#385038` | 6.14 |
| Chip Closed, on a hovered row | `#a7e5bc` | `#43562e` | 5.59 |
| Chip Rejected, on a panel | `#ffc1bd` | `#5a3d35` | 6.32 |
| Chip Rejected, on a stripe | `#ffc1bd` | `#5f4138` | 5.92 |
| Chip Rejected, on a hovered row | `#ffc1bd` | `#69472e` | 5.36 |
| Field border on a panel (control) | `#f7f2e4` | `#26231b` | 14.03 |
| Focus ring on a panel | `#ffd13d` | `#26231b` | 10.79 |
| Focus ring on the page | `#ffd13d` | `#1c1a15` | 11.95 |
| Status colour New (graphic), on a panel | `#7fb4e8` | `#26231b` | 7.17 |
| Status colour In Progress (graphic), on a panel | `#ffd13d` | `#26231b` | 10.79 |
| Status colour Resolved (graphic), on a panel | `#5fcf86` | `#26231b` | 8.03 |
| Status colour Feedback (graphic), on a panel | `#c3a0e8` | `#26231b` | 7.11 |
| Status colour Rejected (graphic), on a panel | `#ff8f87` | `#26231b` | 7.12 |

## Not covered

- Redmine's own avatar colours with white initials: the three that fall below 4.5:1 (red, orange, pink) are darkened; the rest
  are Redmine's.
- Syntax highlighting inside code blocks is Redmine's, made for a light background, which is why code blocks stay light in dark mode.
- The round initials in issue lists carry dark text on light fills in both modes, and hide from screen readers; the assignee name stays in the page.
- Colour is never the only signal: the status chip carries its name, and a closed issue in the to-do list also has a tick and a strike through.
