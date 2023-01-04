import { ReactNode, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../Button"
import * as Styled from "./styles"
export interface FormInterface {
  title: string
  task: string
  handleChangeTask: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Form = ({
  task,
  title,
  handleChangeTask,
  handleChangeTitle,
}: FormInterface) => {
  const dispatch = useDispatch()

  return (
    <Styled.Container>
      <Styled.Title
        value={title}
        onChange={(e) => handleChangeTitle(e)}
        placeholder="Título"
      />
      <Styled.Task
        value={task}
        onChange={(e) => handleChangeTask(e)}
        placeholder="Tarefa"
        rows={5}
      />
      <Styled.ButtonContainer>
        <Button color="blue">Criar</Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  )
}
