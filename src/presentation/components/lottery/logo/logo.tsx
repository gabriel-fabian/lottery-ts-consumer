import React from 'react'
import Styles from './logo-styles.scss'

type Props = {
  src: string
}

const Logo: React.FC<Props> = ({ src }: Props) => {
  return (
    <div className={Styles.lotteryLogo}>
      <img src={src} alt='Logo Loteria' />
    </div>
  )
}

export default Logo
