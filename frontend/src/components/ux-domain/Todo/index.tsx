import { useEffect, useState } from "react"
import { getTodo, createTodo, updateTodo, deleteTodo } from "./fetcher"
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

  const postTask = (name: string) =>
    createTodo(name).then((data: Array<Todo> | void) => {
      if (!data) {
        return
      }
      setTodos(data)
    })

  const deleteTask = (taskId: number) =>
    deleteTodo(taskId).then((data: Array<Todo> | void) => {
      if (!data) {
        return
      }
      setTodos(data)
    })

  const updateTask = (taskId: number, name: string, isDone: boolean) => {
    updateTodo(taskId, name, isDone).then((data: Array<Todo> | void) => {
      if (!data) {
        return
      }
      setTodos(data)
    })
  }

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Todo一覧</h1>
        </div>
        <div className={styles.lists}>
          <TaskLists
            todos={todos}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </div>
        <div className={styles.textarea}>
          <TaskInputArea postTask={postTask} />
        </div>
      </div>
    </section>
  )
}
