import { Form } from "../components/Form"
import { Content } from "../components/Content"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTodos, addTodo, ToDo } from "../redux/sliceTodos"
import { TaskContainer } from "../components/TaskContainer"

export default function Home() {
  const [task, setTask] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const todos: ToDo[] = useSelector(useTodos)
  const dispatch = useDispatch()
  let id = 0
  const handleChangeTask = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(event.target.value)
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const getId = () => {
    return id++
  }
  const Tasks = (todos: ToDo[]) => {
    return todos.map((todo) => {
      return (
        <>
          <TaskContainer task={todo.task} title={todo.title} />
        </>
      )
    })
  }
  const handleSubmit = () => {
    dispatch(addTodo({ id: getId(), title: title, task: task })),
      setTask(""),
      setTitle("")
  }
  return (
    <>
      <Content>
        <>
          <Form
            task={task}
            title={title}
            handleChangeTask={handleChangeTask}
            handleChangeTitle={handleChangeTitle}
            onClick={handleSubmit}
          />
          {Tasks(todos)}
        </>
      </Content>
    </>
  )
}
