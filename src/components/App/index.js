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

  componentDidUpdate(prevProps, prevState) {
    // reset window position after page changed
    window.scrollTo(0, 0)
  }

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

          {/*Loader*/}
          {isFetching ? <Dimmer active inverted><Loader inverted size='large'>Loading</Loader></Dimmer>: null}

          {/*Error modal*/}
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
  const { isFetching } = state.api
  const errors = state.errors
  return {
    activeMenu,
    isFetching,
    errors
  }
}

export default connect(mapStateToProps)(App)