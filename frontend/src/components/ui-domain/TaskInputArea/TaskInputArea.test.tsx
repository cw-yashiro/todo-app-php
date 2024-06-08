import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it } from "vitest"
import { TaskInputArea } from "./TaskInputArea"

const user = userEvent.setup()

describe("ui-domain/TaskInputArea", () => {
  // window.alertの元の挙動を保存
  const originalAlert = window.alert

  // モックされたタスクを作る関数
  let postTask = () => {}

  beforeEach(() => {
    // 各テストの前にwindow.alertをモック化
    window.alert = vi.fn()
    postTask = vi.fn(() => {})
  })

  afterEach(() => {
    // 各テストの後にwindow.alertを元に戻す
    window.alert = originalAlert
  })

  it("正常系:タスクを入力した後にタスク作成ボタンを押すと postTask 関数が呼ばれ、フォームがクリアされる", async () => {
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

  it("異常系:タスクを入力しないまま、タスク作成ボタンを押すとエラーが表示される", async () => {
    render(<TaskInputArea postTask={postTask} />)

    // formに文字を入力しない
    // "タスクを生成する"ボタンをクリックする
    const createButton = screen.getByRole("button")
    await user.click(createButton)

    expect(window.alert).toBeCalled()
    expect(postTask).not.toBeCalled()
  })

  it("異常系:文字数が256字以上のタスクを入力して、タスク作成ボタンを押すとエラーが表示される", async () => {
    render(<TaskInputArea postTask={postTask} />)

    // form要素を取得するしてダミーテキストを挿入する
    const textarea = screen.getByRole("textbox")
    const taskText =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUV"
    await user.type(textarea, taskText)

    expect(screen.getByDisplayValue(taskText)).toBeInTheDocument()

    // "タスクを生成する"ボタンをクリックする
    const createButton = screen.getByRole("button")
    await user.click(createButton)

    expect(window.alert).toBeCalled()
    expect(postTask).not.toBeCalled()
  })
})
