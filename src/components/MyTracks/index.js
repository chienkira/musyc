import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import MyTracks from './presenter';

const mapStateToProps = (state) => {
  const {tracks} = state.track
  return {
    tracks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMyTracks: bindActionCreators(actions.fetchMyTracks, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTracks);