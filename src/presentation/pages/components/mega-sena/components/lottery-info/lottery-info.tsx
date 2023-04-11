import Styles from './lottery-info-styles.scss'

import React from 'react'

type Props = {
  lotteryDate: string
  lotteryPrize: string
}

const LotteryInfo: React.FC<Props> = ({ lotteryDate, lotteryPrize }: Props) => {
  return (
    <div className={Styles.lotteryInfo}>
      <div className={Styles.lotteryName}>
        <span>MEGA-SENA</span>
      </div>
      <div className={Styles.lotteryNextDate}>
        <span>
          Estimativa do prêmio do próximo concurso. Sorteio em {lotteryDate}:
        </span>
      </div>
      <div className={Styles.lotteryPrize}>
        <span>{lotteryPrize}</span>
      </div>
    </div>
  )
}

export default LotteryInfo
