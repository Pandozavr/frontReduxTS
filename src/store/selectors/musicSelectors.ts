import { RootState } from '../store';

export const getAllTracks = (state: RootState) => {
    return state.music.allTracks
};
export const getAddTrackMsgType = (state: RootState) => {
    return state.music.MsgType
};
export const getAddTrackMsgText = (state: RootState) => {
    return state.music.MsgText
};
export const getIsLoadTrackValue = (state: RootState) => {
    return state.music.isLoadTrack
};