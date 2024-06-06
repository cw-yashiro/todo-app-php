# Laravel Tutorial Todo App

## 成果物のURL

[準備中]

## これは何?
PHPのLaravelを使用して作成したTodoアプリです。
タスクの表示、追加、削除、更新、完了処理ができます。

## 目的

- Laravelを使ったWebアプリケーションの作り方を理解するため
- ORMの使い方を理解するため
- PHPの文法を理解するため

## 動かし方

[準備中]

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
