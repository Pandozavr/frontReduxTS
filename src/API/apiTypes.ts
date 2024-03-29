import { posts } from '../types/ProfileTypes';
interface userObjAuth {
  id: number,
  email: string
}

export interface authLogin {
  accessToken: string,
  refreshToken: string,
  user: userObjAuth
}

export interface uplAvatar {
  avaUrl: string
}

export interface Profile {
  userID: number
  userName: string,
  email: string,
  avaUrl: string
}

interface post {
  post_id: number,
  post_text: string
}

export interface getPosts {
  posts: Array<post>
}

interface user {
  user_id: number,
  isFriend: number,
  user_name: string,
  email: string,
  file_name: string
}

export interface getUsers {
  allUsers: Array<user>
}
export interface getUserViewData{
  posts: Array<posts>
  user_name: string
  avaUrl: string
}

interface TrackData {
  track_id: number,
  track_name: string,
  artist: string,
  file_name: string
}

export interface getMusic {
  result: number
  data: Array<TrackData>
}