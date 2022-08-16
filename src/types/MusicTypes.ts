export interface TrackItem{
  track_id: number
  track_name: string
  artist: string
  file_name: string
}

export interface MusicState{
  allTracks: Array<TrackItem>
  MsgType: string | null
  MsgText: string | null
  isLoadTrack: boolean
}

export enum MusicActionsEnum {
  SET_TRACKS = "SET_TRACKS",
  SET_MSG_TYPE = "SET_MSG_TYPE",
  SET_MSG_TEXT = "SET_MSG_TEXT",
  SET_IS_LOAD = "SET_IS_LOAD"
}

export interface SetMsgType {
  type: MusicActionsEnum.SET_MSG_TYPE
  payload: string | null
}
export interface SetMsgText {
  type: MusicActionsEnum.SET_MSG_TEXT
  payload: string | null
}
export interface SetIsLoad {
  type: MusicActionsEnum.SET_IS_LOAD
  payload: boolean
}

export interface SetTracks {
  type: MusicActionsEnum.SET_TRACKS
  payload: Array<TrackItem>
}

export type MusicAction = SetTracks | SetMsgType | SetMsgText | SetIsLoad