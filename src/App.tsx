import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, Global } from "@emotion/react"
import { lightTheme } from "./styles/theme/light"
import { GlobalStyles } from "./styles/GlobalStyle"
import { Router } from "./Router"
import { ListCoffeeProvider } from "./context/coffee";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ListCoffeeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </ListCoffeeProvider>
    <Global styles={GlobalStyles} />
    </ThemeProvider>
  )
}

export default App
