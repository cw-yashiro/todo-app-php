import { forwardRef } from "react"
import { TextLabel } from "../TextLabel/TextLabel"
import { Button } from "../Button/Button"
import styles from "./styles.module.css"

type Props = {
  label: string
  isDone: boolean
} & React.ComponentPropsWithRef<"li">

export const TaskList = forwardRef(({ label, isDone, ...props }: Props) => {
  return (
    <li {...props} className={styles.module}>
      <TextLabel label={label} />
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
