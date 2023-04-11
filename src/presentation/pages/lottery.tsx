import { type LotteryApi } from 'infra/gateways/lottery-api'
import LotoFacil from './components/loto-facil/loto-facil'
import MegaSena from './components/mega-sena/mega-sena'
import Styles from './lottery-styles.scss'

import React, { useEffect, useState } from 'react'

type Props = {
  lotteryApi: LotteryApi
}

const Lottery: React.FC<Props> = ({ lotteryApi }: Props) => {
  const [state, setState] = useState({ megasena: null, lotofacil: null })

  useEffect(() => {
    lotteryApi.getLastResult()
      .then(lotteryResult => {
        setState(lotteryResult)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className={Styles.contentWrap}>
      {state.megasena && <MegaSena data={state.megasena}/>}
      <hr />
      {state.lotofacil && <LotoFacil data={state.lotofacil}/>}
      <hr />
    </div>
  )
}

export default Lottery
