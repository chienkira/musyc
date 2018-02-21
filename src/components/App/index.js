import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Sticky } from 'semantic-ui-react'

import Menubar from '../Menubar'
import Browse from '../Browse'
import TrackList from '../TrackList'
import Player from '../Player'
import Library from '../Library'

class App extends Component {

  render() {
    const { activeMenu } = this.props
    return (
      <div>
        {/*Top menu bar*/}
        <Menubar/>

        {/*Main container*/}
        <Container className="main-container">
          {
            (() => {
              switch (activeMenu) {
                case 'browse':
                  return <Browse/>;
                case 'yourTracks':
                  return <TrackList/>;
                case 'library':
                  return <Library/>;
              }
            })()
          }
        </Container>

        {/*The player*/}
        <Player/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { activeMenu } = state.menu
  return {
    activeMenu
  }
}

export default connect(mapStateToProps)(App)