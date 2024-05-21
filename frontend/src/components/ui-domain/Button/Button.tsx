import { forwardRef } from "react"
import style from "./style.module.css"

type Props = {
  label: string
  variant?: "primary" | "secondary" | "danger"
} & React.ComponentPropsWithRef<"button">

export const Button = forwardRef(
  ({ label, variant = "primary", ...props }: Props) => {
    return (
      <button className={style.module} {...props} data-variant={variant}>
        {label}
      </button>
    )
  }
)
