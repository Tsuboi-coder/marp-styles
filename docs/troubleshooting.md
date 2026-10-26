# Troubleshooting

## Unknown theme

Register `themes/base-design.css` before any CSS that imports it. Confirm the Markdown `theme:` value matches the CSS `/* @theme ... */` name.

## HTML layouts appear as raw text

Enable HTML in the renderer. For Marp CLI use `--html`; for current Marp for VS Code use `"markdown.marp.html": "all"` in a trusted workspace.

## Math appears as `$...$`

Do not put Markdown math inside a raw HTML block. Move it outside the block or use a verified SVG. The review command also scans rendered HTML for common unconverted-math patterns.

## Images work in PDF but not HTML

Use paths relative to `slides.md`, allow trusted local files during the build, and copy required assets beside the published HTML.

## Different wrapping on CI

CI may not have Hiragino. Inspect the recorded font environment and avoid layouts that depend on a single exact line break.
