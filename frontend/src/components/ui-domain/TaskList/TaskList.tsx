import { forwardRef } from "react"
import { TextLabel } from "../TextLabel/TextLabel"
import { Button } from "../Button/Button"
import styles from "./styles.module.css"
import { StatusLabel } from "../StatusLabel/StatusLabel"
import { Todo } from "../../../entity/Todo"

type Props = {
  todo: Todo
  deleteTask: (taskId: number) => void
} & React.ComponentPropsWithRef<"li">

export const TaskList = forwardRef(({ todo, deleteTask, ...props }: Props) => {
  return (
    <li {...props} className={styles.module}>
      <div>
        <StatusLabel isDone={todo.isDone} />
        <TextLabel label={todo.name} />
      </div>
      <div>
        {todo.isDone ? (
          <Button label={"未完了に戻す"} />
        ) : (
          <Button label={"完了にする"} />
        )}
        <Button label={"削除"} onClick={() => deleteTask(todo.id)} />
      </div>
    </li>
  )
})
