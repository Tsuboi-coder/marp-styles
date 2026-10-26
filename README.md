# marp-styles

Marp用デザインシステム **Lin（リン）**。凛とした知性・清潔感と、罫線を活かす整然としたレイアウトを組み合わせ、講義・学会・研究発表で内容を明快に伝えることを目指します。

`tmp1_Lin/` は既存試作を保護する履歴領域です。固定見出し、目次、ステートメント、ページ別配色の考え方は正式テーマへ統合済みです。新規利用では `themes/` と `examples/` を参照してください。

## Themes

- `themes/base-design.css`: 完結した共通テーマ。`--lt-*`トークンと`.lt-*`レイアウトを提供。
- `themes/formal-design.css`: `base-design`を継承した抑制的な研究発表向けテーマ。

標準フレームは，ページタイトルを左上，`header` のデッキ名と `footer` の発表者・日付を左下，ページ番号を右下に配置します．主なレイアウトは，通常／画像表紙，章扉，ステートメント，目次，2/3カラム，写真+文章，カード，比較，工程，フロー，機構図，コード，数式，読み物，参考文献，takeawayです．用途・避ける用途・最小例は [`docs/layout-catalog.md`](docs/layout-catalog.md)，規約は [`docs/design-guide.md`](docs/design-guide.md) を参照してください．

## Setup and standalone test

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm run build
```

`pnpm test` は `base-design` と `formal-design` の登録・継承・HTMLレンダリングを検証します。`pnpm run build` は全見本を `dist/html/` と `dist/pdf/` に生成します。
見本は形式ごとに一括変換し、PDF生成に使うChromiumの起動回数を抑えています。ブラウザを使わずHTMLだけ確認する場合は `pnpm run build:html` を利用してください。

## Use from another repository

Marp CLIへ継承順に登録します。

```sh
marp slides.md \
  --theme-set vendor/marp-styles/themes/base-design.css \
  --theme-set vendor/marp-styles/themes/formal-design.css \
  --html --pdf
```

VS Codeではワークスペース設定に両CSSを同じ順番で登録します。

## Create a derived theme

```css
/* @theme my-talk */
@import 'base-design';

section {
  --lt-accent: #b95d35;
  --lt-accent-strong: #7f3c22;
  --lt-accent-weak: #fff0e8;
}

section.cover {
  /* この発表にだけ必要な表紙上書き */
}
```

CLIには `base-design.css` を先に、派生CSSを後に登録し、Markdownでは `theme: my-talk` を指定します。発表固有の主張や内容はテーマへ入れません。

## Compatibility

`.cols`、`.card`、`.steps`、`.flow`、`.architecture`、`.takeaway` など試作で使われたクラスには互換エイリアスがあります。新規原稿では名前衝突を避けるため `.lt-*` を使用してください。

### 目次の自動更新

`slides.md` に `<!-- _class: section -->` のスライドを追加した後、リポジトリのルートで次を実行します。

```sh
node scripts/update-toc.mjs
```

各SECTIONの `##` 見出しから目次が再生成され、`SECTION 01` から始まる番号も定義順に振り直されます。まとめページがある場合は、その見出しも目次の末尾へ追加されます。目次内の `AUTO-TOC` で囲まれた部分は直接編集しません。
