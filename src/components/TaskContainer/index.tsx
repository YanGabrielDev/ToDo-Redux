import * as Styled from "./styled"
interface TaskContainer {
  title: string
  task: string
}
export const TaskContainer = ({ task, title }: TaskContainer) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Task>{task}</Styled.Task>
    </Styled.Container>
  )
}
