import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'
import { MegaSenaApi } from '../../../../infra/gateways/megasena-api'

export const makeMegaSenaApi = (): MegaSenaApi => {
  return new MegaSenaApi(makeAxiosHttpClient())
}
