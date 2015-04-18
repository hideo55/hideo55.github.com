# Hachioji.pm #49
### Apr. 18, 2015

--- 
# About me
## Hideaki Ohno
### A.K.A. hide\_o\_55 / hideo55
### Perl / C++ / Node.js / Go

---
# Goで簡潔ビットベクトル
---
# 簡潔ビットベクトル
* ビットベクトルに対して以下の操作が可能なデータ構造
	* access(i): ビットベクトルのi番目の値を返す
	* rank(i): 先頭からi番目までの1(または0)の数を返す
		* O(1)で実現可能
	* select(i): i番目に出現する1(または0)の位置を返す
		* O(logN)で実現可能 

---
# 簡潔ビットベクトル
* 簡潔ビットベクトルでデータ構造を作ることでデータサイズを小さくできる
* 例
	* LOUDS
	* Wavelet-Tree 

--- 
# go-sbvector
* https://github.com/hideo55/go-sbvector
* ほぼ、以前書いたC++版の移植
	* 移植ではエラー処理周りが一番面倒 
* 基本的な機能のほかに、LOUDSやWavelet-Matrixなどを実装する際に便利な機能を追加 

---
## go-sbvector

テスト頑張った

![inline](file:///Users/hide/workspace/hideo55.github.com/slides/hachiojipm49/badge.png)