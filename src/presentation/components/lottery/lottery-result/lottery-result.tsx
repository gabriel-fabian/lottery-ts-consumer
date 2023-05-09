import { useLotteryContext } from '../../../../contexts/lottery-context'
import Styles from './lottery-result-styles.scss'

import React from 'react'

const LotteryResult: React.FC = () => {
  const { lotteryName, lotteryResult } = useLotteryContext()
  const ballNumberColor = `${lotteryName.toLowerCase()}BallNumber`
  const ballColor = `${lotteryName.toLowerCase()}Ball`

  return (
    <div className={Styles.contentWrap}>
      <ul className={Styles.lotteryResultList}>
        {lotteryResult.drawnNumbers.map((item, index) => {
          return (
            <li className={`${Styles.lotteryResultNumber} ${Styles[ballNumberColor]} ${Styles[ballColor]}`} key={index}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LotteryResult
