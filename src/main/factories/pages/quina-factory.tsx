import { Quina } from '../../../presentation/pages'
import { makeQuinaApi } from '../infra/gateways/quina-api'

import React from 'react'

const MakeQuina: React.FC = () => {
  return <Quina quinaApi={makeQuinaApi()}/>
}

export default MakeQuina
