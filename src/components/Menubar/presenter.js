import React, {Component} from 'react'
import {SCOPES, STATE} from '../../constants/auth'
import Util from '../../constants/util'
import {Menu, Icon, Dropdown, Button, Flag, Image} from 'semantic-ui-react'

class Menubar extends Component {

  openAuthWindow(onAuth) {
    let authorizeUrl = window.spotifyApi.createAuthorizeURL(SCOPES, STATE) // 3rd param: set true to force open Spotify auth screen
    authorizeUrl = authorizeUrl.replace(/response_type=code/gi, 'response_type=token')

    // register auth dispatch function to window so authorize child window can call it after
    window.onAuth = onAuth
    Util.popupCenter(authorizeUrl, 'Musyc', 400, 600)
  }

  isLoggedIn(user) {
    return !!user
  }

  renderUser(user) {
    const userDropdownTrigger = (
      <span><Icon name="spotify"/>{user.display_name}</span>
    )
    const profileImage = (
      <Image avatar src={user.images[0].url} />
    )
    return (
      <Button name="userbutton" labeled="true" color='teal'>
        <Dropdown trigger={userDropdownTrigger}>
          <Dropdown.Menu>
            <Dropdown.Item key="user" disabled><span>Signed in as <strong>{user.display_name}</strong></span></Dropdown.Item>
            <Dropdown.Item key="email" image={profileImage} text="You have so nice pic!" className="avatar"/>
            <Dropdown.Item key="profileImage">{user.email} <Icon name="mail"/></Dropdown.Item>
            <Dropdown.Item key="country">Your Country <Flag name={user.country.toLowerCase()} /></Dropdown.Item>
            <Dropdown.Item key="follower">Follower {user.followers.total} <Icon name="trophy"/></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Button>
    )
  }

  render() {
    const {activeMenu, user, onAuth, onSwitchMenu} = this.props

    return (
      <Menu size='tiny'>

        <Menu.Item header>
          <Icon name="sound" size="big"/> Musyc
        </Menu.Item>

        <Menu.Item name="browse" icon="feed"
                   disabled={this.isLoggedIn(user) ? false : true}
                   active={activeMenu === "browse"}
                   onClick={(e, {name}) => onSwitchMenu(name)}/>

        <Menu.Item name="yourTracks" icon="music"
                   disabled={this.isLoggedIn(user) ? false : true}
                   active={activeMenu === "yourTracks"}
                   onClick={(e, {name}) => onSwitchMenu(name)}/>

        <Menu.Item name="library" icon="like"
                   disabled={this.isLoggedIn(user) ? false : true}
                   active={activeMenu === "library"}
                   onClick={(e, {name}) => onSwitchMenu(name)}/>

        <div className="right menu">
          <Menu.Item name="user" active={false} borderless="true">
            {
              user ?
                this.renderUser(user)
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