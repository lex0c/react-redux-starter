import { WELCOME_UPDATED_VALUE } from './welcome.constants';

export function textUpdate(e) {
  return {
    type: WELCOME_UPDATED_VALUE,
    payload: e.target.value
  };
}
