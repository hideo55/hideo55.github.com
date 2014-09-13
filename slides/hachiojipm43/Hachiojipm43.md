# Hachioji.pm #43

--- 
# About me
## Hideaki Ohno
### A.K.A. hide\_o\_55 / hideo55
### Perl / C++ / Node.js
---
## LOUDS-Trieライブラリを
## 作った話
---
## LOUDS-Trieとは
---
## Trieをコンパクトに表現できるデータ構造
---
## LOUDS=Level-Order Unary Degree Sequence
---
## ノードをビット列で表現
---

## ビット列は簡潔ビットベクトルを利用
---

## 簡潔ビットベクトル
* access(i): ビットベクトルのi番目の値を返す
* rank(i): 先頭からi番目までの1(または0)の数を返す
* select(i): i番目に出現する1(または0)の位置を返す

---
##LOUDSの利用事例
---
## Google日本語入力
---

##作ったやつ
### https://github.com/hideo55/cpp-HSDS

---
## 特徴
### 以下の機能をサポート
* 完全一致検索
* 共通接頭辞検索
* 前方一致検索
* ノードのトラバース

---

## 特徴
### 高速化した完備辞書
* selectを高速化するための辞書を内部にもつ
* SSE4.2(POPCNT)対応
* 使える場合は組み込み命令を使用

---
## 特徴
### mmap対応
---
## 以上
