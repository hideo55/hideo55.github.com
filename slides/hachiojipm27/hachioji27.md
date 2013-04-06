Hachioji.pm #27
===

2013-04-06

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

XS期がきてる
---

Digest::SpookyHash
---

* SpookyHashのC++実装のバインディング
* SpookyHash
	* Bob Jenkins 
	* 128bitの非暗号論的ハッシュ
	* キーが短い場合に非常に速い
* 64bit Integerが使える環境のみ


Digest::SpookyHash
---

* 作る過程でM::B::Pluggable::XSUtilのバグ見つけてpull-reqした
* C++を使う場合はM::B::Pluggable::XSUtil-1.01をprereqに

Algorithm::HyperLogLog
---

* HyperLogLogアルゴリズムの実装 
* ある集合内の異なりの数(cardinality)を省メモリで推定するアルゴリズム
	* PurePerlでも動く
	* MurmurHash3-32もPurePerlで実装
* CPAN Testersからfail report
	* PA-RISCの環境でXSとPPで結果が違う 
	* PA-RISCはビッグエンディアン

原因はMurmurHash3
---
* MurmurHash3のC実装がビッグエンディアンを想定していなかった
* 調べたらMurmurHash3に限らず、MurmurHash、MurmurHash2もバイトオーダーを考慮しない実装
	* 関数名に "_x86"ってつかてるから当然といえば当然 

ブログに書いた
---
[多くのMurmurHashの実装がバイトオーダーを考慮していない](http://d.hatena.ne.jp/hide_o_55/20130403/1364917149)

テスト環境作った
---
* QEMU
	* SPARCとかPowerPCのエミュレーションができる
* Debian
	* 多くのアーキテクチャをサポート
* Debian(Sqeeze) on QEMU(PowerPC)環境を構築
	* SPARCも試したけど、Sqeezeが上手く入らなかった 

対処
---
* MururHash3のC実装でビッグエンディアンの場合はバイトオーダーを入れ替えるように変更
* [https://gist.github.com/hideo55/5325084](https://gist.github.com/hideo55/5325084)

今後も暫くXS期
---

* あと3つくらいはCPANに上げられそう
