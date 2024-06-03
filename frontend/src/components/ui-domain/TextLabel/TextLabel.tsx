import { forwardRef } from "react"

type Props = React.ComponentPropsWithRef<"label">

export const TextLabel = forwardRef(({ ...props }: Props) => {
  return <label {...props} />
})
