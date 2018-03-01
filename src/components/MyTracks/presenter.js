import React from 'react';
import ReactDOM from 'react-dom';
import TrackList from '../TrackList';
import { Header, Icon } from 'semantic-ui-react'

class MyTracks extends React.Component {

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollTop = 0
    this.props.onFetchMyTracks()
    // reset window position
    window.scrollTo(0, 0)
  }

  render() {
    const {myTracks = []} = this.props;
    return (
      <div>
        {myTracks.length > 0 ?
          (
            <TrackList tracks={myTracks}/>
          )
          :
          (
            <Header as='h3' disabled>
              {/*If there is no track*/}
              <Icon name='frown' />
              <Header.Content>
                You have no saved track on Spotify
                <Header.Subheader>
                  Let's find some featured tracks on Browse menu!
                </Header.Subheader>
              </Header.Content>
            </Header>
          )
        }
      </div>
    )
  }
}

export default MyTracks;