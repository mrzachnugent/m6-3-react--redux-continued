import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../COLORS";

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Montserrat, sans-serif;
}

body {
    background: ${COLORS.charcoal};
    color: ${COLORS.white}
}
`;
