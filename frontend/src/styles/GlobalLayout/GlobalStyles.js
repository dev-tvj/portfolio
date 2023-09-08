import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

// GENERAL STYLES

body {
    background: ${({ theme }) => theme.background };
    body: ${({ theme }) => theme.body };
    color: ${({ theme }) => theme.text };
    toggleBorder: ${({ theme }) => theme.toggleBorder };
  }

.primaryColor {
  background-color: ${({ theme }) => theme.primary };
}

.textColor {
  color: black;
}

.darkText {
  color: ${({ theme }) => theme.darkText };
}




// NAVBAR STYLES

.navbar {
  background-color: ${({ theme }) => theme.primary };
}





  `
