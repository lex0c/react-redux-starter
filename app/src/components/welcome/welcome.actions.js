import { UPDATED_VALUE } from './welcome.constants';

export function textUpdate(e) {
  return {
    type: UPDATED_VALUE,
    payload: e.target.value
  };
}
