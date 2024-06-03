import { forwardRef } from "react"

type Props = {
  label: string
} & React.ComponentPropsWithRef<"label">

export const TextLabel = forwardRef(({ label, ...props }: Props) => {
  return <label {...props}>{label}</label>
})
