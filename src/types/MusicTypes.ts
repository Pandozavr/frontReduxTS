export interface TrackItem{
  track_id: number
  track_name: string
  artist: string
  file_name: string
}

export interface MusicState{
  allTracks: Array<TrackItem>
  error: string | null
}

export enum MusicActionsEnum {
  SET_TRACKS = "SET_TRACKS",
  SET_ERROR = "SET_ERROR",
}

export interface SetErrorMusic {
  type: MusicActionsEnum.SET_ERROR
  payload: string
}

export interface SetTracks {
  type: MusicActionsEnum.SET_TRACKS
  payload: Array<TrackItem>
}

export type MusicAction = SetTracks | SetErrorMusic