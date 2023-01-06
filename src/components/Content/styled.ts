import styled, {css} from "styled-components";

export const Container = styled.div`
${({theme}) => css`
width: 100%;
max-width: 760px;
background-color: ${theme.colors.white};
padding: 0 1rem;
margin:0 auto;
/* height: 100%; */
border-radius: 24px;
margin-top: 5rem;
display: flex;
justify-content: center;
flex-direction: column;
padding-bottom: 6rem;
font-family: ${theme.fonts?.family?.default};
`}
`