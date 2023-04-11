import LotoFacilLogo from './components/logo/logo'
import LotteryInfo from './components/lottery-info/lottery-info'
import LotteryResult from './components/lottery-result/lottery-result'
import Styles from './loto-facil-styles.scss'

import React from 'react'

type Props = {
  data: {
    drawnNumbers: string[]
    nextLotteryDate: string
    nextLotteryPrize: number
    winners: number
    contestNumber: number
    nextLotteryDateFull: string
  }
}

const LotoFacil: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className={Styles.contentWrap}>
      <LotoFacilLogo />
      <LotteryInfo lotteryDate={data.nextLotteryDate} lotteryPrize={data.nextLotteryPrize} />
      <LotteryResult
        drawnNumbers={data.drawnNumbers}
        winners={data.winners}
        contestDate={data.nextLotteryDateFull}
        contestNumber={data.contestNumber}
      />
    </div>
  )
}

export default LotoFacil
