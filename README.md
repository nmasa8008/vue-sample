# vue-sample

## vue.js バージョン
  v1.0

## やりたかったこと
  * jsonデータをv-forでループしてデータ表示
  * 単純なタブでの表示切り替え

## デモ
  <https://zenver6.github.io/vue-sample/>

## 疑問
  * タブの切替に動的コンポーネントとis属性を使用したが、この程度ならv-ifやv-showのほうがよい？
  * 動的コンポーネントの各テンプレートで使用する可能性がある変数は、componentタグで予め全て渡しておかなければいけない？

  `<component :is="currentView" :pitcher="pitcher" :batter="batter"></component>`

  pitcher : templateAで使用する変数

  batter  : templateBで使用する変数
