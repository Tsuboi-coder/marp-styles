---
marp: true
theme: theme1_base
paginate: true
html: true
header: さあみんなオフィスを使うのをやめよう！
footer: 坪井一馬｜2026年10月31日(土)
---

<!-- _class: cover -->
<!-- _paginate: false -->

# さあみんな<br>オフィスを使うのをやめよう！

## テキストとAIで，スライド制作を話すことへ戻す

<div class="theme1-meta">坪井一馬<br>2026年10月31日(土)</div>

---

<!-- _class: center-message -->

# PowerPointでスライドを作る人は？

---

<!-- _class: statement -->

# もうPowerPointだけで<br>スライドを作る時代は終わっている！

道具を捨てる話ではない．「それしかない」という前提を捨てる話である．

---

<div class="slide-kicker">導入</div>

# 企業の技術者も，Marpを試している

<div class="lt-cols lt-cols--top">
<div>

## Future Tech Blog

- VS Code＋Markdownでスライドを作成
- 会社向けテーマをCSSで試作
- 骨子はMarp，仕上げはPowerPointという併用も紹介

</div>
<div>

## 朝日新聞社の技術記事

- 社内向けMarpテンプレートを制作
- Git管理と生成AIとの相性を評価
- CSSでレイアウトを切り替える実践例

</div>
</div>

<div class="theme1-source">出典：Future Tech Blog（2020），朝日新聞社 Advent Calendar 2025．いずれも「全社でPowerPointを廃止した」という事例ではない．</div>

---

<div class="slide-kicker">道具を選ぶ</div>

# Officeの仕事を，道具ごと分解する

<div class="theme1-stack">
  <div><strong>Word</strong><span class="arrow">→</span><span><b>LaTeX</b>で，構造と組版を分離する．</span></div>
  <div><strong>Excel</strong><span class="arrow">→</span><span><b>Python</b>で，集計と再現可能な処理を書く．</span></div>
  <div><strong>PowerPoint</strong><span class="arrow">→</span><span><b>Marp</b>で，内容をMarkdownとして管理する．</span></div>
</div>

<div class="lt-takeaway">アプリを丸ごと置き換えるのではなく，仕事の種類ごとに道具を選び直す．</div>

---

<!-- _class: statement -->

# PowerPointをやめると<br>何が起きる？

装飾から距離を置き，当日の話と内容へ集中する．

---

<!-- _class: effects -->

<div class="slide-kicker">効果</div>

# PowerPointをやめる6つの効果

<div class="theme1-effects">
  <div><span>01</span><h2>脳内トークンを温存</h2><p>色，影，位置へのこだわりを減らし，内容へ思考を戻す．</p></div>
  <div><span>02</span><h2>配置は型へ任せる</h2><p>テンプレートへ流し込み，足りない部分は話力で届ける．</p></div>
  <div><span>03</span><h2>当日の話へ集中</h2><p>その時にしかない会場の空気と，話の勢いへ集中する．</p></div>
  <div><span>04</span><h2>指示する力を鍛える</h2><p>考えを整理し，意図と制約を人やAIへ的確に伝える．</p></div>
  <div><span>05</span><h2>有料ソフトから自立</h2><p>単体版22,370円，Microsoft 365 Personalは年額21,300円．</p></div>
  <div><span>06</span><h2>逆張りを楽しむ</h2><p>既定路線に従うだけでなく，制作方法を自分で設計する．</p></div>
</div>

<div class="theme1-source">価格はMicrosoft公式，2026年10月29日閲覧．基本機能のPowerPoint for the webには無料プランがある．</div>

---

<div class="slide-kicker">制作プロセス</div>

# このスライドは，どう作った？

<div class="lt-process">
  <div class="lt-step"><h3>部品を準備</h3>CSSのレイアウト部品と，エージェント向けの制作規約を先に整える．</div>
  <div class="lt-step"><h3>メモを渡す</h3>話したいことを文章にし，Codexへ構成とMarp原稿を依頼する．</div>
  <div class="lt-step"><h3>見て，直す</h3>生成結果へ具体的な修正指示を返し，話者の形へ磨き上げる．</div>
</div>

<div class="lt-takeaway">AIへ丸投げするのではなく，設計・生成・批評を分担する．</div>

---

<div class="slide-kicker">高度な表現</div>

# 詳細なスライドも作れる

<div class="lt-cols lt-cols--top">
<div>

## LaTeX＋Beamer＋TikZ

- 数式と学術文書に強い
- 図をコードとして精密に構築できる
- 再現性は高いが，習得と調整は重い

</div>
<div>

## Marp＋ベクタ画像

- 本文はMarkdownで軽く保つ
- Inkscape等で複雑な図をSVG化する
- 話の流れと作図を分業できる

</div>
</div>

---

<div class="slide-kicker">代替ツール</div>

# PPTXが必要なら，別の選択肢もある

| 選択肢 | 向いている場面 |
|---|---|
| Googleスライド | ブラウザでの共同編集 |
| LibreOffice Impress | オープンソースのデスクトップ環境 |
| Apache OpenOffice Impress | 無料のオフィススイートを使いたい場合 |
| Keynote | Mac・iPadで，洗練された標準テンプレートを使う場合 |

<div class="lt-takeaway">納品形式がPPTXでも，制作ツールまでPowerPointに固定する必要はない．</div>

---

<!-- _class: summary -->

# まとめ

- PowerPointだけを既定値にせず，仕事ごとに道具を選ぶ．
- テンプレートとAIで装飾の時間を減らし，当日の話へ集中する．
- AIを使う過程で，考えを整理し，的確に指示する力を鍛える．
- 次の課題は，Beamer等の高度な表現をどこまで外注し，AIらしさを消せるか．

---

<!-- _class: references -->

<div class="slide-kicker">参考資料</div>

# 出典

1. 加藤周平「Marpで会社のスライドテンプレを作ってみる」，Future Tech Blog，2020．  
   <https://future-architect.github.io/articles/20200812/>
2. Hiroshi Nishijima「社内向けの Marp テンプレートを作ってわかった Tips 紹介」，朝日新聞社 Advent Calendar 2025．  
   <https://qiita.com/hnz/items/4e6d536c056ff6a9ae35>
3. Microsoft「PowerPoint｜オンラインのプレゼンテーションとスライド」，2026年10月29日閲覧．  
   <https://www.microsoft.com/ja-jp/microsoft-365/powerpoint/>
4. Microsoft Store「Microsoft PowerPointを購入」，2026年10月29日閲覧．  
   <https://www.microsoft.com/ja-jp/microsoft-365/p/powerpoint/cfq7ttc0pbmc>
