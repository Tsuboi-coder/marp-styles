# Design guide

## Theme 1 Base frame

`theme1_base` follows a restrained editorial hierarchy:

1. page title at the upper left;
2. content in the central reading area;
3. a small deck label (`header`) and presenter/date (`footer`) at the lower left;
4. page number at the lower right.

Ordinary page titles use type and whitespace only; do not add a decorative
leading rule. Covers use a restrained color gradient, while section dividers
use a pale accent wash and a single edge rule so that transitions remain visible
without competing with the talk content.

The page heading uses `Hiragino Sans W7` when available. The smaller section
label uses `Hiragino Kaku Gothic ProN W6`; synthetic bolding is disabled for
both. Blue is the default palette, with red, green, yellow, and purple switches.

Theme 1 uses `--theme1-*` tokens. The older `base-design` compatibility theme
continues to expose `--lt-*` tokens for existing decks and for `theme2_lin`.

## Compatibility tokens

| Current/prototype token | Public token | Meaning |
|---|---|---|
| `--ink`, `--theme-text`, `--formal-text` | `--lt-ink` | primary text |
| `--muted`, `--theme-muted`, `--formal-muted` | `--lt-muted` | secondary text |
| `--paper` | `--lt-background` | slide background |
| `--green`, `--theme-accent`, `--formal-green` | `--lt-accent` | primary accent |
| `--green-dark` | `--lt-accent-strong` | accent text/dark surface |
| `--mint`, `--theme-accent-light` | `--lt-accent-weak` | pale accent surface |
| `--coral` | `--lt-warm` | warning/process accent |
| `--blue` | `--lt-secondary` | secondary series |
| `--line` | `--lt-border` | borders and separators |

These `--lt-*` names belong to the compatibility layout API used by
`base-design`, `formal-design`, and `theme2_lin`. Override tokens on `section`,
not individual descendants, so layouts inherit consistently.

## Layout choice

- Comparison: two columns or comparison panels.
- Equal independent concepts: cards, normally no more than three.
- Sequence: process or flow with a visible direction.
- System structure: architecture or a semantically labelled diagram.
- Evidence: figure plus caption and source.
- Dense source material: reading/references; do not compensate with tiny type.

Avoid consecutive three-card pages, cards containing only a short phrase, and decorative diagrams that do not preserve the meaning of the source.

## Theme 2 Lin geometry

`themes/theme2_lin.css` keeps headings and body content in normal document flow.
The ordinary heading owns its underline through `border-bottom`; do not create
a detached absolute line for it. The page number is the only absolutely
positioned frame element; diagonal decoration is a slide background image.

The Lin diagonal runs from upper right to lower left at 74 degrees. At the
1280×720 theme size, its horizontal run is 206.5px for a 720px rise. The SVG
background polygons use those coordinates directly; do not approximate the
angle separately on each slide.

## Fonts

Mac uses Hiragino when installed. CI falls back to Noto Sans JP or a generic sans-serif, which can change line breaks. Treat CI output as a separate rendering environment and inspect it after font changes.
