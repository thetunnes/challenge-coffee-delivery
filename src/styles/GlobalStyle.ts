import styled from "@emotion/styled"
import { lightTheme } from "./theme/light"
import { css } from '@emotion/react';
export const GlobalStyles = css`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${lightTheme.colors.purple[700]};
  }

  body {
    background: ${lightTheme.colors.background};
    color: ${lightTheme.colors.text};
    min-height: 100vh;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${lightTheme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
  }

  @media screen and (max-width: 1120px) {
    html {
      font-size: 93.75% !important;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5% !important;
    }
  }
`