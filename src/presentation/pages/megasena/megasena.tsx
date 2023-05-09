import Styles from './megasena-styles.scss'
import Loading from '../../components/loading/loading'
import Header from '../../components/header/header'
import { LotteryContext } from '../../../contexts/lottery-context'
import { LotteryPrincipal } from '../../../presentation/components'
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
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Header currentRoute='/megasena'/>
          <div className={Styles.contentWrap}>
          <LotteryContext.Provider
              value={{
                lotteryName: 'mega-sena',
                lotteryLogoSrc: '/trevo-megasena.png',
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

export default MegaSena
