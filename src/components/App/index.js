import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Loader, Dimmer } from 'semantic-ui-react'
import Menubar from '../Menubar'
import Intro from '../Intro'
import Browse from '../Browse'
import MyTracks from '../MyTracks'
import Player from '../Player'
import Library from '../Library'
import ErrorModal from '../ErrorModal'

class App extends Component {

  render() {
    const { activeMenu, isFetching, errors } = this.props
    return (
      <div>
        {/*Top menu bar*/}
        <Menubar/>

        {/*Main container*/}
        <Container className="main-container" style={{marginBottom: '170px', marginTop: '70px'}}>
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

          {isFetching ? <Dimmer active inverted><Loader inverted size='large'>Loading</Loader></Dimmer>: null}

          {(errors.length > 0) ? <ErrorModal errors={errors}/> : null}
        </Container>

        {/*Bottom player*/}
        <Player/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { activeMenu } = state.menu
  const { isFetching, errors } = state.api
  return {
    activeMenu,
    isFetching,
    errors
  }
}

export default connect(mapStateToProps)(App)