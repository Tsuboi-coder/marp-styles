# Design guide

## Default frame

The default frame follows an editorial hierarchy inherited from the historical
`tmp1_Lin` prototype and normalized as the public `--lt-*` API:

1. page title at the upper left;
2. content in the central reading area;
3. a small deck label (`header`) and presenter/date (`footer`) at the lower left;
4. page number at the lower right.

Ordinary page titles use type and whitespace only; do not add a decorative
leading rule. Covers use a restrained color gradient, while section dividers
use a pale accent wash and a single edge rule so that transitions remain visible
without competing with the talk content.

The `toc`, `statement`, per-slide `data-color`, and fixed-heading ideas from
`tmp1_Lin` are now supported by `themes/base-design.css`. The prototype remains
untouched as a regression reference.

## Tokens

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

Override tokens on `section`, not individual descendants, so cover and layout components inherit consistently. A derived theme may override the cover separately after its general tokens.

## Layout choice

- Comparison: two columns or comparison panels.
- Equal independent concepts: cards, normally no more than three.
- Sequence: process or flow with a visible direction.
- System structure: architecture or a semantically labelled diagram.
- Evidence: figure plus caption and source.
- Dense source material: reading/references; do not compensate with tiny type.

Avoid consecutive three-card pages, cards containing only a short phrase, and decorative diagrams that do not preserve the meaning of the source.

## Fonts

Mac uses Hiragino when installed. CI falls back to Noto Sans JP or a generic sans-serif, which can change line breaks. Treat CI output as a separate rendering environment and inspect it after font changes.
