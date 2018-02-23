import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Loader, Dimmer } from 'semantic-ui-react'
import Menubar from '../Menubar'
import Intro from '../Intro'
import Browse from '../Browse'
import MyTracks from '../MyTracks'
import Player from '../Player'
import Library from '../Library'

class App extends Component {

  render() {
    const { activeMenu, isFetching } = this.props
    return (
      <div>
        {/*Top menu bar*/}
        <Menubar/>

        {isFetching ? <Dimmer active inverted><Loader inverted size='large'>Loading</Loader></Dimmer>: null}

        {/*Main container*/}
        <Container className="main-container" style={{marginBottom: '170px'}}>
          {
            (() => {
              switch (activeMenu) {
                case 'browse':
                  return <Browse/>;
                case 'myTracks':
                  return <MyTracks/>;
                case 'library':
                  return <Library/>;
                default:
                  return <Intro/>
              }
            })()
          }
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