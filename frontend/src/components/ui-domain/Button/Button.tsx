import { forwardRef } from "react"
import style from "./style.module.css"

type Props = {
  variant?: "primary" | "secondary" | "danger"
} & React.ComponentPropsWithRef<"button">

export const Button = forwardRef(({ variant = "primary", ...props }: Props) => {
  return <button className={style.module} {...props} data-variant={variant} />
})
