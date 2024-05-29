import { Todo } from "../../../entity/Todo"

// TODO: 別の場所に移す
const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
}

// TODO: 開発環境と本番環境を分離できるようにする
const url = "http://localhost:8000/api"

interface TodoResponse {
  id: number
  name: string
  is_done: 0 | 1
  created_at: string
  updated_at: string
}

const responseConverter = (data: Array<TodoResponse>): Array<Todo> => {
  return data.map((value: TodoResponse) => {
    return {
      id: value.id,
      name: value.name,
      isDone: value.is_done === 1,
      createdAt: value.created_at,
      updatedAt: value.updated_at,
    }
  })
}

export const getTodo = async () => {
  return await fetch(`${url}/todos`, {
    method: "GET",
    headers: defaultHeaders,
  })
    .then((res) => res.json())
    .then((data) => {
      return responseConverter(data)
    })
    .catch((err) => console.error(err))
}

export const createTodo = async (name: string) => {
  return await fetch(`${url}/todos`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({ name }),
  })
    .then(() => {
      return getTodo()
    })
    .catch((err) => console.error(err))
}

export const updateTodo = () => {}

export const deleteTodo = async (taskId: number) => {
  return await fetch(`${url}/todos/${taskId}`, {
    method: "DELETE",
    headers: defaultHeaders,
  })
    .then(() => {
      return getTodo()
    })
    .catch((err) => console.error(err))
}
