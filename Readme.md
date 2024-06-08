# Todo App

## これは何?
PHPのLaravelを使用して作成したTodoアプリです。
タスクの表示、追加、削除、更新、完了処理ができます。

## 目的

- PHPの文法を学習するため
- Laravelでの開発方法を学ぶため
- WebFrontendのテスト方法を学ぶため

## 動かし方

### コードのクローン

```
git clone https://github.com/cw-yashiro/todo-app-php.git
```

アプリのディレクトリに移動
```
cd todo-app-php
```

### バックエンド側のセットアップ

backendディレクトリに移動
```
cd backend
```

dockerコンテナの立ち上げ
```
docker compose up -d
```

ポートがかぶると動かないので適宜ずらしてください

### フロントエンド側のセットアップ

Nodejs, yarnが必要です。

frontendディレクトリに移動
```
cd ../frontend
```

依存パッケージのインストール
```
yarn
```

開発モードで起動
```
yarn dev
```

## テスト

現状ではフロントエンド側のみにテストを実装しています

テストの実行
```
yarn test
```

## Snapshotテストについて

スナップショットの更新は以下のコマンドか`watch`モード中に`u`を押下する。

```
npx vitest -u
```

## 仕様

### エンドポイント(暫定)

#### GET `/`
タスク一覧を取得する

#### POST `/task`
タスクを追加する

#### DELETE `/?task_id=xxxx`
タスクidがxxxxのタスクを削除する

#### UPDATE `/?task_id=xxxx`
タスクidがxxxxのタスクを更新する

### DBテーブルの構成

todoテーブル

|id|name|is_done|created_at|updated_at|
|--|----|-------|----------|----------|
|Primary key, Auto increment|varchar(256)|varchar(2)|datetime|datetime|

### 各種画面

[準備中]

## 参考にしたサイトや文献

[準備中]
