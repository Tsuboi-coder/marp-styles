# Theme 2 Lin sample

`themes/theme2_lin.css` の表紙、目次、章扉、通常ページ、帯見出し、まとめを確認する6ページサンプルです。

- `slides.md`：Marp原稿
- `slides.pdf`：確認済みの生成結果

再生成：

```sh
./node_modules/.bin/marp samples/theme2_lin/slides.md \
  --theme-set themes/base-design.css \
  --theme-set themes/theme2_lin.css \
  --pdf --allow-local-files \
  --output samples/theme2_lin/slides.pdf
```
