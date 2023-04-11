import Styles from './lottery-result-styles.scss'

import React from 'react'

type Props = {
  drawnNumbers: string[]
  winners: number
  contestNumber: number
  contestDate: string
}

const LotteryResult: React.FC<Props> = (props: Props) => {
  const drawnWinners = (): string => {
    if (!props.winners) {
      return 'acumulou!'
    }

    return props.winners > 1
      ? `${props.winners} ganhadores`
      : `${props.winners} ganhador`
  }

  return (
    <div className={Styles.lotteryResult}>
      <ul className={Styles.lotteryResultList}>
        {props.drawnNumbers.map((item, index) => {
          return (
            <li className={Styles.lotteryResultNumber} key={index}>
              {item}
            </li>
          )
        })}
      </ul>
      <div className={Styles.lotteryResultWinner}>
        <span>{drawnWinners()}</span>
      </div>
      <div className={Styles.lotteryResultInfo}>
        <span>
          Concurso {props.contestNumber} - {props.contestDate}
        </span>
      </div>
    </div>
  )
}

export default LotteryResult
