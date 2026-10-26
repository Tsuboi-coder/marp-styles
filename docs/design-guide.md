# Design guide

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
