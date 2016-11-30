import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/svgs/Single';
import SvgGrid from './components/svgs/SvgGrid';
import ChartsGrid from './components/charts/ChartsGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SvgGrid}></IndexRoute>
        <Route path="/view/:svgId" component={Single}></Route>
        <Route path="chartsGrid" component={ChartsGrid}>
          <IndexRoute component={ChartsGrid}></IndexRoute>
        </Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
