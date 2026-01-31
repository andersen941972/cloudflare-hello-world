# Cloudflare Workers Hello World

シンプルな「Hello World」を返すCloudflare Workerです。

## 🚀 クイックスタート

### ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（ホットリロード対応）
npm run dev
```

開発サーバーが起動したら、ブラウザで `http://localhost:8787` にアクセスしてください。

### デプロイ

```bash
# Cloudflareにログイン（初回のみ）
wrangler login

# 本番環境にデプロイ
npm run deploy
```

## 📁 プロジェクト構成

```
cloudflare-hello-world/
├── src/
│   └── index.js          # Workerのメインコード
├── wrangler.toml         # Wrangler設定ファイル
├── package.json          # Node.js依存関係とスクリプト
├── .gitignore           # Git除外設定
└── README.md            # このファイル
```

## 🔧 カスタマイズ

### レスポンスの変更

`src/index.js` を編集してレスポンスをカスタマイズできます：

```javascript
export default {
  async fetch(request, env, ctx) {
    return new Response('Your custom message!', {
      headers: {
        'content-type': 'text/plain;charset=UTF-8',
      },
    });
  },
};
```

### JSONレスポンス

```javascript
export default {
  async fetch(request, env, ctx) {
    return Response.json({
      message: 'Hello World',
      timestamp: new Date().toISOString()
    });
  },
};
```

## 📚 参考リンク

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Workers Examples](https://developers.cloudflare.com/workers/examples/)

## 📝 ライセンス

MIT
