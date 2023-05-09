import { LotteryDate, LotteryResult, LotteryWinner } from '../../'
import Styles from './lottery-right-panel-styles.scss'

import React from 'react'

const LotteryRightPanel: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <LotteryResult/>
      <LotteryWinner/>
      <LotteryDate/>
    </div>
  )
}

export default LotteryRightPanel
