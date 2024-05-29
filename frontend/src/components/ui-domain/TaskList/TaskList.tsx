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
          <TextLabel label={todo.name} />
        </div>
        <div>
          {todo.isDone ? (
            <Button
              label={"未完了に戻す"}
              onClick={() => updateTask(todo.id, todo.name, false)}
            />
          ) : (
            <Button
              label={"完了にする"}
              onClick={() => updateTask(todo.id, todo.name, true)}
            />
          )}
          <Button label={"削除"} onClick={() => deleteTask(todo.id)} />
        </div>
      </li>
    )
  }
)
