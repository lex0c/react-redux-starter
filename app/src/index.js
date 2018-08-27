import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom';

import store, { history } from './store';
import App from './components/app';
import WelcomePage from './pages/welcome/welcome.page';
import '../assets/sass/app.scss';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        {/* <Route path="*" component={Pages.NotFoundPage} /> */}
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));
