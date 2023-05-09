import Styles from './timemania-styles.scss'
import Loading from '../../components/loading/loading'
import Header from '../../components/header/header'
import { LotteryPrincipal } from '../../components'
import { type LotteryResultModel } from '../../../domain/entities'
import { LotteryContext } from '../../../contexts/lottery-context'
import { type TimemaniaApi } from 'infra'

import React, { useEffect, useState } from 'react'

type Props = {
  timemaniaApi: TimemaniaApi
}

const Timemania: React.FC<Props> = ({ timemaniaApi }: Props) => {
  const [state, setState] = useState({} as LotteryResultModel)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    timemaniaApi
      .getLastResult()
      .then((lotteryResult) => {
        setState(lotteryResult)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Header currentRoute='/timemania' />
          <div className={Styles.contentWrap}>
            <LotteryContext.Provider
              value={{
                lotteryName: 'timemania',
                lotteryLogoSrc: '/trevo-timemania.png',
                lotteryResult: state
              }}
            >
              <LotteryPrincipal/>
            </LotteryContext.Provider>
          </div>
        </>
      )}
    </div>
  )
}

export default Timemania
