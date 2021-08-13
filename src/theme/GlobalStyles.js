import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
  box-sizing: border-box;
  }

  body,html {
    overflow: hidden;
  }

  body {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    margin: 0;

  }

  .CodeMirror {
    height: 100% !important;
  }
`;

export const ScrollBarStyles = createGlobalStyle`
::-webkit-scrollbar {
  height: 16px;
  overflow: visible;
  width: 16px;
}

::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.secondary};
  background-clip: padding-box;
  border: solid transparent;
  border-width: 1px 1px 1px 6px;
  min-height: 28px;
  padding: 100px 0 0;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
}

::-webkit-scrollbar-corner {
  background: transparent;
}

::-webkit-scrollbar-track {
  background-clip: padding-box;
  border: solid transparent;
  border-width: 0 0 0 4px;
}

`;
