import { useEffect, useState } from "react"
import { getTodo } from "./fetcher"
import { Todo } from "../../../entity/Todo"
import { TaskLists } from "../../ui-domain/TaskLists/TaskLists"
import styles from "./styles.module.css"
import { TaskInputArea } from "../../ui-domain/TaskInputArea/TaskInputArea"

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
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Todo一覧</h1>
        </div>
        <div className={styles.lists}>
          <TaskLists todos={todos} />
        </div>
        <div className={styles.textarea}>
          <TaskInputArea />
        </div>
      </div>
    </section>
  )
}
