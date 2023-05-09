import { LotteryLeftPanel, LotteryRightPanel } from '../../'
import Styles from './lottery-principal.scss'

import React from 'react'

const LotteryPrincipal: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <LotteryLeftPanel/>
      <LotteryRightPanel/>
    </div>
  )
}

export default LotteryPrincipal
