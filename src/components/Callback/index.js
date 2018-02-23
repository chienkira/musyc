import React from 'react'
import QueryString from 'query-string'

class Callback extends React.Component {

  componentDidMount() {
    window.setTimeout(this.handleAuthCallback, 1)
  }

  render() {
    return (
      <div>
        <p>From Musyc: This page should close soon...</p>
      </div>
    )
  }

  handleAuthCallback() {
    const queryString = QueryString.parse(location.hash)

    if (queryString.error) {
      // error
      // state
      console.log('Spotify access request has been denied' + queryString.error)
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
  }

}

export default Callback;