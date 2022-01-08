import { WsTopicEnum } from '../../enums/topic.enum';
import { TWsSub } from '../../general/sub.type.general';

export type TWsMarketTickerSub = TWsSub<{
  topic: WsTopicEnum.MARKET_TICKER | WsTopicEnum.MARKET_TICKER_ALL | string,
  coins?: string[],
}>
