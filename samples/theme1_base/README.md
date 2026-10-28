# Theme 1 Base sample

`themes/theme1_base.css` の標準フレームと配色切替を確認するサンプルです。

- `slides.md`：Marp原稿
- `slides.pdf`：確認済みの生成結果

再生成：

```sh
./node_modules/.bin/marp samples/theme1_base/slides.md \
  --theme-set themes/theme1_base.css \
  --pdf --allow-local-files \
  --output samples/theme1_base/slides.pdf
```
