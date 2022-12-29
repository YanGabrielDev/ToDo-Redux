import { ReactNode, useState } from "react"
import { Button } from "../Button"
import * as Styled from "./styles"
export interface FormInterface {
  // children: ReactNode
}
export const Form = ({}: FormInterface) => {
  const [task, setTask] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  return (
    <Styled.Container>
      <Styled.Title
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <Styled.Task
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Tarefa"
        rows={5}
      />
      <Styled.ButtonContainer>
        <Button color="blue">Criar</Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  )
}
