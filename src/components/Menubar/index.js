import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Menubar from './presenter'

const mapStateToProps = (state) => {
  const {activeMenu, user} = state.menu
  return {
    user,
    activeMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch),
    onSwitchMenu: bindActionCreators(actions.switchMenu, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menubar)