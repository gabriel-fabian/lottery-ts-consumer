import MakeQuina from '../../main/factories/pages/quina-factory'
import MakeLotoFacil from '../../main/factories/pages/lotofacil-factory'
import MakeMegaSena from '../../main/factories/pages/megasena-factory'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/megasena' element={<MakeMegaSena />} />
        <Route path='/lotofacil' element={<MakeLotoFacil />} />
        <Route path='/quina' element={<MakeQuina />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
