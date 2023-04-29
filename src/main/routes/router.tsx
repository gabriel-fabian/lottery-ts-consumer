import MakeLotoFacil from '../../main/factories/pages/lotofacil-factory.tsx'
import MakeMegaSena from '../../main/factories/pages/megasena-factory'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/megasena' element={<MakeMegaSena />} />
        <Route path='/lotofacil' element={<MakeLotoFacil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
