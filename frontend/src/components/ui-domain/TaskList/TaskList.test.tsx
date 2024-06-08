import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TaskList } from "./TaskList"

const user = userEvent.setup()

describe("ui-domain/TaskList", () => {
  let updateTask = () => {}
  let deleteTask = () => {}

  const setup = () => {
    const todo = {
      id: 1,
      name: "テストタスク1",
      isDone: true,
      createdAt: "2023/09/15T22:33:44",
      updatedAt: "2023/09/15T22:33:44",
    }
    return { todo }
  }

  beforeEach(() => {
    updateTask = vi.fn()
    deleteTask = vi.fn()
  })

  // TODO: 表示部分のテストを実装する

  it("正常系:更新ボタン", async () => {
    const { todo } = setup()
    render(
      <TaskList updateTask={updateTask} deleteTask={deleteTask} todo={todo} />
    )

    await user.click(screen.getByRole("button", { name: "未完了に戻す" }))

    expect(updateTask).toBeCalled()
  })

  it("正常系:削除ボタン", async () => {
    const { todo } = setup()
    render(
      <TaskList updateTask={updateTask} deleteTask={deleteTask} todo={todo} />
    )

    await user.click(screen.getByRole("button", { name: "削除" }))

    expect(deleteTask).toBeCalled()
  })
})
