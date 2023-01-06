import styled, { css } from "styled-components";

export const Container = styled.div`
${({theme})=> css`
width: 100%;
box-shadow: -1px 0px 5px 7px rgba(0,0,0,0.12);
height: auto;
border-radius: 24px;
padding: 0 24px;
overflow: hidden;
background-color: ${theme.colors.white};
`}
`
export const Title = styled.input`
${({theme}) => css`
color: ${theme.colors.text};
padding: 20px;
border: none;
outline: none;
margin: 20px;
width: 90%;
font-size: 30px;
`}

`
export const Task = styled.textarea`
padding: 20px;
border: none;
outline: none;
margin: 20px;
width: 90%;
font-size: 20px;

`
export const ButtonContainer = styled.div`
display: flex;
justify-content: end;
`