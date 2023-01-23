import { Header } from './componentes/header'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'
import { HomePage } from './pages/home'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomePage />
      
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
