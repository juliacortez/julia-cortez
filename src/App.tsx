import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import theme from './constants/theme'
import MainRoutes from './routes/Router'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router>
        <MainRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App
