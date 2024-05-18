import { forwardRef } from "react"

type Props = React.ComponentPropsWithRef<"textarea">;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ ...props }, ref) => {
  return (
    <textarea {...props} ref={ref} />
  )
})