import styled, { css } from "styled-components";
import {ButtonInterface } from ".";
import { ThemeInterface } from "../../interfaces/themeInterface";
import { theme } from "../../styles/theme";

export const Button = styled.button<ButtonInterface>`
${({theme, color}) => css`
background-color: ${theme.colors[`${color}`]};
color: ${theme.colors.white};
border-radius: 24px;
padding: 10px 20px;
border: none;
cursor: pointer;
 
`}
`