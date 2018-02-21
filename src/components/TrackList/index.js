import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import TrackList from './presenter';

const mapStateToProps = (state) => {
  const {tracks} = state.track
  const {activeTrack} = state.track
  return {
    tracks,
    activeTrack
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay: bindActionCreators(actions.playTrack, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);