import React, {Component} from 'react'
import {SCOPES, STATE} from '../../constants/auth'
import Util from '../../constants/util'
import {Menu, Icon, Dropdown, Button, Flag, Image, Label} from 'semantic-ui-react'

class Menubar extends Component {

  constructor(props) {
    super(props);
    const {token, onAuth} = props
    // if we have token, use it to auto-login
    if (token) {
      window.spotifyApi.setAccessToken(token)
      onAuth()
    }
  }

  openAuthWindow(onAuth) {
    // 3rd param: set true to force open Spotify auth screen
    let authorizeUrl = window.spotifyApi.createAuthorizeURL(SCOPES, STATE, true)
    // overwrite the response_type's value to 'token', because we are doing "Implicit Grant Authorization Flows"
    authorizeUrl = authorizeUrl.replace(/response_type=code/gi, 'response_type=token')

    // register auth dispatch function to window so authorize child window can call it after
    window.onAuth = onAuth
    Util.popupCenter(authorizeUrl, 'Musyc - Spotify authorization', 400, 600)
  }

  isLoggedIn(user) {
    return !!user
  }

  renderUser(user, onLogout) {
    const userDropdownTrigger = (
      <span><Icon name="spotify"/>{user.display_name}</span>
    )
    const profileImage = (
      <Image avatar src={user.images[0].url} />
    )
    return (
      <Dropdown trigger={userDropdownTrigger} button className='teal'>
        <Dropdown.Menu>
          <Dropdown.Item key="user" disabled><span>Signed in as <strong>{user.display_name}</strong></span></Dropdown.Item>
          <Dropdown.Item key="email" image={profileImage} text="You have so nice pic!" className="avatar"/>
          <Dropdown.Item key="profileImage">{user.email} <Icon name="mail"/></Dropdown.Item>
          <Dropdown.Item key="country">Your Country <Flag name={user.country.toLowerCase()} /></Dropdown.Item>
          <Dropdown.Item key="follower">Follower {user.followers.total} <Icon name="trophy"/></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item key="logout" onClick={onLogout}><Label color='red'><Icon name="sign out"/> Logout</Label></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  render() {
    const {activeMenu, user, onAuth, onLogout, onSwitchMenu} = this.props

    return (
      <Menu size='tiny' fixed="top">

        <Menu.Item header>
          <Icon name="sound" size="big"/> Musyc
        </Menu.Item>

        <Menu.Item name="browse" icon="feed"
                   disabled={!this.isLoggedIn(user)}
                   active={activeMenu === "browse"}
                   onClick={(e, {name}) => onSwitchMenu(name)}/>

        <Menu.Item name="myTracks" icon="music"
                   disabled={!this.isLoggedIn(user)}
                   active={activeMenu === "myTracks"}
                   onClick={(e, {name}) => onSwitchMenu(name)}/>

        <Menu.Item name="library" icon="like"
                   disabled={!this.isLoggedIn(user)}
                   active={activeMenu === "library"}
                   onClick={(e, {name}) => onSwitchMenu(name)}/>

        <div className="right menu">
          <Menu.Item name="user" active={false} borderless="true">
            {
              user ?
                this.renderUser(user, onLogout)
                :
                <Button onClick={() => { this.openAuthWindow(onAuth) }} type="button">
                  <Icon name="spotify"/>Login
                </Button>
            }
          </Menu.Item>
        </div>

      </Menu>
    )
  }
}

export default Menubar