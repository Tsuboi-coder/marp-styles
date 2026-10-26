# Layout catalog

All snippets assume `html: true` and `theme: base-design`. The executable source is under `examples/`; after `pnpm run build`, rendered HTML and PDF are under `dist/`.

## Cover / section title

- Use for: the deck cover and a real topic transition.
- Avoid for: ordinary content or decorative pauses.
- Classes: `cover`, `section-title` (`title` and `section` remain compatible aliases).
- The default cover uses a full-slide gradient. Section dividers use a pale
  accent background and one edge rule; talks may change colors through tokens.

```markdown
<!-- _class: cover -->
# Talk title
## Scope-setting subtitle
```

Rendered example: `examples/cover.md` → `dist/pdf/cover.pdf`.

### Image cover supplied by a talk

The shared theme owns the overlay and typography; the talk owns the image and
its license. Set the image only in the talk-specific CSS.

```css
section.my-image-cover {
  --lt-cover-image: url('../assets/cover.jpg');
  --lt-cover-position: 50% 42%;
}
```

```markdown
<!-- _class: cover cover-image my-image-cover -->
# Talk title
```

Do not put a remote URL in the shared theme. Record the image source and usage
rights with the talk.

## Basic page frame

- Use `#` as the page title. It is fixed at the upper left.
- Use the Marp `header` field for the small deck label at the lower left.
- Use `footer` for the presenter and date on a second, smaller line.
- Pagination is fixed at the lower right.
- Clear both fields locally on covers when they would duplicate the title metadata.

Rendered example: `examples/basic-structure.md`.

## Statement

- Use for: one sentence that deserves a deliberate pause.
- Avoid for: a section title, a list, or an unsupported slogan.
- Class: `statement`.

```markdown
<!-- _class: statement -->
# One clear statement.

Optional short attribution or qualification.
```

The deck label and page number remain visible so that the slide still belongs to
the presentation frame.

## Two / three columns

- Use for: a balanced comparison or equal-rank parallel ideas.
- Avoid for: sequential processes or unrelated content forced into symmetry.
- Classes: `lt-cols`, `lt-cols--3`, `lt-cols--wide-left`, `lt-cols--wide-right`, `lt-cols--top`.

```html
<div class="lt-cols">
  <div>First perspective</div><div>Second perspective</div>
</div>
```

Rendered examples: `examples/two-columns.md`, pages 3–4 of `examples/gallery.md`.

## Photo text / figure caption

- Use for: a photograph or research figure whose visual evidence is central.
- Avoid for: decoration without explanatory value.
- Classes: `lt-photo-text`, `lt-photo-text--reverse`, `lt-figure`.

```html
<div class="lt-photo-text">
  <figure class="lt-figure"><img src="assets/figure.svg" alt="..."><figcaption>Figure 1. Source.</figcaption></figure>
  <div>Explanation in the same order as the figure.</div>
</div>
```

Rendered example: `examples/photo-text.md`.

## Cards / comparison

- Use cards for: two or three independent concepts at the same level.
- Use comparison for: options sharing explicit comparison axes.
- Avoid for: a sentence that could be a list item, or many consecutive card slides.
- Classes: `lt-cards`, `lt-card`, card modifiers, `lt-comparison`.

```html
<div class="lt-comparison"><div>Option A</div><div>Option B</div></div>
```

Rendered examples: `examples/cards.md`, `examples/comparison.md`.

## Process / flow

- Use process for: numbered phases with comparable detail.
- Use flow for: compact node-and-arrow transformations.
- Avoid for: cyclic or branching systems that need a real diagram.
- Classes: `lt-process`, `lt-step`, `lt-flow`, `lt-flow__node`, `lt-flow__arrow`.

```html
<div class="lt-process"><div class="lt-step">Collect</div><div class="lt-step">Build</div><div class="lt-step">Verify</div></div>
```

Rendered example: `examples/process.md`.

## Diagram / architecture

- Use for: system components, dependency direction, Encoder/Decoder structures.
- Avoid for: decorative shapes without semantic labels.
- Classes: `lt-diagram`, `lt-architecture`, `lt-tower`, `lt-layer`.

```html
<div class="lt-architecture"><div class="lt-tower"><div class="lt-layer">Encoder</div></div><div>→</div><div class="lt-tower"><div class="lt-layer">Decoder</div></div></div>
```

Rendered example: `examples/diagram.md`.

## Code / math

- Use for: short code or one focal equation with an explanation.
- Avoid for: raw terminal dumps or equations embedded inside raw HTML.
- Slide classes: `code`, `math`; optional HTML class: `lt-equation` for already typeset/plain notation only.

```markdown
<!-- _class: math -->
$$E = mc^2$$
```

Rendered example: `examples/math.md`.

## Reading / references

- Use for: source excerpts, caveats, bibliography, or supplementary reading.
- Avoid for: shrinking a normal talk slide to fit everything.
- Slide classes: `reading`, `references`.

```markdown
<!-- _class: references -->
# References
1. Author, “Title,” Venue, year.
```

Rendered example: `examples/reading.md`; gallery final page shows references.

## Takeaway

- Use for: the single conclusion produced by the slide's evidence.
- Avoid for: decoration on every page or a second title.
- Class: `lt-takeaway`.

```html
<div class="lt-takeaway">The evidence supports one conclusion.</div>
```

Rendered example: process page in `examples/gallery.md`.
