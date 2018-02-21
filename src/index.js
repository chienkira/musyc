import SpotifyWebApi from 'spotify-web-api-node';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import Root from './components/Root';
import App from './components/App';
import Callback from './components/Callback';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

window.spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI
});

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={App}/>
        <Route path="/" component={App}/>
        <Route path="/callback" component={Callback}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
