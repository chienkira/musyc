import SpotifyWebApi from 'spotify-web-api-node';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import Root from './components/Root';
import App from './components/App';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

window.spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI
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
