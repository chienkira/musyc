import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import ErrorModal from './presenter';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseErrorModal: bindActionCreators(actions.onCloseModalError, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);