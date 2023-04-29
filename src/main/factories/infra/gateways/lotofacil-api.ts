import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'
import { LotoFacilApi } from '../../../../infra'

export const makeLotoFacilApi = (): LotoFacilApi => {
  return new LotoFacilApi(makeAxiosHttpClient())
}
