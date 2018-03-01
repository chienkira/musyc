import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import TrackList from './presenter';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay: bindActionCreators(actions.playTrack, dispatch),
    onSetTrack: bindActionCreators(actions.setTracks, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);