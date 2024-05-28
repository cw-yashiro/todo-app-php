import { Button } from "../Button/Button"
import { TextArea } from "../TextArea/TextArea"

export const TaskInputArea = () => {
  return (
    <div>
      <TextArea />
      <Button label="タスクを追加する" />
    </div>
  )
}
