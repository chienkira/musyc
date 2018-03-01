import * as actionTypes from '../constants/actionTypes'

export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  }
}

export function playTrack(track) {
  return {
    type: actionTypes.TRACK_PLAY,
    track
  }
}

export function nextTrack(track) {
  return {
    type: actionTypes.TRACK_NEXT,
    track
  }
}

export function prevTrack(track) {
  return {
    type: actionTypes.TRACK_PREV,
    track
  }
}

