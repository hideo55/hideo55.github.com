Hachioji.pm #29
===

2013-06-15

About me
---
<!-- data-rotz=90 -->

* Hideaki Ohno
	* Twitter: @hide_o_55
    * Hatena: id:hide_o_55
    * github: hideo55
    * [http://hideo55.github.com/](http://hideo55.github.com/)
* Favorite Programing Language
    * Perl/C/C++/JavaScript/Go

<!-- data-roty=90 -->

さいきんやったこと
---

Digest::MurmurHash3::<br>PurePerl
---

<!-- data-roty=90 -->

* Pure PerlでMurmurHash3
* 32bit/128bitのハッシュ値に対応
* [https://metacpan.org/release/Digest-MurmurHash3-PurePerl](https://metacpan.org/release/Digest-MurmurHash3-PurePerl)

Pure Perl Tips
---

* C言語ではint型で計算されている箇所をPerlで再現する際に、integerプラグマをよく使う
* use integer
    * 演算子のオペランドと結果の扱いが変わる(関数には影響しない)
    * 整数の回り込み
    * 基本的に符号なし整数として扱われる
    * ビット演算子では符号付き整数として扱われる

Pure Perl Tips
---

* 状況に応じて、use integer, no integerで演算結果を制御する
* Data::IntegerがPure Perlでの整数の扱い方の参考になる

