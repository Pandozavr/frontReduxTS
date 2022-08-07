import {
  MusicActionsEnum,
  TrackItem,
  MusicAction,
  SetTracks,
} from "../../types/MusicTypes";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { musicAPI } from "../../API/API";
import { SetMsgType, SetMsgText } from '../../types/MusicTypes';

export const setTracks = (payload: Array<TrackItem>): SetTracks => {
  return {
    type: MusicActionsEnum.SET_TRACKS,
    payload,
  };
};

export const setMsgType = (payload: string | null ): SetMsgType => {
  return {
    type: MusicActionsEnum.SET_MSG_TYPE,
    payload
  }
}
export const setMsgText = (payload: string | null ): SetMsgText => {
  return {
    type: MusicActionsEnum.SET_MSG_TEXT,
    payload
  }
}
////////////////////_THUNK

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, MusicAction>;

export const getMusichunk = (): ThunkType => async (dispatch) => {
  try {
    let res = await musicAPI.getMusic();
    dispatch(setTracks(res.data.data));
  } catch (e: any) {
    console.log(e.message);
  }
};

export const addTrack = (trackName:string, artist:string, track:string): ThunkType => async (dispatch) => {
  try {
    let addTrack = await musicAPI.addTrack(trackName, artist, track)
    let res = await musicAPI.getMusic();
    dispatch(setTracks(res.data.data));
    dispatch(setMsgType("success"))
    dispatch(setMsgText("Track added success"))
    setTimeout(() => {
      dispatch(setMsgText(null))
      dispatch(setMsgType(null))
    }, 3000)
  } catch (e: any) {
    console.log(e);
    dispatch(setMsgType("error"))
    dispatch(setMsgText("Failed"))
    setTimeout(() => {
      dispatch(setMsgText(null))
      dispatch(setMsgType(null))
    }, 3000)
  }
};
