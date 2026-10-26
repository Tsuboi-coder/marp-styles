# Marp theme maintenance

- Preserve `tmp1_Lin/` as the historical prototype. Public themes live in `themes/`.
- Treat `--lt-*` tokens and `.lt-*` classes as the stable API. New public classes require a rendered example and an entry in `docs/layout-catalog.md`.
- Keep legacy aliases while existing decks depend on them; document migrations before removal.
- Prefer a layout that expresses comparison, sequence, structure, or evidence over decorative card repetition.
- After theme changes, run `npm test` and `npm run build`, then inspect the gallery PDF and representative pages.
- Do not add fonts, photographs, copied figures, or remote assets without confirming redistribution rights.
