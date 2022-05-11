export interface posts {
  post_id: number
  post_text: string
}

export interface ProfileState {
  userName: string
  avatarUrl: string
  posts: Array<posts>
  isLoading: boolean
  error: string | null
}

export enum ProfileActionsEnum {
  SET_POSTS = "SET_POSTS",
  SET_PROFILE = "SET_PROFILE",
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetPostsType {
  type: ProfileActionsEnum.SET_POSTS
  payload: Array<posts>
}

export interface profilePayload{
  userName: string
  email: string
  avaUrl: string
}

export interface SetProfileType {
  type: ProfileActionsEnum.SET_PROFILE
  payload: profilePayload
}

export interface SetErrorType {
  type: ProfileActionsEnum.SET_ERROR
  payload: string | null
}

export interface SetIsLoading {
  type: ProfileActionsEnum.SET_IS_LOADING
  payload: boolean
}



export type ProfileAction = SetPostsType | SetProfileType | SetErrorType | SetIsLoading