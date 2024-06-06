import { useRef } from "react"
import { Button } from "../Button/Button"
import { TextArea } from "../TextArea/TextArea"

interface Props {
  postTask: (name: string) => void
}

export const TaskInputArea = ({ postTask }: Props) => {
  const formRef = useRef(null)
  const createTask = () => {
    const formVal = formRef.current
    if (formVal === undefined || formVal === null) {
      return
    }
    const inputText = (formVal as HTMLInputElement).value
    if (inputText.length < 1 || inputText.length > 255) {
      alert("文字数エラー")
      return
    }
    postTask(inputText)
    clearForm()
  }

  const clearForm = () => {
    const formVal = formRef.current
    if (formVal === undefined || formVal === null) {
      return
    }
    (formVal as HTMLInputElement).value = ""
  }
  return (
    <div>
      <TextArea ref={formRef} />
      <Button onClick={createTask}>タスクを追加する</Button>
    </div>
  )
}
