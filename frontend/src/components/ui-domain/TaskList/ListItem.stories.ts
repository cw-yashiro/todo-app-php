import { TaskList } from "./TaskList"

export default {
  title: "ui-domain/TaskList",
  component: TaskList,
}

export const Default = {
  args: {
    label: "タスク",
    isDone: true,
  },
}
