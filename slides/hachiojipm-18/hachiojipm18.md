Hachioji.om #18
===

2012-06-23

About me
---
<!-- data-rotz=90 -->

* Hideaki Ohno
	* Twitter: @hide_o_55
    * Hatena: id:hide_o_55
    * github: hideo55
    * [http://hideo55.github.com/](http://hideo55.github.com/)
* Favorite Programing Language
    * Perl/C/C++/JavaScript


Theme
---

<!-- data-roty=90 -->
JavaScript関係

このスライド自体
---

Mosho.js
---
* [https://github.com/pdehn/mosho](https://github.com/pdehn/mosho) 
* JavaScript presentation framework
* impress.jsに近い(元はimpress.jsベース)
* Non-linear linking
* Plugin

md2mosho
---
* MarkdownからMosho.jsを使用したスライドを生成
* markdown2impressのパクリ
* 細かい制御はHTMLコメントで
* prettify.jsによるシンタックスハイライト

	
md2mosho
---
Markdownの例

	Theme
	---
	<!-- data-roty=90 -->
	JavaScript関係

md2mosho
---
シンタックスハイライト

```
mosho.plugin({
  name: "scaleActiveSlide",
  preShow: function (evt) {
    prv = evt.detail.prevSlide;
    nxt = evt.detail.nextSlide;
    if (prv) { prv.scale(0.25) }
    if (nxt) { nxt.scale(4) }
  }
});
```

JavaScript関連で気になってるもの
---
<!--  data-rotx=90 -->
<!--  data-roty=90 -->

QuickCheck in JS
---

* QuickCheck
	* Haskell 
	* 引数の型が取り得る値をランダムに関数に与えるテストケースを生成するライブラリ

QuickCheck in JS
---
* JSCheck
	* Douglas Crockford先生謹製
	* [http://www.jscheck.org/](http://www.jscheck.org/)
* Macchiato.js
	* [http://voqn.github.com/macchiato/](http://voqn.github.com/macchiato/) 
* 静的型付けなJSXだとこのテのライブラリはいいかも

Fin
---
<!--  data-rotx=90 -->
<!--  data-rotz=90 -->