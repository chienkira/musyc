import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Loader, Dimmer } from 'semantic-ui-react'
import Menubar from '../Menubar'
import Intro from '../Intro'
import Browse from '../Browse'
import TrackList from '../TrackList'
import Player from '../Player'
import Library from '../Library'

class App extends Component {

  render() {
    const { activeMenu, isFetching } = this.props
    return (
      <div>
        {/*Top menu bar*/}
        <Menubar/>

        {/*Main container*/}
        <Container className="main-container" style={{marginBottom: '170px'}}>
          {
            (() => {
              switch (activeMenu) {
                case 'browse':
                  return <Browse/>;
                case 'yourTracks':
                  return <TrackList/>;
                case 'library':
                  return <Library/>;
                default:
                  return <Intro/>
              }
            })()
          }
          {isFetching ? <Loader active>Loading</Loader>: null}
        </Container>

        {/*Bottom player*/}
        <Player/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { activeMenu } = state.menu
  const { isFetching } = state.api
  return {
    activeMenu,
    isFetching
  }
}

export default connect(mapStateToProps)(App)