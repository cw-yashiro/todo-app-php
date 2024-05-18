import { forwardRef } from "react"

type Props = {
  label: string
} & React.ComponentPropsWithRef<"p">

export const TextLabel = forwardRef(({ label, ...props }: Props) => {
  return <p {...props}>{label}</p>
})
