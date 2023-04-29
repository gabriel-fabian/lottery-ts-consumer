import Styles from './lotofacil-styles.scss'
import LotoFacilLogo from './components/logo/logo'
import LotteryInfo from './components/lottery-info/lottery-info'
import LotteryResult from './components/lottery-result/lottery-result'
import Loading from '../components/loading/loading'
import { type LotoFacilApi } from '../../../infra/gateways/lotofacil-api'
import { type LotteryResultModel } from '../../../domain/entities'

import React, { useEffect, useState } from 'react'

type Props = {
  lotoFacilApi: LotoFacilApi
}

const LotoFacil: React.FC<Props> = ({ lotoFacilApi }: Props) => {
  const [state, setState] = useState({} as LotteryResultModel)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    lotoFacilApi.getLastResult()
      .then(lotteryResult => {
        setState(lotteryResult)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className={Styles.contentWrap}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <LotoFacilLogo />
          <LotteryInfo lotteryDate={state.nextLotteryDate} lotteryPrize={state.nextLotteryPrize} />
          <LotteryResult
            winners={state.winners}
            drawnNumbers={state.drawnNumbers}
            contestNumber={state.contestNumber}
            contestDate={state.nextLotteryDateFull}
          />
        </>
      )}
    </div>
  )
}

export default LotoFacil
