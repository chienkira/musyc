export const CLIENT_ID = '0573fe35f306498d912be65c3eddd64b';
export const REDIRECT_URI = `${window.location.protocol}//${window.location.host}/callback`;
export const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-library-read',
  'playlist-read-private',
  'user-read-recently-played',
  'user-read-currently-playing']
export const STATE = 'state-attemp-musyc-auth'