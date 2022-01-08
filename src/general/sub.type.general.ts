import { WsSubscriptionTypeEnum } from "..";

export type TWsSub<T> = {
  id: string,
  type: WsSubscriptionTypeEnum,
  response: boolean,
} & T;
