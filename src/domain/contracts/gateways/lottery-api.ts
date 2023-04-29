import { type LotteryResultModel } from '../../entities'

export interface LotteryApi {
  getLastResult: () => Promise<LotteryResultModel>
}
