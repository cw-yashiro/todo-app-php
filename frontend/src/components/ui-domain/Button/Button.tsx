import { forwardRef } from "react"

type Props = {
  label: string
} & React.ComponentPropsWithRef<"button">

export const Button = forwardRef(({ label, ...props }: Props) => {
  return (
    <>
      <button {...props}>{label}</button>
    </>
  )
})
