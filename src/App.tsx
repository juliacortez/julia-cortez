import { ThemeProvider } from '@emotion/react'
import Header from './components/Header/Header'
import theme from './constants/theme'
import GlobalState from './GlobalState/GlobalState'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
      <Header />
        <HomePage />
      </GlobalState>
    </ThemeProvider>
  )
}

export default App
