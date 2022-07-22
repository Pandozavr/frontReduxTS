import { MusicActionsEnum, TrackItem, MusicAction, SetTracks, SetErrorMusic } from '../../types/MusicTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { musicAPI } from '../../API/API';


export const setTracks = (payload: Array<TrackItem>): SetTracks => {
  return {
    type: MusicActionsEnum.SET_TRACKS,
    payload
  }
}

export const setErrorMusic = (payload: string): SetErrorMusic => {
  return {
    type: MusicActionsEnum.SET_ERROR,
    payload
  }
}


////////////////////_THUNK

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, MusicAction>

export const getMusichunk = (): ThunkType => async (dispatch) => {
  try{
      let res = await musicAPI.getMusic();
      dispatch(setTracks(res.data.data));
  } catch(e: any) {
    console.log(e.message);
    
  }
};
