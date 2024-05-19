import { forwardRef } from "react"
import { TaskList } from "../TaskList/TaskList"
import { Todo } from "../../../entity/Todo"

type Props = {
  todos: Array<Todo>
} & React.ComponentPropsWithRef<"ul">

export const TaskLists = forwardRef(({ todos, ...props }: Props) => {
  return (
    <ul {...props}>
      {todos.map((todo: Todo, index: number) => {
        return (
          <TaskList
            label={todo.name}
            isDone={todo.isDone}
            key={`todo-list-item-${todo.id}-${index}`}
          />
        )
      })}
    </ul>
  )
})
