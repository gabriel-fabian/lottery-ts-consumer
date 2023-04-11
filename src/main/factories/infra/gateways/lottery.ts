import { makeAxiosHttpClient } from '../../../../main/factories/http/axios-http-client-factory'
import { LotteryApi } from '../../../../infra/gateways/lottery-api'

export const makeLotteryApi = (): LotteryApi => {
  return new LotteryApi(makeAxiosHttpClient())
}
