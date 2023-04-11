import LotoFacilLogo from './components/logo/logo'
import LotteryInfo from './components/lottery-info/lottery-info'
import LotteryResult from './components/lottery-result/lottery-result'
import Styles from './loto-facil-styles.scss'

import React from 'react'

const LotoFacil: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <LotoFacilLogo />
      <LotteryInfo lotteryDate='03/04/2023' lotteryPrize='R$ 1.500.000,00' />
      <LotteryResult
        drawnNumbers={[
          '01',
          '04',
          '05',
          '06',
          '09',
          '10',
          '11',
          '12',
          '13',
          '15',
          '18',
          '19',
          '20',
          '22',
          '25'
        ]}
        winners={7}
        contestDate='Sábado, 01 de Abril de 2023'
        contestNumber={2778}
      />
    </div>
  )
}

export default LotoFacil
