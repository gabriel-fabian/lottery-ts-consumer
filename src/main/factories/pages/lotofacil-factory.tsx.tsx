import LotoFacil from '../../../presentation/pages/lotofacil/lotofacil'
import { makeLotoFacilApi } from '../infra/gateways/lotofacil-api'

import React from 'react'

const MakeLotoFacil: React.FC = () => {
  return <LotoFacil lotoFacilApi={makeLotoFacilApi()}/>
}

export default MakeLotoFacil
