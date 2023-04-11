import MegaSenaLogo from './components/logo/logo'
import LotteryInfo from './components/lottery-info/lottery-info'
import LotteryResult from './components/lottery-result/lottery-result'
import Styles from './mega-sena-styles.scss'

import React from 'react'

const MegaSena: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <MegaSenaLogo />
      <LotteryInfo lotteryDate='05/04/2023' lotteryPrize='R$ 37.000.000,00' />
      <LotteryResult
        winners={0}
        drawnNumbers={[5, 10, 26, 35, 38, 44]}
        contestNumber={2579}
        contestDate='Sábado, 01 de Abril de 2023'
      />
    </div>
  )
}

export default MegaSena
