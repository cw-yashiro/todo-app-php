import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it } from "vitest"
import { TaskInputArea } from "./TaskInputArea"

const user = userEvent.setup()

describe("ui-domain/TaskInputArea", () => {
  it("正常系:タスクを入力した後にタスク作成ボタンを押すと postTask 関数が呼ばれ、フォームがクリアされる", async () => {
    const postTask = vi.fn(() => {})
    render(<TaskInputArea postTask={postTask} />)

    // form要素を取得するしてダミーテキストを挿入する
    const textarea = screen.getByRole("textbox")
    const taskText = "テストタスク"
    await user.type(textarea, taskText)

    expect(screen.getByDisplayValue(taskText)).toBeInTheDocument()

    // "タスクを生成する"ボタンをクリックする
    const createButton = screen.getByRole("button")
    await user.click(createButton)

    expect(postTask).toBeCalled()
  })

  it("異常系:タスクを入力しないまま、タスク作成ボタンを押すとエラーが表示される", () => {})

  it("異常系:文字数が256字以上のタスクを入力して、タスク作成ボタンを押すとエラーが表示される", () => {})
})
