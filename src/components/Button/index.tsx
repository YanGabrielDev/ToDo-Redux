import { ReactNode } from "react"
import * as Styled from "./styled"
export interface ButtonInterface {
  children?: ReactNode | string
  color: "green" | "blue" | "red"
}
export const Button = ({ children, color = "blue" }: ButtonInterface) => {
  return <Styled.Button color={color}>{children}</Styled.Button>
}
