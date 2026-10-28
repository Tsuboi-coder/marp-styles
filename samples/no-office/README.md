# No Office sample deck

`examples/` のレイアウト部品見本とは分離した，完成デッキの構成サンプルです．
公開テーマ `theme1_base` の実利用例でもあります．

## ファイル

- `planning/requirements.md`：発表者メモを整理した内容要件と出典
- `planning/outline.md`：ページごとの役割と構成判断
- `slides.md`：Marp原稿
- `slides.pdf`：リポジトリ内で確認できる生成済みPDF

テーマ自体の配色確認は `../theme1_base/` に分離しています．

発表者は坪井一馬，発表日は2026年10月31日(土)として設定しています．

## 配色の切り替え

青が既定色です．赤・緑・黄・紫はスライドの `_class` で切り替えます．

```markdown
<!-- _class: palette-red -->
<!-- _class: palette-green -->
<!-- _class: palette-yellow -->
<!-- _class: palette-purple -->
```

表紙・章扉・ステートメント・まとめと組み合わせる場合は，空白区切りで
`cover palette-red` のように指定します．

## 通常見出しと中央訴求

通常ページでは，小さなセクション名を `slide-kicker` に入れ，その直後に
ページ見出しを書きます．

```markdown
<div class="slide-kicker">セクションタイトル</div>

# 見出しはここに入ります
```

一つの文だけを中央で訴求する場合は `center-message` を使います．

```markdown
<!-- _class: center-message -->

# 中央へ表示するメッセージ
```

## PDFビルド

リポジトリ直下で実行します．PDFは原稿と同じディレクトリへ生成し，Git管理します．

```sh
./node_modules/.bin/marp samples/no-office/slides.md \
  --theme-set themes/theme1_base.css \
  --pdf --allow-local-files \
  --output samples/no-office/slides.pdf
```

Marp CLIは内部でNode.jsを使用しますが，追加のJavaScriptやビルドスクリプトは不要です．
