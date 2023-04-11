import Lottery from '../../../presentation/pages/lottery'
import { makeLotteryApi } from '../infra/gateways/lottery'

import React from 'react'

const MakeLottery: React.FC = () => {
  return <Lottery lotteryApi={makeLotteryApi()}/>
}

export default MakeLottery
