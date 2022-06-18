export interface userItem{
  email: string
  file_name: string
  isFriend: number
  user_id: number
  user_name: string
}

export interface UsersState{
  users: Array<userItem>
  error: string | null
}

export enum UsersActionsEnum {
  SET_USERS = "SET_USERS",
  SET_ERROR = "SET_ERROR"
}

export interface SetUsersType {
  type: UsersActionsEnum.SET_USERS
  payload: Array<userItem>
}

export interface SetErrorType {
  type: UsersActionsEnum.SET_ERROR
  payload: string
}

export type UsersAction = SetUsersType | SetErrorType