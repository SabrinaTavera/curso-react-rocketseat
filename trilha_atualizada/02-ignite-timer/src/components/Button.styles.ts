import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secundary" | "danger" | "success"

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVarients = {
    primary: "purple",
    secundary: "orange",
    danger: "red",
    success: "green"
}
export const ButtonContainer = styled.button<ButtonContainerProps>`

    width: 188px;
    height: 48px;
    border-radius: 4px;
    border: 0;
    margin: 0;
    background-color: ${props => props.theme.primary} ;

    /* ${props => {
        return css`
            background-color: ${buttonVarients[props.variant]}
        `
    }} */
`
// .button {
//     width: 188px;
//     height: 48px;
// }

// .primary{
//     background: purple;
// }

// .secundary{
//     background: orange;
// }

// .danger{
//     background: red;
// }

// .success{
//     background: green;
// }