Hachioji.om #26
===

2013-02-23

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

<!-- data-roty=90 -->

Node.jsでも後読みがしたい！
---

後読み？
---

* 正規表現のlook-behind
    * 肯定的後読み(?<=pattern)
    * 否定的後読み(?<!pattern)
* ECMAScriptのRegExpに後読みがない

そんなときは鬼車
---

* Ruby(1.9.xまで) が使用している正規表現エンジン
* 複数のシンタックスをサポート
* 後読みもサポート

node-regexp-oniguruma
---

* Node.jsのC++ Addon
* 現時点では、Rubyシンタックスのみ
* https://github.com/hideo55/node-regexp-oniguruma

TODO
---

* キャプチャのサポート
* oniguruma同梱(autotoolsをgypに翻訳する必要がある)
* NPMで公開

