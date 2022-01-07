import { WsPubTypeEnum } from '../enums/type.pub.enum';

export type TWsPub<T> = {
  id: string,
  type: WsPubTypeEnum.MESSAGE,
} & T;
