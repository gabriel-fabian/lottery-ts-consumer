import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'
import { QuinaApi } from '../../../../infra'

export const makeQuinaApi = (): QuinaApi => {
  return new QuinaApi(makeAxiosHttpClient())
}
