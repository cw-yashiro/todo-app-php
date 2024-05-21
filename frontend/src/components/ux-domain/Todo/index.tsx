import { useEffect, useState } from "react"
import { TextArea } from "../../ui-domain/TextArea/TextArea"
import { getTodo } from "./fetcher"
import { Todo } from "../../../entity/Todo"
import { TaskLists } from "../../ui-domain/TaskLists/TaskLists"

export const TodoPage = () => {
  const [todos, setTodos] = useState<Array<Todo>>([])
  useEffect(() => {
    getTodo().then((data: Array<Todo> | void) => {
      if (!data) {
        return
      }
      setTodos(data)
    })
  }, [])
  return (
    <section>
      <h1>Todo一覧</h1>
      <TaskLists todos={todos} />
      <TextArea />
    </section>
  )
}
