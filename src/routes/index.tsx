import { Routes, Route } from 'react-router-dom'

import { History } from '../screens/History'
import { Home } from '../screens/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
