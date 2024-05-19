import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { TaskLists } from "./TaskLists"
import { Todo } from "../../../entity/Todo"

const setup = () => {
  const todos: Array<Todo> = [
    {
      id: 1,
      name: "タスク1",
      isDone: true,
      createdAt: "1111/22/33-22:33:44",
      updatedAt: "1111/22/33-22:33:44",
    },
    {
      id: 2,
      name: "タスク2",
      isDone: false,
      createdAt: "1111/22/33-22:33:44",
      updatedAt: "1111/22/33-22:33:44",
    },
  ]
  return {
    todos,
  }
}

describe("ui-domain/TaskLists", () => {
  const { todos } = setup()
  it("[role='list']", () => {
    render(<TaskLists todos={todos} />)
    expect(screen.getByRole("list")).toBeInTheDocument()
    expect(screen.getByText("タスク1")).toBeTruthy()
  })
})
