# TypeScript における型安全な HTTP リクエスト検証
[Aspida](https://github.com/aspida/aspida) と [Zod](https://github.com/colinhacks/zod) の組み合わせで、型安全な HTTP リクエスト実装の検証をやってみたやつ。

## 環境
Base
- Node.js：16.13.0
- TypeScript：4.5.5
- Next.js：12.0.9

Lib
- Aspida（@aspida/fetch）
- Zod

## セットアップ
ライブラリインストール & Pre Commit 設定
```
yarn install
```

ローカルサーバ起動 & aspida 監視モード
```
yarn dev
```
