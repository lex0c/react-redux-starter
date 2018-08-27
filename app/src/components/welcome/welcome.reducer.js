import { UPDATED_VALUE } from './welcome.constants';

const INITIAL_VALUE = { message: 'Welcome to React+Redux Starter!' };

export default function (state = INITIAL_VALUE, action) {
  switch (action.type) {
    case UPDATED_VALUE:
      return { message: action.payload };
    default:
      return state;
  }
}
