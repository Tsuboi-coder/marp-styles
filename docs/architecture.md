# Architecture

`themes/base-design.css` is the self-contained public base theme. It imports only Marp's built-in `default` theme and exposes design tokens and layout classes. `themes/formal-design.css` inherits it through Marpit theme inheritance and changes tokens plus the cover treatment.

The cascade is:

1. Marp `default`
2. `base-design` defaults on `:root` and `section`
3. a derived theme such as `formal-design`
4. a talk-specific theme in the consuming repository
5. a local slide class or scoped style for a one-page exception

The CLI must register `base-design` before a theme that imports it. Theme CSS is intentionally shipped as complete files; no bundling step is required.

## Stable surface

- Design tokens use `--lt-*`.
- Layout classes use `.lt-*`.
- `.cols`, `.card`, `.steps`, `.flow`, `.architecture`, `.takeaway`, and selected prototype helpers remain compatibility aliases.
- `tmp1_Lin/` is retained unchanged as migration evidence and is not the package API.
