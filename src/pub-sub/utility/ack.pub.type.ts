import { WsPubTypeEnum } from '../../enums/type.pub.enum';

export type TWsAckPub = {
  id: string,
  type: WsPubTypeEnum.ACK,
}
