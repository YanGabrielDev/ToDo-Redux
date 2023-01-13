import * as Styled from "./styled"
import {ButtonContainer} from '../Form/styled'
import { Button } from "../Button"
import { MouseEventHandler } from "react"
import { deleteTodo } from "../../redux/sliceTodos"
export interface TaskContainer {
  title: string
  task: string
  deleteTodo:  MouseEventHandler<HTMLButtonElement>
}
export const TaskContainer = ({ task, title, deleteTodo }: TaskContainer) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Task>{task}</Styled.Task>
      <ButtonContainer>
        <Button onClick={deleteTodo} color='red'>Deletar</Button>
      </ButtonContainer>
    </Styled.Container>
  )
}
