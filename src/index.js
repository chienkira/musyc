import SpotifyWebApi from 'spotify-web-api-node';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import Root from './components/Root';
import App from './components/App';
import { CLIENT_ID_DEV, CLIENT_ID_PROD, REDIRECT_URI_DEV, REDIRECT_URI_PROD } from './constants/auth';

const isDevelopmentEnv = (window.location.host.indexOf('localhost') > -1
    || window.location.host.indexOf('0.0.0.0') > -1
    || window.location.host.indexOf('127.0.0.1') > -1)

window.spotifyApi = new SpotifyWebApi({
  clientId: isDevelopmentEnv ? CLIENT_ID_DEV : CLIENT_ID_PROD,
  redirectUri: isDevelopmentEnv ? REDIRECT_URI_DEV : REDIRECT_URI_PROD
});

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Root>
      <App/>
    </Root>
  </Provider>,
  document.getElementById('app')
);
