import { MusicState, MusicAction, MusicActionsEnum } from '../../types/MusicTypes';

const initialState: MusicState = {
  allTracks: [],
  MsgType: null,
  MsgText: null,
  isLoadTrack: false
}

export const musicReducer = (state = initialState, action: MusicAction): MusicState => {
  switch (action.type) {
    case MusicActionsEnum.SET_TRACKS: {
      return {...state, allTracks: action.payload}
    }
    case MusicActionsEnum.SET_MSG_TYPE: {
      return {...state, MsgType: action.payload}
    }
    case MusicActionsEnum.SET_MSG_TEXT: {
      return {...state, MsgText: action.payload}
    }
    case MusicActionsEnum.SET_IS_LOAD: {
      return {...state, isLoadTrack: action.payload}
    }
    default:
      return state
  }

}