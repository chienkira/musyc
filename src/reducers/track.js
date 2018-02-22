import * as actionTypes from '../constants/actionTypes'

const initialState = {
  tracks: [],
  activeTrack: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action)
    case actionTypes.TRACK_PLAY:
      return setPlay(state, action)
    case actionTypes.TRACK_NEXT:
      return setNext(state, action)
    case actionTypes.TRACK_PREV:
      return setPrev(state, action)
  }
  return state
}

function setTracks(state, action) {
  const {tracks} = action
  return { ...state, tracks }
}

function setPlay(state, action) {
  const {track} = action
  return { ...state, activeTrack: track }
}

function setNext(state, action) {
  const {track} = action
  // find the next track in track list
  const activeTrackIndex = state.tracks.findIndex((e) => {return e === track})
  const nextTrack = (activeTrackIndex + 1 < state.tracks.length) ? state.tracks[activeTrackIndex + 1] : null
  return { ...state, activeTrack: nextTrack }
}

function setPrev(state, action) {
  const {track} = action
  // find the previous track in track list
  const activeTrackIndex = state.tracks.findIndex((e) => {return e === track})
  const prevTrack = (activeTrackIndex - 1 >= 0) ? state.tracks[activeTrackIndex - 1] : null
  return { ...state, activeTrack: prevTrack }
}