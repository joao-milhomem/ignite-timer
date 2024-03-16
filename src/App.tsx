import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/index'

import { DefaultLayout } from './layouts/DefaultLayout'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import GlobalStyle from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <DefaultLayout />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
