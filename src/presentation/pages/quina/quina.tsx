import Styles from './quina-styles.scss'
import Loading from '../../components/loading/loading'
import Header from '../../components/header/header'
import { LotteryPrincipal } from '../../components'
import { type LotteryResultModel } from '../../../domain/entities'
import { LotteryContext } from '../../../contexts/lottery-context'
import { type QuinaApi } from 'infra'

import React, { useEffect, useState } from 'react'

type Props = {
  quinaApi: QuinaApi
}

const Quina: React.FC<Props> = ({ quinaApi }: Props) => {
  const [state, setState] = useState({} as LotteryResultModel)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    quinaApi
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
          <Header currentRoute='/quina' />
          <div className={Styles.contentWrap}>
            <LotteryContext.Provider
              value={{
                lotteryName: 'quina',
                lotteryLogoSrc: '/trevo-quina.png',
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

export default Quina
