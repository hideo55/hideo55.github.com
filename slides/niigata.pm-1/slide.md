Niigata.pm Tech Talk #1
==========

2012/4/28

*Hideaki Ohno* a.k.a *hide_o_55*

About me
======

* Hideaki Ohno
    * Twitter: @hide_o_55
    * Hatena: id:hide_o_55
    * github: hideo55
    * [http://hideo55.github.com/](http://hideo55.github.com/)
* Favorite Programing Language
	* Perl/C/C++/JavaScript

My Products
==========

node-perl
=========
* Node.jsにPerlインタプリタを組み込む
* Node.jsで何か作りたい→node.jsのaddonはC++で作れる。→ C++ということはCのライブラリも使える→perlインタプリタもCだから組み込める！！！
	* という極めて自然な流れで作成を決意
* これを元ネタにYAPC::Asia Tokyo 2011で[発表](http://yapcasia.org/2011/talk/43.html)しました
* 現在、GYP及びlibuv API対応を検討中

node-groonga
===
* Node.jsでgroongaにアクセス
* HTTP
* もうnroongaあるしいらない

metacpan-growler
========
* MetaCPAN APIを利用して、新着モジュールをGrowl通知
* 結構反響があった
	* [CPAN Helper(Chrome Extenstion)](https://chrome.google.com/webstore/detail/lmbbdfdngngmcjihfdbknndaoijmmlhe)
	* [App::MetaCPAN::Gtk2::Notify](http://search.cpan.org/dist/App-MetaCPAN-Gtk2-Notify/bin/metacpan_notify.pl)
	

chrome-npm-helper
=========
* Chrome Extension
* npmの新着モジュールをChrome Desktop Notificationで通知
* アドレス欄でのnpmモジュール検索（サジェストあり）

chrome-pgxn-search
====
* Chrome Extension
* PGXN(PostgreSQLの拡張のリポジトリ)の新着通知
* 検索サポート

FormValidator::Lite:: Constraint::Moose
===
* FormValidator::LiteのバリデーションルールとしてMo[o|u]sの Type Constraintを利用できる
* [CPANで公開済み](https://metacpan.org/module/FormValidator::Lite::Constraint::Moose)


ShipIt.JS
====
* PerlのShipItのNode.js版
	* npmで[公開中](http://search.npmjs.org/#/ShipItJS)
* npmモジュールのリリース作業を自動化
* Dry-Runがデフォルト
* Git/Mercurialサポート
* Semantic Versioning




node-murmurhash3
====
* MurmurHash3のNode.jsバインディング
	* npmで[公開中](http://search.npmjs.org/#/murmurhash3)
* GYP対応済み

node-kytea
===
* テキスト解析ツールKyTeaのNode.jsバインディング
	* npmで[公開中](http://search.npmjs.org/#/kytea)
* [公式サイトにも載せてもらった](http://www.phontron.com/kytea/api-ja.html)
* GYP対応済み

時間余ってるはずなので
===


解説! 知ってる人は知っている?ヒントフラグ
---

ヒントフラグとはなんぞや？
---

* $^H
* Perl インタプリタの挙動を変えるためのフラグ
* レキシカルスコープ
* ヒントフラグの各ビットに意味がある
* strict.pmとかcommon::senseとか

common::senseの例
===

* common::senseでヒントフラグがどのように使われているか解説
* [これも参考に](http://perl-users.jp/articles/advent-calendar/2010/casual/14)

ヒントフラグの各ビット解説
===

###perl.hに定義がるのでそれをもとに意味を解説

0x00000001
===

* integer pragma
* 算術演算を浮動小数点数ではなく整数で行う

0x00000002
===
* use strict 'refs';
* シンボリックリファレンスの使用を禁止する

0x00000004
===
* use locale;
* 比較演算子、正規表現、書式関数、strftime()等がカレントのロケールを使用するように指示する

0x00000008
====
* use bytes;
* 文字列を強制的にバイト列として扱う

0x00000010
===
* HINT_ARYBASE
* $[
* 配列の最初のインデックスとして0以外を用いる場合にセットする
	* 現在は、VMS向けに非0な値が用意されている

0x00000100
===

* HINT_BLOCK_SCOPE
* ブロックの戻り値の挙動に関するもの？
* perlmonkでも詳しい記述なし

0x00000200
===
* use strict qw(subs);
* ベアワードの禁止

0x00000400
===
* use strict qw(vars);
* 宣言していない変数の使用を禁止

0x00000800
===
* HINT_UNI_8_BIT
* Unicode関連

0x00001000〜0x00010000
===
* HINT_NEW_(INTEGER|FLOAT|BINARY|STRING|RE)
* overload プラグマで利用

0x00020000
===
* %^H をコピーして退避するように指示

0x00040000
===
* ${^OPEN} が入力用にセットされている
	* ${^OPEN}はPerlIOが内部的に使用する変数で、“\0”で区切られた2つの値を保持している。1つめの値が入力、２つめの値が出力

0x00080000
===
* ${^OPEN} が出力用にセットされている

0x00100000
===
* re pragma
* 正規表現の挙動を変える
* use re 'taint';
* 正規表現の対象文字列が汚染されている場合に、正規表現が返す値も汚染データとして扱う

0x00200000
===
* re pragma
* use re 'eval';
* 変数展開を含む正規表現でも(?{ ... }) を使える


0x00400000
===
* filetest pragma
* use filetest;
* ファイルテスト演算子(-r -w -x -R -W -X)の挙動を変える

0x00800000
===
* utf8 pragma
* use utf8;
* スクリプトがutf8で書かれていることをPerlに伝える

0x01000000
===
* overloading pragma
* use overloading;
* レキシカルスコープでオーバーロードのON/OFFを制御

0x02000000
===
* re pragma
* use re '/xism';#flags mode
* 自動で正規表現に'xsim'フラグが付与される




