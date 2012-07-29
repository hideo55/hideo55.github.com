Takao.mt 2012
===

2012-07-28

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


やったー! ArangoDBの<br />Perlクライアントが<br />できたよ!＼(^o^)／
---

ArangoDB
---
* AvocadoDBから改名
* Schema Free
* KVS/DocumentDB/GraphDB
* シェルはJavaScript
* REST API
* AQL(ArangoDB Query Language)

ArangoDB with Perl
---
```
my $db = ArangoDB->new({ 
    host => 'localhost' 
});
my $coll = $db->create('foo');
my $doc = $coll->save({ 
    bar => 'baz', qux => 'quxx' 
});
my $docs = $coll->first_by_example({ 
    bar => 'baz' 
});
```

ArangoDB with Perl	
---
* APIは本家の形式を踏襲
* コレクション、ドキュメント周りはほぼ完了
* エッジ、AQL、カーソルはこれから

Fin
---
<!--  data-rotz=90 -->
