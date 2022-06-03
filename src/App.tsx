import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import theme from './constants/theme'
import GlobalState from './GlobalState/GlobalState'
import MainRoutes from './routes/Router'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
      <Header />
      <Router>
        <MainRoutes />
      </Router>
      </GlobalState>
    </ThemeProvider>
  )
}

export default App
