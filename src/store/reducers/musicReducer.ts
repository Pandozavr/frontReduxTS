import { MusicState, MusicAction, MusicActionsEnum } from '../../types/MusicTypes';

const initialState: MusicState = {
  allTracks: [],
  error: null
}

export const musicReducer = (state = initialState, action: MusicAction): MusicState => {
  switch (action.type) {
    case MusicActionsEnum.SET_TRACKS: {
      return {...state, allTracks: action.payload}
    }
    case MusicActionsEnum.SET_ERROR: {
      return {...state, error: action.payload}
    }
    default:
      return state
  }

}