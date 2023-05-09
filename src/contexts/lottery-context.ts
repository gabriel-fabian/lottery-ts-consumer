import { type LotteryResultModel } from 'domain/entities'
import { createContext, useContext } from 'react'

type LotteryProps = {
  lotteryName: string
  lotteryLogoSrc: string
  lotteryResult: LotteryResultModel
}

const LotteryContext = createContext({} as LotteryProps)

const useLotteryContext = (): LotteryProps => {
  return useContext(LotteryContext)
}

export { LotteryContext, useLotteryContext }
