import MegaSena from '../../../presentation/pages/megasena/megasena'
import { makeMegaSenaApi } from '../infra/gateways/megasena-api'

import React from 'react'

const MakeMegaSena: React.FC = () => {
  return <MegaSena megaSenaApi={makeMegaSenaApi()}/>
}

export default MakeMegaSena
