import { HttpStatusCode } from '../../application/helpers/https'
import { type AxiosHttpClient } from '../http/axios-http-client/axios-http-client'

export class LotteryApi {
  private readonly url = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados'

  constructor (
    private readonly httpClient: AxiosHttpClient
  ) {}

  async getLastResult (): Promise<any> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return await this.sanitizeResults(httpResponse.body)
      default: throw new Error()
    }
  }

  private async sanitizeResults (data: any): Promise<any> {
    const { megasena, lotofacil } = data

    const megasenaResults = await this.getMegaSenaResult(megasena)
    const lotofacilResults = await this.getLotoFacilResult(lotofacil)

    return {
      megasena: megasenaResults,
      lotofacil: lotofacilResults
    }
  }

  private async getMegaSenaResult (data: any): Promise<any> {
    return {
      drawnNumbers: data.dezenas,
      nextLotteryDate: data.dataProximoConcurso,
      nextLotteryDateFull: data.dataPorExtenso,
      winners: data.quantidadeGanhadores,
      contestNumber: data.numeroDoConcurso,
      nextLotteryPrize: data.valorEstimadoProximoConcurso.toString()
    }
  }

  private async getLotoFacilResult (data: any): Promise<any> {
    return {
      drawnNumbers: data.dezenas,
      nextLotteryDate: data.dataProximoConcurso,
      nextLotteryDateFull: data.dataPorExtenso,
      winners: data.quantidadeGanhadores,
      contestNumber: data.numeroDoConcurso,
      nextLotteryPrize: data.valorEstimadoProximoConcurso.toString()
    }
  }
}
