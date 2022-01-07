import { WsTopicEnum } from '../../enums/topic.enum';
import { TWsPub } from '../../general/pub.type.general';

export type TWsMarketTickerPub = TWsPub<{
  topic: WsTopicEnum.MARKET_TICKER_ALL,
  subject: string,
  data: {
    bestAsk: string,
    bestAskSize: string,
    bestBid: string,
    betsBidSize: string,
    price: string,
    sequence: string,
    size: string,
    time: number,
    lastTime: number,
    startTime: number,
  }
}>
