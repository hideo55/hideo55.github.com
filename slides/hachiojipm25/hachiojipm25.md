Hachioji.om #25
===

2013-01-19

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

さいきんやったこと
---

* npmモジュールの最新版対応
	* uv_queue_work()のAPI変更対応 
	* kytea 
	* murmurhash3


テーマ
---

試験(テスト)

Perlのテストでよくやってること
---


Proveプラグイン
---

対サーバのテストでは、proveプラグインを使って、prove起動時にテスト用サーバを起動


例：ArangoDB用のproveプラグイン
---
```
sub load {
	...
    $ARANGODB = Test::TCP->new(
        code => sub {
            my $port = shift;
            diag "Starting arangod on 127.0.0.1:$port";
            my $dir = $TMP_DIR->dirname;
            exec "arangod --server.endpoint tcp://127.0.0.1:$port $dir";
        }
    );
    $ENV{TEST_ARANGODB_PORT} = $ARANGODB->port;
    ...
}
```

Build.PL
---
```
my $class = Module::Build->subclass( code  => <<'END_OF_CODE' );
sub ACTION_test {
    my $self = shift;
    require App::Prove;
    my $prove = App::Prove->new();
    my @args = qw(--lib -Pt::lib::Prove::Plugin::StartArangoDB);
    $prove->process_args(@args, @{$self->{properties}{test_files}});
    $prove->run();
}
END_OF_CODE
```

その他
---

* 基本的にプレーンなTest::Moreでがんばる	
* no Test::Exception, use Test::Fatal:
* Test::Name::FromLine
* Test::Flatten
* Test::Attribute::AutoLevel

---
だいたい、[Advent Calendar](http://perl-users.jp/articles/advent-calendar/2011/test/)で出尽くしてる感

