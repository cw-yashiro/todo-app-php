import { TaskLists } from "./TaskLists"

export default {
  title: "ui-domain/TaskLists",
  component: TaskLists,
}

export const Default = {
  args: {
    todos: [
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
    ],
  },
}
