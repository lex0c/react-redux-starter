import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { reducer as formReducer } from 'redux-form';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

// Reducers
import welcomeReducer from './components/welcome/welcome.reducer';


/*
 * Middlewares and enhancers
 * See: http://redux.js.org/docs/advanced/Middleware.html
 *
 */
const loggerMiddleware = createLogger();
const middlewares = [thunk, promiseMiddleware(), loggerMiddleware];

/*
 * Redux devtools
 * See: https://github.com/gaearon/redux-devtools
 *
 */
const enhancers = [];
const devToolsExtension = window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

/*
 * See: https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
 * See: https://github.com/reduxjs/redux/blob/master/docs/api/combineReducers.md
 *
 */
const store = createStore(
  combineReducers({
    welcomeReducer,
    routing: routerReducer,
    form: formReducer,
    composedEnhancers
  })
);

/*
 * See: https://github.com/reactjs/react-router-redux/issues/305
 *
 */
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
