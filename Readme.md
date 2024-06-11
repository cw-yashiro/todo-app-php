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

テストカバレッジの出力

```
yarn coverage
```

カバレッジ出力の例

```
 % Coverage report from istanbul
----------------------------------------|---------|----------|---------|---------|-------------------
File                                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------------------|---------|----------|---------|---------|-------------------
All files                               |   35.22 |       60 |   30.76 |   35.22 |                   
 src                                    |       0 |      100 |       0 |       0 |                   
  App.tsx                               |       0 |      100 |       0 |       0 | 5                 
  main.tsx                              |       0 |      100 |     100 |       0 | 7                 
 src/components/ui-domain/Button        |   66.66 |      100 |      50 |   66.66 |                   
  Button.stories.ts                     |       0 |      100 |       0 |       0 | 8                 
  Button.tsx                            |     100 |      100 |     100 |     100 |                   
 src/components/ui-domain/StatusLabel   |   66.66 |      100 |     100 |   66.66 |                   
  StatusLabel.stories.ts                |       0 |      100 |     100 |       0 | 8                 
  StatusLabel.tsx                       |     100 |      100 |     100 |     100 |                   
 src/components/ui-domain/TaskInputArea |   84.21 |    83.33 |     100 |   84.21 |                   
  TaskInputArea.stories.ts              |       0 |      100 |     100 |       0 | 8                 
  TaskInputArea.tsx                     |   88.88 |    83.33 |     100 |   88.88 | 14,28             
 src/components/ui-domain/TaskList      |   66.66 |      100 |      75 |   66.66 |                   
  ListItem.stories.ts                   |       0 |      100 |     100 |       0 | 8                 
  TaskList.tsx                          |      80 |      100 |      75 |      80 | 28                
 src/components/ui-domain/TaskLists     |      75 |      100 |     100 |      75 |                   
  TaskLists.stories.ts                  |       0 |      100 |     100 |       0 | 8                 
  TaskLists.tsx                         |     100 |      100 |     100 |     100 |                   
 src/components/ui-domain/TextArea      |   66.66 |      100 |     100 |   66.66 |                   
  TextArea.stories.ts                   |       0 |      100 |     100 |       0 | 8                 
  TextArea.tsx                          |     100 |      100 |     100 |     100 |                   
 src/components/ui-domain/TextLabel     |   66.66 |      100 |     100 |   66.66 |                   
  TextLabel.stories.ts                  |       0 |      100 |     100 |       0 | 8                 
  TextLabel.tsx                         |     100 |      100 |     100 |     100 |                   
 src/components/ux-domain/Todo          |       0 |        0 |       0 |       0 |                   
  fetcher.ts                            |       0 |      100 |       0 |       0 | 4-80              
  index.tsx                             |       0 |        0 |       0 |       0 | 8-44              
----------------------------------------|---------|----------|---------|---------|-------------------
```

`frontend/coverage`ディレクトリにテストカバレッジのhtmlが出力される

<img src="https://raw.githubusercontent.com/cw-yashiro/todo-app-php/6745d36564d025fe8d2eec9481ef15026231ff2c/docs/image/frontend-test-coverage-html.png" width="700">

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
