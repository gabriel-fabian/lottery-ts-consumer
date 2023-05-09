import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'
import { TimemaniaApi } from '../../../../infra'

export const makeTimemaniaApi = (): TimemaniaApi => {
  return new TimemaniaApi(makeAxiosHttpClient())
}
