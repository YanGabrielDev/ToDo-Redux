import styled, {css} from "styled-components";

export const Container = styled.div`
${({theme}) => css`
width: 100%;
max-width: 760px;
background-color: ${theme.colors.softBlack2};
padding: 0 1rem;
margin:0 auto;
border-radius: 24px;
display: flex;
margin-top: 5px;
justify-content: center;
flex-direction: column;
padding-bottom: 6rem;
font-family: ${theme.fonts?.family?.default};
`}
`