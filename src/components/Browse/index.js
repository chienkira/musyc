import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Browse from './presenter';

const mapStateToProps = (state) => {
  const {featuredPlaylists, activePlaylist, tracksOfActivePlaylist} = state.browse
  return {
    featuredPlaylists,
    activePlaylist,
    tracksOfActivePlaylist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFeaturedPlaylists: bindActionCreators(actions.onFetchFeaturedPlaylists, dispatch),
    onSelectPlaylist: bindActionCreators(actions.onSelectPlaylist, dispatch),
    backToListOfPlaylist: bindActionCreators(actions.onBackToListOfPlaylist, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);