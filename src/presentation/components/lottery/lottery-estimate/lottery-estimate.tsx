import { useLotteryContext } from '../../../../contexts/lottery-context'
import Styles from './lottery-estimate-styles.scss'

import React from 'react'

const LotteryEstimate: React.FC = () => {
  const { lotteryName, lotteryResult } = useLotteryContext()
  const primaryColor = `${lotteryName.toLowerCase()}Primary`

  const formatPrize = (prize: number): string => {
    return prize.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className={Styles.contentWrap}>
      <div className={Styles.lotteryNextDate}>
        <span>
          Estimativa do prêmio do próximo concurso. Sorteio em {lotteryResult.nextLotteryDate}:
        </span>
      </div>
      <div className={`${Styles.lotteryPrize} ${Styles[primaryColor]}`}>
        <span>{formatPrize(lotteryResult.nextLotteryPrize)}</span>
      </div>
    </div>
  )
}

export default LotteryEstimate
