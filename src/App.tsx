import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react"
import { lightTheme } from "./styles/theme/light"
import { GlobalStyles } from "./styles/GlobalStyle"
import { Router } from "./Router"

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    <Global styles={GlobalStyles} />
    </ThemeProvider>
  )
}

export default App
