export const CLIENT_ID_DEV = '0573fe35f306498d912be65c3eddd64b';
export const REDIRECT_URI_DEV = `${window.location.protocol}//${window.location.host}/callback`;

export const CLIENT_ID_PROD = '9d547e4d428c48239a1644e1c8a96306';
export const REDIRECT_URI_PROD = `https://chienkira.github.io/musyc/dist/callback`;

export const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-library-read',
  'playlist-read-private',
  'user-read-recently-played',
  'user-read-currently-playing']
export const STATE = 'state-attempt-musyc-auth'