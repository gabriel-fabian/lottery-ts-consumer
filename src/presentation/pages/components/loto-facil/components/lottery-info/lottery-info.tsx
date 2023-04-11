import Styles from './lottery-info-styles.scss'

import React from 'react'

type Props = {
  lotteryDate: string
  lotteryPrize: number
}

const LotteryInfo: React.FC<Props> = ({ lotteryDate, lotteryPrize }: Props) => {
  const formatPrize = (prize: number): string => {
    return lotteryPrize.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className={Styles.lotteryInfo}>
      <div className={Styles.lotteryName}>
        <span>LOTOFÁCIL</span>
      </div>
      <div className={Styles.lotteryNextDate}>
        <span>
          Estimativa do prêmio do próximo concurso. Sorteio em {lotteryDate}:
        </span>
      </div>
      <div className={Styles.lotteryPrize}>
        <span>{formatPrize(lotteryPrize)}</span>
      </div>
    </div>
  )
}

export default LotteryInfo
