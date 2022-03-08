import { BANNER_TYPE } from 'constant';
import { get } from './request';

export function getBanner() {
  return get('/banner', { type: BANNER_TYPE.IPhone });
}
