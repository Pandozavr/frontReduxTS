export enum ProfileActionTypes {
  SET_POSTS = "SET_POSTS",
  SET_PROFILE = "SET_PROFILE",
  SET_ERROR = "SET_ERROR",
}

export interface ProfileState {
  userName: string,
  avatarUrl: string,
  posts: any[],
  error: null | string    
}

export interface ProfileDataAction {
  type: ProfileActionTypes.SET_PROFILE,
  payload: string
}
export interface PostsActionAction {
  type: ProfileActionTypes.SET_POSTS,
  payload: boolean
}
export interface ProfileErrorAction {
  type: ProfileActionTypes.SET_ERROR,
  payload: string | null
}

export type MainProfileAction = ProfileDataAction | PostsActionAction | ProfileErrorAction