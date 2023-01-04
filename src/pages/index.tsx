import { Form } from "../components/Form"
import { Content } from "../components/Content"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTodos } from "../redux/sliceTodos"

export default function Home() {
  const [task, setTask] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const todos = useSelector(useTodos)
  console.log(todos)

  const handleChangeTask = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(event.target.value)
  }

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <>
      <Content>
        <Form
          task={task}
          title={title}
          handleChangeTask={handleChangeTask}
          handleChangeTitle={handleChangeTitle}
        />
      </Content>
    </>
  )
}
