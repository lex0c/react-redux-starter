import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import DevTools from './utils/devtools';

// Reducers
import rootReducers from './root.reducer';


/*
 * Middlewares and enhancers
 * See: http://redux.js.org/docs/advanced/Middleware.html
 *
 */
const loggerMiddleware = createLogger();
const middlewares = [thunk, loggerMiddleware];

/*
 * Redux devtools
 * See: https://github.com/gaearon/redux-devtools
 *
 */
const enhancers = [];
enhancers.push(DevTools.instrument());

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

/*
 * See: https://github.com/reduxjs/redux/blob/master/docs/api/combineReducers.md
 *
 */
const reducers = combineReducers({
  ...rootReducers,
  routing: routerReducer,
  form: formReducer,
  composedEnhancers
});

/*
 * See: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
 *
 */
const store = applyMiddleware(promise)(createStore)(reducers);

/*
 * See: https://github.com/reactjs/react-router-redux/issues/305
 *
 */
export const history = syncHistoryWithStore(browserHistory, store);

/** */
export default store;
