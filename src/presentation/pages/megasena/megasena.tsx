import MegaSenaLogo from './components/logo/logo'
import LotteryInfo from './components/lottery-info/lottery-info'
import LotteryResult from './components/lottery-result/lottery-result'
import Styles from './megasena-styles.scss'
import Loading from '../../components/loading/loading'
import Header from '../../components/header/header'
import { type MegaSenaApi } from 'infra/gateways/megasena-api'
import { type LotteryResultModel } from '../../../domain/entities'

import React, { useEffect, useState } from 'react'

type Props = {
  megaSenaApi: MegaSenaApi
}

const MegaSena: React.FC<Props> = ({ megaSenaApi }: Props) => {
  const [state, setState] = useState({} as LotteryResultModel)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    megaSenaApi.getLastResult()
      .then(lotteryResult => {
        setState(lotteryResult)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className={Styles.megaSenaWrap}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Header currentRoute='/megasena'/>
          <div className={Styles.contentWrap}>
            <MegaSenaLogo />
            <LotteryInfo lotteryDate={state.nextLotteryDate} lotteryPrize={state.nextLotteryPrize} />
            <LotteryResult
              winners={state.winners}
              drawnNumbers={state.drawnNumbers}
              contestNumber={state.contestNumber}
              contestDate={state.nextLotteryDateFull}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default MegaSena
