import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon, Menu, Image, Transition } from 'semantic-ui-react';
import { PlayButton, Timer, VolumeControl, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import './Player.css'

class Player extends React.Component {

  componentDidUpdate() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);
    if (!audioElement) {
      return;
    }

    const {activeTrack} = this.props;

    if (activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  render() {
    const {activeTrack} = this.props

    const EnhancedPlayer = withCustomAudio(props => {
      const {track, trackTitle, artistName, trackDuration} = props

      return (
        <div className="player">
          <ul>
            <li className="cover">
              <Transition transitionOnMount animation='scale' duration={500}>
                <Image src={track && track.album.images[0].url} circular/>
              </Transition>
            </li>
            <li className="info">
              <h1 className="h5 nowrap caps flex-auto m0">
                {trackTitle ? trackTitle : '----------------------------'}
              </h1>
              <h4 className="h5 nowrap caps flex-auto m0">
                {artistName ? artistName : '---------------'}
              </h4>

              <div className="button-items">
                <div id="slider">
                  <div id="elapsed"></div>
                </div>
                <Timer
                  className="timer"
                  duration={trackDuration ? trackDuration / 1000 : 0}
                  {...props} />
                <div className="controls">
                  <Button icon circular>
                    <Icon name='step backward' />
                  </Button>
                  <PlayButton
                    className="ui circular icon button play-button"
                    {...props} >
                    <Icon name='play' />
                  </PlayButton>
                  <Button icon circular>
                    <Icon name='step forward' />
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <Menu fixed='bottom' size="large" compact={true}>
        <EnhancedPlayer
          track={activeTrack ? activeTrack.track : null}
          streamUrl={activeTrack ? activeTrack.track.preview_url : 'none'}
          trackTitle={activeTrack ? activeTrack.track.name : ''}
          artistName={activeTrack ? activeTrack.track.artists[0].name : ''}
          trackDuration={activeTrack ? activeTrack.track.duration_ms : ''}
          preloadType="metadata" />
      </Menu>
    )
  }
}

export default Player;