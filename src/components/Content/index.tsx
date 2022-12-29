import { Children, ReactNode } from "react"
import * as Styled from "./styled"
export interface ContentInterface {
  children: ReactNode
}
export const Content = ({ children }: ContentInterface) => {
  return <Styled.Container>{children}</Styled.Container>
}
