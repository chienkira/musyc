import React, {Component} from 'react';
import { Button, Icon, Menu, Image, Transition } from 'semantic-ui-react';
import { PlayButton, Timer, VolumeControl, Progress } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import './Player.css'

class Player extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  componentDidUpdate() {
    const {activeTrack, onNextTrack} = this.props
    // if active track has no stream url, go to the next one
    if(activeTrack && !activeTrack.track.preview_url) {
      onNextTrack(activeTrack)
    }

    // force auto-play
    const event = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': false
    })
    document.getElementsByClassName("play-button")[0].dispatchEvent(event)
  }

  onStartTrack(soundCloudAudio) {
    const playhead = document.getElementById("elapsed")
    const timeline = document.getElementById("slider")
    soundCloudAudio.progressInterval = setInterval(() => {
      const timelineWidth = timeline.offsetWidth
      const playPercent = timelineWidth * (soundCloudAudio.audio.currentTime / soundCloudAudio.audio.duration)
      playhead.style.width = playPercent + "px"
    }, 50);
  }

  onStopTrack(soundCloudAudio) {
    soundCloudAudio.progressInterval && clearInterval(soundCloudAudio.progressInterval)
    const playhead = document.getElementById("elapsed")
    playhead.style.width = 1 + "px"
  }

  onPauseTrack(soundCloudAudio) {
    soundCloudAudio.progressInterval && clearInterval(soundCloudAudio.progressInterval)
  }

  render() {
    const {activeTrack, onNextTrack, onPrevTrack} = this.props

    const EnhancedPlayer = withCustomAudio(props => {
      const {track} = props
      const trackTitle = track ? track.name : ''
      const artistName = track ? track.artists[0].name : ''
      const trackDuration = track ? track.duration_ms : ''

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
                {artistName ? artistName : '-----(｀・ω・´)-----'}
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
                  <Button icon={true} circular onClick={() => {onPrevTrack(activeTrack)}}>
                    <Icon name='step backward' />
                  </Button>
                  <PlayButton
                    id="playButton"
                    className="ui circular icon button play-button"
                    {...props}/>
                  <Button icon={true} circular onClick={() => {onNextTrack(activeTrack)}}>
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
          clientId="none"
          track={activeTrack ? activeTrack.track : null}
          streamUrl={activeTrack ? activeTrack.track.preview_url : 'none'}
          onStartTrack={this.onStartTrack}
          onStopTrack={(soundCloudAudio) => {
            this.onStopTrack(soundCloudAudio)
            // auto play next track
            onNextTrack(activeTrack)
          }}
          onPauseTrack={this.onPauseTrack}
          onReady={this.onReady}
          preloadType="metadata" />
      </Menu>
    )
  }
}

export default Player;