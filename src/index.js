import SpotifyWebApi from 'spotify-web-api-node';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import Root from './components/Root';
import App from './components/App';
import * as AUTH from './constants/auth';

const isDevelopmentEnv = (process.env.NODE_ENV !== 'production')
window.spotifyApi = new SpotifyWebApi({
  clientId: isDevelopmentEnv ? AUTH.CLIENT_ID_DEV : AUTH.CLIENT_ID_PROD,
  redirectUri: isDevelopmentEnv ? AUTH.REDIRECT_URI_DEV : AUTH.REDIRECT_URI_PROD
})

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Root>
      <App/>
    </Root>
  </Provider>,
  document.getElementById('app')
)
