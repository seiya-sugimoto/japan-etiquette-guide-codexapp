# Premium 本課金設計メモ

このドキュメントは `Japan Etiquette Guide` の Premium を、

- 何を売るか
- どう課金するか
- どの順で実装するか
- どの状態なら一度リリースしてよいか

まで具体化するための日本語メモです。

前提は、シリコンバレー的な `fail fast` の考え方に近く、

- 完璧になるまで閉じるのではなく
- 信頼を壊さない最低ラインを超えたら出す
- その後、反応を見ながら修正する

です。

## 1. まず決めること

最初の本課金は、**サブスクではなく買い切り 1 商品** で始めるのがよいです。

理由:

- 実装が単純
- ユーザーに分かりやすい
- 小さく試して学びやすい
- 審査や説明もシンプル

最初の案:

- 商品名: `Japan Etiquette Guide Premium`
- 形式: `lifetime unlock`
- 想定価格帯: `¥1,200〜¥1,800`

おすすめ初期価格:

- **第一候補: `¥1,480`**
- やや低めに試すなら `¥1,200`
- 最初から高く見せたいなら `¥1,800`

このアプリは「毎日使うツール」より「旅行準備〜旅行中に頼るガイド」に近いので、最初はサブスクより買い切りの納得感が強いです。

## 2. 何を売るか

最初の有料価値は、次の 3 本柱で構成するのが自然です。

### A. Premium Packs

今すでにある 4 packs を主軸にする。

- `Special Stays`
- `Social & Nightlife`
- `Events & Crowds`
- `Independent Travel`

### B. Deep Dive

各 pack に対して、

- 背景理解
- 気まずくなりやすい場面
- 使いやすいひとこと
- 行動前チェック

を追加価値として見せる。

### C. Recommended Paths

Premium unlocked 後に、

- 最初に見るならここ
- 旅行タイプ別のおすすめ導線

があることで、買った直後の迷いを減らす。

## 3. 無料と有料の線引き

このアプリでは、**無料を弱くして売る** のではなく、**有料を厚くして売る** 方が合っています。

### 無料に残す

- 69シーンの基本本文
- 初回旅行で困りやすい主要シーン
- Quick View / Do / Avoid / Why it matters / Common mistakes

### 有料で強くする

- premium-only シーン
- preview シーンの追加 deep dive
- pack 単位のまとまり
- phrase cards
- より深い文化背景

つまり、

- 無料: 「初めての旅行なら十分助かる」
- 有料: 「でも買うと一段深く、迷わず、自然に動ける」

の差を作る。

## 4. 本課金の最初の商品設計

初回リリースでは商品を増やしすぎない。

### 初期商品

- 1商品だけ
- `Premium Lifetime`

### まだやらないもの

- 月額課金
- 年額課金
- 複数商品
- 期間限定オファー
- クーポン前提の設計

最初は、

- 買うか
- 買わないか

だけにして、どこに friction があるかを観察する方がよいです。

## 5. 実装方式

Expo アプリで本課金を入れるなら、**RevenueCat を前提にする** のが一番現実的です。

構成イメージ:

- App Store Connect
  - IAP 商品を 1 つ作成
- RevenueCat
  - entitlement: `premium`
  - product: `premium_lifetime`
- App
  - `isPremium` を RevenueCat の entitlement で判定

### 推奨 product / entitlement 命名

- Product ID: `japan_etiquette_premium_lifetime`
- Entitlement: `premium`

## 6. 画面の状態

本課金後も画面状態は 3 つに保つのがよいです。

### 1. Preview

未購入ユーザーが Premium タブで見る状態。

表示するもの:

- Premium で何が増えるか
- pack ごとの価値
- 旅行タイプ別のおすすめ
- 購入 CTA

### 2. Locked

未購入ユーザーが premium-only シーンを開いた状態。

表示するもの:

- このシーンで何が分かるか
- 何が追加で開くか
- Premium への導線

### 3. Unlocked

購入済みユーザー状態。

表示するもの:

- Premium packs
- Deep dive
- phrase cards
- recommended start

ここでは、**売り込み感を消して「使えるホーム」にする** のが大事です。

## 7. fail-fast 向けのリリース条件

「完璧でなくても出す」ために、最低ラインを決めておきます。

### 出してよい最低条件

1. 課金購入が通る
2. Restore Purchases が通る
3. 未購入 / 購入済みの出し分けが崩れない
4. Premium タブが preview / unlocked で自然に見える
5. premium-only シーンでロック表示が破綻しない
6. 購入後に即アンロックが反映される
7. 少なくとも `en / ja` では違和感なく使える

### まだ未完成でも許容できること

- pack 文言の細かい磨き込み
- 一部言語の copy polish
- おすすめ順の改善
- 一部の deep dive 追加

## 8. リリースしない方がいい状態

以下なら、まだ出さない方がよいです。

- 購入できるのに unlock 反映が不安定
- restore が壊れている
- 無料ユーザーが何を買うのか分からない
- 購入後の見た目が preview とほぼ同じ
- 課金導線だけ強く、中身の差が薄い

## 9. 初回リリース後に見る数字

fail-fast で行くなら、最初の数値観測ポイントを決めておくとよいです。

### 最低限ほしいイベント

- `premium_screen_view`
- `premium_pack_open`
- `premium_cta_tap`
- `premium_purchase_start`
- `premium_purchase_success`
- `premium_restore_start`
- `premium_restore_success`
- `premium_locked_scene_view`

### 初回で見たいこと

1. Premium タブを見た人のうち何%が CTA を押すか
2. CTA を押した人のうち何%が購入完了するか
3. どの pack が最も開かれているか
4. どの premium-only シーンが最もロック到達されているか

## 10. 初回リリース後の判断基準

### 良い反応なら

- 価格は維持
- packs を増やす
- convenience layer を強くする

### 反応が弱いなら

次のどれかを試す。

- 価格を少し下げる
- CTA 文言を改善する
- Premium で増える内容の見せ方を改善する
- `Business` や `Long-Stay` など、より分かりやすい pack を追加する

### かなり弱いなら

- 「deep dive を売る」より
- 「旅行を楽にする convenience を売る」

方向へ寄せる。

## 11. 実装順

### Slice 1

- RevenueCat 導入
- 開発環境で purchase state 接続
- mock state から本 state へ切替

### Slice 2

- Preview / Locked / Unlocked の本接続
- purchase / restore ボタン実装
- エラーハンドリング

### Slice 3

- イベント計測追加
- paywall 文言微調整
- 実機 QA

### Slice 4

- App Store Connect 設定
- TestFlight で購入確認
- リリース判定

## 12. 今のおすすめ結論

今の `Japan Etiquette Guide` では、最初の本課金はこうするのが一番自然です。

- 商品は 1 つだけ
- 買い切り
- 価格は `¥1,480` から開始
- Premium の価値は
  - packs
  - deep dive
  - phrase cards
  - recommended paths
- fail-fast で一度 TestFlight / 初回リリースまで持っていく
- その後、数値と使用感を見て直す

## 13. 次にやるべきこと

次の具体タスクはこの順です。

1. RevenueCat 前提の技術設計メモを作る
2. App Store Connect 用の商品定義を決める
3. `purchase / restore / unlocked` の本接続実装に入る

