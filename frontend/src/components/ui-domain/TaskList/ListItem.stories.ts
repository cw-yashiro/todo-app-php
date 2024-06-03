import { TaskList } from "./TaskList"

export default {
  title: "ui-domain/TaskList",
  component: TaskList,
}

export const Default = {
  args: {
    todo: {
      id: 0,
      name: "タスク",
      isDone: true,
      createdAt: "2024/09/15 22:33:44",
      updatedAt: "2024/09/15 22:33:44",
    },
  },
}
