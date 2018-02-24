const QueryString = require('query-string')

const queryString = QueryString.parse(location.hash)

if (queryString.error) {
  // We should get below
  // error
  // state
  console.log('Spotify access has been denied' + queryString.error)
} else {
  // We should get below
  //   access_token
  //   token_type
  //   expires_in
  //   state
  if (opener && opener.spotifyApi) opener.spotifyApi.setAccessToken(queryString.access_token);
  if (opener && opener.onAuth) opener.onAuth()
  // save token to local storage
  localStorage.setItem('token', queryString.access_token)
}

window.close()