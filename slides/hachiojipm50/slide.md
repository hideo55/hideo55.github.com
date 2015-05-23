# Hachioji.pm #50
### May. 23, 2015

--- 
# About me
## Hideaki Ohno
### A.K.A. hide\_o\_55 / hideo55
### Perl / C++ / Node.js / Go

---
# GoでLOUDS-Trie
---
# LOUDS
* Level-Order Unary Degree Sequence
* 木構造をビット列で表現するデータ構造
* 省メモリで木構造を表現できる
* ビット列には簡潔ビットベクトルを使用することで高速化

---
# LOUDS-Trie
* Trie(接頭辞木)をLOUDSで表現したもの
* Google日本語入力の言語モデルでも使用されている

--- 
# go-loudstrie
* https://github.com/hideo55/go-loudstrie
* 以前書いたC++版の移植
* 完全一致/共通接頭辞/前方一致検索
* traverse(ノードを1つずつたどる)対応
	* 他の実装だと公開IFになっていないことがある
* ノードIDからキーの逆引き

---
## go-loudstrie

* 簡潔ビットベクトルにはgo-sbvectorを使用
* encoding.BinaryMarshaler/encoding.BinaryUnmarshalerを実装予定