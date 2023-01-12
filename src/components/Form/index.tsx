import { MouseEventHandler, ReactNode, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../Button"
import * as Styled from "./styled"
export interface FormInterface {
  title: string
  task: string
  handleChangeTask: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick: MouseEventHandler<HTMLButtonElement>
}
export const Form = ({
  task,
  title,
  handleChangeTask,
  handleChangeTitle,
  onClick,
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
        rows={3}
      />
      <Styled.ButtonContainer>
        <Button color="blue" onClick={onClick}>
          Criar
        </Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  )
}
