# Architecture

## Canonical themes

`themes/theme1_base.css` と `themes/theme2_lin.css` が、新規原稿で使用するテーマの正本です。

### Theme 1 Base

`theme1_base` はMarp組み込みの `default` を直接継承する自己完結テーマです。
標準フレーム、表紙、章扉、ステートメント、中央訴求、2カラム、工程、配色切替を提供します。
内部トークンは `--theme1-*`、再利用レイアウトは `.lt-*` を使用します。

カスケードは次の順です。

1. Marp `default`
2. `theme1_base`
3. スライド単位の `palette-*` または意味を持つレイアウトクラス
4. 発表固有の、必要最小限の上書き

### Theme 2 Lin

`theme2_lin` は既存の `base-design` を継承し、Lin固有のページ構成を上書きします。
CLIでは `base-design.css` を先に、`theme2_lin.css` を後に登録します。

1. Marp `default`
2. `base-design` の `--lt-*` トークンと `.lt-*` レイアウト
3. `theme2_lin` の表紙、章扉、通常見出し、帯見出し、まとめ
4. 発表固有の色や表紙上書き

## Compatibility themes

- `base-design.css`：従来の共通テーマ。既存の `--lt-*` APIを維持
- `formal-design.css`：`base-design`を継承する既存テーマ
- `lin-design.css`：`theme2_lin`への薄い互換エイリアス

互換テーマは既存原稿を壊さないために残します。新しい原稿のテーマ名には
`theme1_base` または `theme2_lin` を使用します。

## Samples and generated artifacts

- `examples/`：レイアウト部品の入力。生成物はGit管理外の `dist/` に置く
- `samples/`：テーマまたは完成デッキの入力と、確認済みPDFを同じ場所に置く
- `tmp1_Lin/`：移行前の試作を保持する履歴領域。公開APIとして編集しない

テーマの変更後は `pnpm test` と `pnpm run build` を実行し、サンプルPDFを目視確認します。
