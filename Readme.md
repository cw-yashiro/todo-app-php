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

## Storybook

コマンドを打つと勝手に起動してくれます

```
yarn storybook
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

### エンドポイント

#### GET `/todos`
タスク一覧を取得する

#### POST `/todos`
タスクを追加する

#### DELETE `/{task_id}`
タスクidがxxxxのタスクを削除する

#### UPDATE `/{task_id}`
タスクidがxxxxのタスクを更新する

### DBテーブルの構成

todoテーブル

```
mysql> desc todos;
+------------+---------------------+------+-----+---------+----------------+
| Field      | Type                | Null | Key | Default | Extra          |
+------------+---------------------+------+-----+---------+----------------+
| id         | bigint(20) unsigned | NO   | PRI | NULL    | auto_increment |
| name       | char(255)           | NO   |     | NULL    |                |
| is_done    | tinyint(1)          | NO   |     | NULL    |                |
| created_at | timestamp           | YES  |     | NULL    |                |
| updated_at | timestamp           | YES  |     | NULL    |                |
+------------+---------------------+------+-----+---------+----------------+
```

### 各種画面

<img src="https://raw.githubusercontent.com/cw-yashiro/todo-app-php/10e10614e14673b67543aabcacfcf4bd99f2eb5b/docs/image/todo-page.png" width="700">
