import React from 'react';
import {List, Button, Image} from 'semantic-ui-react';

class TrackList extends React.Component {

  componentDidMount() {
    this.props.onFetchMyTracks()
  }

  render() {
    const {tracks = [], onPlay} = this.props;
    return (
      <div>
        <List divided animated verticalAlign='middle'>
          {
            tracks.map((track, key) => {
              return (
                <List.Item key={key}>
                  <Image avatar src={track.track.album.images[0].url}/>

                  <List.Content>
                    <List.Header>{track.track.name}</List.Header>
                    {track.track.artists[0].name}
                  </List.Content>

                  <List.Content floated='right'>
                    <Button circular color="black" icon='play' content='Play' onClick={() => onPlay(track)}
                            disabled={!track.track.preview_url}/>
                  </List.Content>
                </List.Item>
              )
            })
          }
        </List>
      </div>
    )
  }
}

export default TrackList;