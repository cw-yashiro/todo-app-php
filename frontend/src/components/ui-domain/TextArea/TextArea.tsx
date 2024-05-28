import { forwardRef } from "react"
import style from "./style.module.css"

type Props = React.ComponentPropsWithRef<"textarea">

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ ...props }, ref) => {
    return <textarea className={style.module} {...props} ref={ref} rows={3} />
  }
)
