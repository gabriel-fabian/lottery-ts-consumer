import MegaSena from './components/mega-sena/mega-sena'
import Styles from './lottery-styles.scss'

import React from 'react'

const Lottery: React.FC = () => {
  return (
    <div className={Styles.contentWrap}>
      <MegaSena />
      <hr />
    </div>
  )
}

export default Lottery
