import { forwardRef } from "react"
import { TextLabel } from "../TextLabel/TextLabel"
import { Button } from "../Button/Button"
import styles from "./styles.module.css"
import { StatusLabel } from "../StatusLabel/StatusLabel"
import { Todo } from "../../../entity/Todo"

type Props = {
  todo: Todo
  updateTask: (taskId: number, name: string, isDone: boolean) => void
  deleteTask: (taskId: number) => void
} & React.ComponentPropsWithRef<"li">

export const TaskList = forwardRef(
  ({ todo, updateTask, deleteTask, ...props }: Props) => {
    return (
      <li {...props} className={styles.module}>
        <div>
          <StatusLabel isDone={todo.isDone} />
          <TextLabel>{todo.name}</TextLabel>
        </div>
        <div>
          {todo.isDone ? (
            <Button onClick={() => updateTask(todo.id, todo.name, false)}>
              未完了に戻す
            </Button>
          ) : (
            <Button onClick={() => updateTask(todo.id, todo.name, true)}>
              完了にする
            </Button>
          )}
          <Button onClick={() => deleteTask(todo.id)}>削除</Button>
        </div>
      </li>
    )
  }
)
