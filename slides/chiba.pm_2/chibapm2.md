Chiba.pm #2
===

2013-03-23

＼ﾁﾊﾞ／
---

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

初めてXSモジュールをCPANに上げた話
---

XSとは？
---

* PerlとC言語との拡張インタフェースを作るための仕組み
* 主に以下のような用途で使われる
    * Cで書かれたライブラリのバインディング
    * Perlだと遅い箇所をCで高速化
    * Perlコードから触れないPerl内部のハック

XSって難しい？
---
* C言語の読み書きが出来れば難しくない
* XS特有の作法を覚えるだけ
* Perl内部のハックの場合は当然Perl内部の知識が必要

今回作ったモジュール
---

* Algorithm::HyperLoglog
	* HyperLogLogアルゴリズムの実装 
	* ある集合内の異なりの数(cardinality)を省メモリで推定するアルゴリズム
	* PurePerlでも動く

M::B::Pluggable使ってみた
---
* べんり！
* XSビルドのサポート
	* M::B::Pluggable::XSUtil
* cpanfile対応
	* M::B::Pluggable::CPANfile
* ただし、他にフックしたい箇所がある場合はDirty Hackの必要あり
	* M::B::Pluggableが既にM::B->subclassしているため


参考にしたもの
---
* perlxs, perlguts, perlapi
* [XS基礎文法最速マスター](http://d.hatena.ne.jp/gfx/20100202/1265091606)
* [Digest::BLAKE2作成で学ぶモダンPerl XSモジュール作成と、挫折](http://blog.wktk.co.jp/archives/331)
