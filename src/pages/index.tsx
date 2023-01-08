import { Form } from "../components/Form"
import { Content } from "../components/Content"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTodos, addTodo, ToDo, deleteTodo } from "../redux/sliceTodos"
import { TaskContainer } from "../components/TaskContainer"

export default function Home() {
  const [task, setTask] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const todos: ToDo[] = useSelector(useTodos)
  const dispatch = useDispatch()
  const handleChangeTask = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(event.target.value)
  }
  
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  let id: number = 0
  const getId = () => {
    return ++id ;
    
  }
  
  const handleSubmit = () => {
    dispatch(addTodo({ id: id , title: title, task: task })),
      setTask(""),
      setTitle("")
  }
  const Tasks = (todos: ToDo[]) => {
    return todos.map((todo, index) => {
      return (
        <>
          <TaskContainer
            key={todo.id}
            task={todo.task}
            title={todo.title}
            deleteTodo={() => {dispatch(deleteTodo(index)), console.log(todos)}}
          />
        </>
      )
    })
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
