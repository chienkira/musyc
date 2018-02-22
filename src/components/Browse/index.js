import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Browse from './presenter';

const mapStateToProps = (state) => {
  const {featuredPlaylists} = state.browse
  return {
    featuredPlaylists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFeaturedPlaylists: bindActionCreators(actions.onFetchFeaturedPlaylists, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);