import MegaSenaLogo from './components/logo/logo'
import LotteryInfo from './components/lottery-info/lottery-info'
import LotteryResult from './components/lottery-result/lottery-result'
import Styles from './mega-sena-styles.scss'

import React from 'react'

type Props = {
  data: {
    drawnNumbers: string[]
    nextLotteryDate: string
    nextLotteryPrize: string
    winners: number
    contestNumber: number
    nextLotteryDateFull: string
  }
}

const MegaSena: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className={Styles.contentWrap}>
      <MegaSenaLogo />
      <LotteryInfo lotteryDate={data.nextLotteryDate} lotteryPrize={data.nextLotteryPrize} />
      <LotteryResult
        winners={data.winners}
        drawnNumbers={data.drawnNumbers}
        contestNumber={data.contestNumber}
        contestDate={data.nextLotteryDateFull}
      />
    </div>
  )
}

export default MegaSena
