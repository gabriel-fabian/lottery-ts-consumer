import { LotteryName, LotteryEstimate } from '../../'
import Styles from './lottery-left-panel-styles.scss'

import React from 'react'

const LotteryLeftPanel: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <LotteryName/>
      <LotteryEstimate/>
    </div>
  )
}

export default LotteryLeftPanel
