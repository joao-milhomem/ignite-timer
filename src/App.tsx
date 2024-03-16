import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/index'

import { DefaultLayout } from './layouts/DefaultLayout'

export function App() {
  return (
    <BrowserRouter>
      <DefaultLayout />
      <Router />
    </BrowserRouter>
  )
}
