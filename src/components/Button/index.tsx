import { ButtonHTMLAttributes, ReactNode } from "react"
import * as Styled from "./styled"
import React, {} from "react"
export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | string
  color: "green" | "blue" | "red"
}
export const Button = ({ children, color = "blue" }: ButtonInterface) => {
  return <Styled.Button color={color}>{children}</Styled.Button>
}
