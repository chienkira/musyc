import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Library from './presenter';

const mapStateToProps = (state) => {
  const {myPlaylists, myAlbums} = state.library
  return {
    playlists: myPlaylists,
    albums: myAlbums
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLibrary: bindActionCreators(actions.fetchLibrary, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);