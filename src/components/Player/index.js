import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Player from './presenter';

const mapStateToProps = (state) => {
  const {activeTrack} = state.track
  return {
    activeTrack
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextTrack: bindActionCreators(actions.nextTrack , dispatch),
    onPrevTrack: bindActionCreators(actions.prevTrack , dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);