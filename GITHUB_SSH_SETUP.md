# GitHub SSH Key Setup Instructions

## 🔑 SSH公開鍵

以下の公開鍵をGitHubに登録してください：

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGsJEnlatKgCk06yIc8gIpP4zqnP/GJVa+PPueAKv245 Andy70faes459@gmail.com
```

## 📝 GitHubへの登録手順

1. **GitHubにログイン**
   - https://github.com にアクセス
   - ユーザー名: `andersen941972` でログイン

2. **SSH鍵の登録ページを開く**
   - 右上のプロフィールアイコンをクリック
   - **Settings** を選択
   - 左サイドバーの **SSH and GPG keys** をクリック
   - **New SSH key** ボタンをクリック

3. **SSH鍵を追加**
   - **Title**: `VPS Server - Cloudflare Workers Dev` (任意の名前)
   - **Key**: 上記の公開鍵をコピー＆ペースト
   - **Add SSH key** をクリック

4. **パスワードで確認**
   - GitHubパスワードの入力を求められた場合は入力

## ✅ 接続テスト

SSH鍵を登録後、以下のコマンドで接続をテストしてください：

```bash
ssh -T git@github.com
```

成功すると以下のようなメッセージが表示されます：
```
Hi andersen941972! You've successfully authenticated, but GitHub does not provide shell access.
```

## 📤 GitHubリポジトリの作成とプッシュ

### 1. GitHubでリポジトリを作成

1. https://github.com/new にアクセス
2. リポジトリ名: `cloudflare-hello-world`
3. Description: `Hello World Cloudflare Worker`（任意）
4. Public または Private を選択
5. **「Initialize this repository with a README」はチェックしない**
6. **Create repository** をクリック

### 2. リモートリポジトリを追加してプッシュ

SSH鍵の登録と接続テストが完了したら、以下のコマンドを実行：

```bash
cd /home/devuser/cloudflare-hello-world

# リモートリポジトリを追加
git remote add origin git@github.com:andersen941972/cloudflare-hello-world.git

# プッシュ
git push -u origin main
```

## 🎉 完了

プッシュが成功すると、GitHubリポジトリページでプロジェクトファイルが確認できます：

https://github.com/andersen941972/cloudflare-hello-world

---

## 🔧 トラブルシューティング

### Permission denied (publickey)

SSH鍵が正しく登録されていない可能性があります。以下を確認：

```bash
# SSH鍵が存在するか確認
ls -la ~/.ssh/

# 公開鍵を再表示
cat ~/.ssh/id_ed25519.pub
```

### SSH接続テストが失敗する

```bash
# 詳細なデバッグ情報を表示
ssh -vT git@github.com
```

### HTTPSを使用する場合

SSH鍵の設定が難しい場合、HTTPSとPersonal Access Tokenを使用：

```bash
# リモートをHTTPSに変更
git remote set-url origin https://github.com/andersen941972/cloudflare-hello-world.git

# プッシュ（Personal Access Tokenを入力）
git push -u origin main
```

Personal Access Tokenの作成：
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. `repo` スコープを選択
4. トークンをコピーして保存
