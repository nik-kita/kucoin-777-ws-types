import { WsSubscriptionTypeEnum } from '../../enums/subscription-type.enum';
import { WsTopicEnum } from '../../enums/topic.enum';

export class WsMarketTickerPub {
  constructor(
    public id: string,
    public type: WsSubscriptionTypeEnum,
    public  coins?: string[],
  ){ }

  topic = this.coins ? WsTopicEnum.MARKET_TICKER + this.coins.join(',') : WsTopicEnum.MARKET_TICKER_ALL;

  response = true as const;
}
