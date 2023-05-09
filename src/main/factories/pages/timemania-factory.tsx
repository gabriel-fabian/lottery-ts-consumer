import Timemania from '../../../presentation/pages/timemania/timemania'
import { makeTimemaniaApi } from '../infra/gateways/timemania-api'

import React from 'react'

const MakeTimemania: React.FC = () => {
  return <Timemania timemaniaApi={makeTimemaniaApi()}/>
}

export default MakeTimemania
