# Hachioji.pm #64
### Feb. 25, 2016

---
# About me
## Hideaki Ohno
### A.K.A. hide\_o\_55 / hideo55
### Perl / C++ / Node.js / Go

---

# 快適なRust開発環境を求めて

---

# 前提

* Vimmer

---
# Vim
* シンタックスハイライト、コードフォマットに関しては公式で用意されている
  * rust.vim
    * https://github.com/rust-lang/rust.vim

---

# ctags
* 関数定義へのジャンプ
  * rusty-tags
    * https://github.com/dan-t/rusty-tags
    * `cargo install rusty-tags`

---
# Lint

* 静的解析によるコードチェックツール
  * rust-clippy
    * チェック項目は設定ファイル(TOML)で指定できる
    * 循環複雑度のチェックもできる

---
# 補完

* racer
    * 独立した補完ツール
        * vim以外のIDEでも使える
    * vim-racer
        * https://github.com/racer-rust/vim-racer


---

# コードフォーマッタ

* rustfmt
  * Rust style guidelinesに従ってコードを整形する

---

# まとめ

* ここまで上げたもの + quickrunでだいたい快適な環境にできる(C++もこれと似たような構成で書いてるので)