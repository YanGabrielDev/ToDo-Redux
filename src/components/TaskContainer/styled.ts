import styled, { css } from "styled-components";

export const Container = styled.div`
${({theme}) => css`
width: 100%;
padding: 0 24px;
overflow: hidden;
border-radius: 24px;
margin-top: 3rem;
box-shadow: -1px 0px 5px 7px rgba(0,0,0,0.12);
background-color: ${theme.colors.softBlack2};

`}
`
export const Title = styled.h2`
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
export const Task = styled.p`
padding: 20px;
border: none;
outline: none;
margin: 0px 20px;
width: 90%;
font-size: 20px;

`