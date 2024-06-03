import { forwardRef } from "react"
import { TextLabel } from "../TextLabel/TextLabel"
import styles from "./styles.module.css"

type Props = {
  isDone: boolean
} & React.ComponentPropsWithRef<"div">

export const StatusLabel = forwardRef(({ isDone, ...props }: Props) => {
  return (
    <div {...props} className={styles.module} data-is-done={isDone}>
      <TextLabel>{isDone ? "完了" : "未完了"}</TextLabel>
    </div>
  )
})
