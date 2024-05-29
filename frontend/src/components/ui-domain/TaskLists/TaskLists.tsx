import { forwardRef } from "react"
import { TaskList } from "../TaskList/TaskList"
import { Todo } from "../../../entity/Todo"
import styles from "./styles.module.css"

type Props = {
  todos: Array<Todo>
  deleteTask: (taskId: number) => void
} & React.ComponentPropsWithRef<"ul">

export const TaskLists = forwardRef(
  ({ todos, deleteTask, ...props }: Props) => {
    return (
      <ul className={styles.module} {...props}>
        {todos.map((todo: Todo, index: number) => {
          return (
            <TaskList
              todo={todo}
              key={`todo-list-item-${todo.id}-${index}`}
              deleteTask={deleteTask}
            />
          )
        })}
      </ul>
    )
  }
)
