import React from 'react';
import {List, Button, Image, Label} from 'semantic-ui-react';
import './TrackList.css';

class TrackList extends React.Component {

  render() {
    const {tracks = [], onPlay, onSetTrack} = this.props;
    return (
      <div>
        <List animated verticalAlign='top' celled ordered>
          {
            tracks.map((track, key) => {
              return (
                <List.Item key={key}>
                  <Image avatar src={track.track.album.images[0].url}/>

                  <List.Content>
                    <List.Header className="track-name">{track.track.name}</List.Header>
                    {track.track.artists[0].name}
                  </List.Content>

                  <List.Content floated='right'>
                    {
                      !track.track.preview_url ?
                        <Label basic size="mini" color='red' pointing='right'>Stream not available</Label> : null
                    }
                    <Button circular icon='play' content='Play' onClick={
                      () => {
                        onPlay(track)
                        onSetTrack(tracks)
                      }
                    } disabled={!track.track.preview_url}/>
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