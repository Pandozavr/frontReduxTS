import { MusicState, MusicAction } from '../../types/MusicTypes';

const initialState: MusicState = {
  allTracks: [],
  error: null
}

export const musicReducer = (state = initialState, action: MusicAction): MusicState => {
  switch (action.type) {
    default:
      return state
  }

}