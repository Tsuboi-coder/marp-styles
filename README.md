# marp-styles

Marp用の再利用可能なテーマと、実際にレンダリングできるサンプルを管理するリポジトリです。

## Themes

新しい原稿では、次の2テーマを直接指定します。

| テーマ | ファイル | 用途 |
|---|---|---|
| `theme1_base` | `themes/theme1_base.css` | 白地と青を基調にした標準テーマ。固定見出し、フッター、中央訴求、章扉、配色切替を提供 |
| `theme2_lin` | `themes/theme2_lin.css` | `teachers/Lin_Ans.pdf`を基にしたLinテーマ。見出し線と74度の斜面を使う構成 |

`theme1_base` は単独で利用できます。`theme2_lin` は共通レイアウトAPIを持つ
`base-design`を継承するため、CLIでは `base-design.css` を先に登録してください。

### Compatibility themes

既存原稿を壊さないため、次の名前も残しています。

- `base-design`：従来の共通レイアウトテーマ
- `formal-design`：`base-design`を継承する研究発表向けテーマ
- `lin-design`：`theme2_lin`への互換エイリアス。新規原稿では`theme2_lin`を使用

`tmp1_Lin/` は歴史的な試作資料であり、公開テーマの正本ではありません。

## Repository layout

```text
themes/     公開テーマ。新テーマの正本と互換テーマ
examples/   レイアウト部品の小さな実行例
samples/    完成形のMarkdownと、確認済みPDF
docs/       設計規約、レイアウトカタログ、運用説明
tests/      テーマ登録とレンダリングのスモークテスト
tmp1_Lin/   変更しない歴史的試作
dist/       再生成可能なHTML/PDF。Git管理外
```

## Included samples

| サンプル | Markdown | PDF |
|---|---|---|
| Theme 1の配色・基本構成 | [`samples/theme1_base/slides.md`](samples/theme1_base/slides.md) | [`samples/theme1_base/slides.pdf`](samples/theme1_base/slides.pdf) |
| Theme 2 Linの6ページ構成 | [`samples/theme2_lin/slides.md`](samples/theme2_lin/slides.md) | [`samples/theme2_lin/slides.pdf`](samples/theme2_lin/slides.pdf) |
| 「さあみんなオフィスを使うのをやめよう！」 | [`samples/no-office/slides.md`](samples/no-office/slides.md) | [`samples/no-office/slides.pdf`](samples/no-office/slides.pdf) |

`samples/` のPDFは、Markdownとテーマを確認できる成果物としてGit管理します。
`examples/` の一括生成物は再生成可能なため `dist/` に置き、Git管理しません。

## Setup and verification

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm run build
```

- `pnpm test`：テーマ名、継承関係、代表原稿のHTMLレンダリングを検証
- `pnpm run build`：`examples/` のHTML/PDFと、`samples/` の確認用HTML/PDFを生成
- `pnpm run build:html`：Chromiumを使うPDF生成を省き、HTMLだけ生成
- `pnpm run build:pdf`：PDFだけ生成し、`samples/` の管理対象PDFも更新

## Use from another repository

Theme 1だけを使う場合：

```sh
marp slides.md \
  --theme-set vendor/marp-styles/themes/theme1_base.css \
  --pdf
```

Theme 2 Linを使う場合：

```sh
marp slides.md \
  --theme-set vendor/marp-styles/themes/base-design.css \
  --theme-set vendor/marp-styles/themes/theme2_lin.css \
  --pdf
```

VS Codeでは `.vscode/settings.json` の `markdown.marp.themes` に同じ順序でCSSを登録します。

## Theme 1 frame

通常ページでは、小さなセクション名を `.slide-kicker` に入れ、その直後にページ見出しを書きます。

```markdown
<div class="slide-kicker">セクションタイトル</div>

# ページ見出し
```

中央へ一つの文だけを置く場合は `center-message` を使います。

```markdown
<!-- _class: center-message -->

# 中央へ表示するメッセージ
```

青が既定色です。スライド単位で `palette-red`、`palette-green`、
`palette-yellow`、`palette-purple` を指定できます。

## Theme 2 Lin geometry

Linの斜面は、スライド高720pxに対する水平移動206.5pxから74度を構成します。
斜面は表紙、章扉、まとめに限定し、通常ページの見出しと本文は通常フローで配置します。

## Compatibility API

従来の `base-design` が提供する `--lt-*` トークンと `.lt-*` レイアウトは維持しています。
`.cols`、`.card`、`.steps`、`.flow`、`.architecture`、`.takeaway` などの旧クラスも互換目的で残しています。

詳細は [`docs/architecture.md`](docs/architecture.md)、[`docs/design-guide.md`](docs/design-guide.md)、
[`docs/layout-catalog.md`](docs/layout-catalog.md) を参照してください。
