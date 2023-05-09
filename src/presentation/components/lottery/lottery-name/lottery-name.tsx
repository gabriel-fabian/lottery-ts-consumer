import Logo from '../logo/logo'
import Styles from './lottery-name-styles.scss'
import { useLotteryContext } from '../../../../contexts/lottery-context'

import React from 'react'

const LotteryName: React.FC = () => {
  const { lotteryName, lotteryLogoSrc } = useLotteryContext()

  const primaryColor = `${lotteryName.toLowerCase()}Primary`

  return (
    <div className={Styles.contentWrapper}>
      <Logo src={lotteryLogoSrc}/>
      <div className={`${Styles.lotteryName} ${Styles[primaryColor]}`} >
        <span>{lotteryName.toUpperCase()}</span>
      </div>
    </div>
  )
}

export default LotteryName
