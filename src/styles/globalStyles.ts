import { createGlobalStyle } from "styled-components";
import {theme} from './theme'
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
}
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${theme.colors?.softBlack}}
    `