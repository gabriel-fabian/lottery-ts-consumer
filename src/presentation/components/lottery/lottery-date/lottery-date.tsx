import { useLotteryContext } from '../../../../contexts/lottery-context'
import Styles from './lottery-date-styles.scss'

import React from 'react'

const LotteryDate: React.FC = () => {
  const { lotteryResult } = useLotteryContext()

  return (
    <div className={Styles.lotteryDateInfo}>
      <span>
        Concurso {lotteryResult.contestNumber} - {lotteryResult.nextLotteryDateFull}
      </span>
    </div>
  )
}

export default LotteryDate
