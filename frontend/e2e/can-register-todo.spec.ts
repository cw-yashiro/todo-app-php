import { test, expect } from "@playwright/test"

// TODO: テストごとに条件を同じにするために、DBのリセット処理をできるようにする

test("タスクを登録できる", async ({ page }) => {
  // ページに遷移する
  await page.goto("http://localhost:5173")

  // フォームにタスクを入力する
  const form = page.locator("textarea")
  await form.fill("テストタスク")

  // 追加ボタンを押す
  const button = page.locator("button")
  await button.click()

  // タスク一覧に表示されている
  await expect(page.locator("li")).toContainText("テストタスク")
})
