import { forwardRef } from "react"
import { TextLabel } from "../TextLabel/TextLabel"
import { Button } from "../Button/Button"
import styles from "./styles.module.css"
import { StatusLabel } from "../StatusLabel/StatusLabel"

type Props = {
  label: string
  isDone: boolean
} & React.ComponentPropsWithRef<"li">

export const TaskList = forwardRef(({ label, isDone, ...props }: Props) => {
  return (
    <li {...props} className={styles.module}>
      <div>
        <StatusLabel isDone={isDone} />
        <TextLabel label={label} />
      </div>
      <div>
        {isDone ? (
          <Button label={"未完了に戻す"} />
        ) : (
          <Button label={"完了にする"} />
        )}
        <Button label={"削除"} />
      </div>
    </li>
  )
})
