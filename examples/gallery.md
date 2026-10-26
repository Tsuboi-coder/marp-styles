---
marp: true
theme: base-design
paginate: true
html: true
math: mathjax
---

<!-- _class: cover -->

# Lin Layout Gallery
## 共通テーマの実行可能な総合見本

`base-design` · reusable Marp design system

---

<!-- _class: section-title -->

# Section title
## 主題が切り替わることを明確に示す

章番号や一文の導入だけを置く。

---

# Two columns

<div class="lt-cols lt-cols--wide-left">
  <div>
    <h2>主張・説明</h2>
    <p>階層が異なる情報には、左右非対称の比率を使う。</p>
    <ul><li>左：主となる説明</li><li>右：補助的な根拠</li></ul>
  </div>
  <div class="lt-card lt-card--secondary"><h3>Evidence</h3><p>補足、数値、短い引用。</p></div>
</div>

---

# Three columns / cards

<div class="lt-cards">
  <div class="lt-card lt-card--accent"><h3>概念 A</h3><p>同じ階層の独立した項目。</p></div>
  <div class="lt-card lt-card--warm"><h3>概念 B</h3><p>比較軸と文章量をそろえる。</p></div>
  <div class="lt-card lt-card--secondary"><h3>概念 C</h3><p>三つある必然性を確認する。</p></div>
</div>

---

# Photo + text

<div class="lt-photo-text">
  <figure class="lt-figure"><img src="assets/system-map.svg" alt="Input, Process, Outputの模式図"><figcaption>図1　説明用の自作模式図。数値的根拠ではない。</figcaption></figure>
  <div><h2>図を先に読む</h2><p>本文は、図中の順序と同じ順番で説明する。</p><p>実データの図には、出典と図注を必ず添える。</p></div>
</div>

---

# Process

<div class="lt-process">
  <div class="lt-step"><h3>Collect</h3><p>入力と出典を確認する。</p></div>
  <div class="lt-step"><h3>Transform</h3><p>目的に沿って処理する。</p></div>
  <div class="lt-step"><h3>Verify</h3><p>出力を検証する。</p></div>
</div>

<div class="lt-takeaway">順序のある説明には、番号と方向を与える。</div>

---

# Diagram / architecture

<div class="lt-architecture">
  <div class="lt-tower"><h3>Encoder</h3><div class="lt-layer">Input</div><div class="lt-layer">Representation</div></div>
  <div class="lt-flow__arrow">↔</div>
  <div class="lt-tower"><h3>Decoder</h3><div class="lt-layer">Context</div><div class="lt-layer">Output</div></div>
</div>

---

<!-- _class: math -->

# Math

数式はHTMLブロックの外に置き、Marpの数式処理へ渡す。

$$
\operatorname{Attention}(Q,K,V)=\operatorname{softmax}\left(\frac{QK^\mathsf{T}}{\sqrt{d_k}}\right)V
$$

説明文では、記号の意味と式の役割を言葉でも示す。

---

# Comparison

<div class="lt-comparison">
  <div><h3>Approach A</h3><ul><li>高い表現力</li><li>計算量が大きい</li></ul></div>
  <div><h3>Approach B</h3><ul><li>計算が軽い</li><li>制約が増える</li></ul></div>
</div>

---

<!-- _class: reading -->

# Reading

情報量の多いページでは、文章を小さくしすぎず、段落の役割を明確にする。

> 引用文には出典を付ける。引用と発表者自身の主張を、見た目でも混同させない。

本文を一枚に詰め込む前に、発表中に読む必要があるか、補足資料へ移すべきかを判断する。

---

<!-- _class: references -->

# References

1. Author, A., “Example Article,” *Journal*, 2024.
2. Author, B., *Example Book*, Publisher, 2023.
3. Project Team, “Example Documentation,” 2025.
4. Organization, “Dataset Card,” 2025.

