import { RootState } from '../store';

export const getAllTracks = (state: RootState) => {
    return state.music.allTracks
};