Hachioji.pm #36
===

2013-12-21

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

Lexical subroutine
---

Lexical subroutine
---

<!-- data-roty=90 -->

* perl 5.18で導入
* レキシカルスコープでのみ有効なサブルーチン

```
my sub foo {
    ...
};
```

Lexical subroutine
----

```
package Foo;
my sub bar {
    ...
}
sub baz {
    bar(); # OK
}
package main;
Foo::bar(); => Undefined subroutine &Foo::bar ...
```

Lexical subroutine
----


```
my sub foo {
	...
}
sub bar {
	my $self = shift;
	$self->foo(); #Can't locate object method
}
```

Lexical subroutine
----
```
my sub foo {
	...
}
sub bar {
	my $self = shift;
	$self->${\\&foo}();
}
```

Lexical subroutine
----

```
my sub foo {
	...
}
sub bar {
	my $self = shift;
	my $coderef = \&foo:
	$self->$coderef();
}
```

Class::Accessor::Lexical
---
```
use Class::Accessor::Lexical ( rw => [qw/foo bar baz/]);
```

Class::Accessor::Lexical
---
* Exporter::Lexicalだとダメ
	* Bizarre copy of CODE in reference constructor
* XSで細工してクロージャが拘束してる変数を保持してやらないといけない
