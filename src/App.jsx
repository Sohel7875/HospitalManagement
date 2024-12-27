import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <Routes>

      <Route>
        <Route path='/' element={<Homepage />} />
        <Route path='/Home' element={<Homepage />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Route>
    </Routes>

  )
}

export default App