import MakeMegaSena from '../../main/factories/pages/megasena-factory'
import MakeLottery from '../factories/pages/lottery-factory'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MakeLottery />} />
        <Route path='/megasena' element={<MakeMegaSena />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
