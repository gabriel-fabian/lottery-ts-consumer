import { useLotteryContext } from '../../../../contexts/lottery-context'
import Styles from './lottery-winner-styles.scss'

import React from 'react'

const LotteryWinner: React.FC = () => {
  const { lotteryResult } = useLotteryContext()

  const drawnWinners = (): string => {
    if (!lotteryResult.winners) {
      return 'acumulou!'
    }

    return lotteryResult.winners > 1
      ? `${lotteryResult.winners} ganhadores`
      : `${lotteryResult.winners} ganhador`
  }

  return (
    <div className={Styles.contentWrap}>
      <div className={Styles.lotteryResultWinner}>
        <span>{drawnWinners()}</span>
      </div>
    </div>
  )
}

export default LotteryWinner
