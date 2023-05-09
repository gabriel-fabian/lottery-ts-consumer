import { type LotteryResultModel } from '../../domain/entities'
import { type LotteryApi } from '../../domain/contracts'
import { type AxiosHttpClient } from '../http'
import { HttpStatusCode } from '../../application/helpers/https'

export class TimemaniaApi implements LotteryApi {
  private readonly url = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados'

  constructor (
    private readonly httpClient: AxiosHttpClient
  ) {}

  getLastResult = async (): Promise<LotteryResultModel> => {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return await this.sanitizeResults(httpResponse.body)
      default: throw new Error()
    }
  }

  private async sanitizeResults (data: any): Promise<LotteryResultModel> {
    const { timemania } = data

    return {
      drawnNumbers: timemania.dezenas,
      nextLotteryDate: timemania.dataProximoConcurso,
      nextLotteryDateFull: timemania.dataPorExtenso,
      winners: timemania.quantidadeGanhadores,
      contestNumber: timemania.numeroDoConcurso,
      nextLotteryPrize: timemania.valorEstimadoProximoConcurso
    }
  }
}
