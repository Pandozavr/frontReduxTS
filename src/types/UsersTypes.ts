import { getUserViewData } from '../API/apiTypes';
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
  userInfo: getUserViewData | null
}

export enum UsersActionsEnum {
  SET_USERS = "SET_USERS",
  SET_ERROR = "SET_ERROR",
  SET_USER_INFO = "SET_USER_INFO"
}

export interface SetUsersType {
  type: UsersActionsEnum.SET_USERS
  payload: Array<userItem>
}

export interface SetErrorType {
  type: UsersActionsEnum.SET_ERROR
  payload: string
}

export interface SetUserInfoType {
  type: UsersActionsEnum.SET_USER_INFO
  payload: getUserViewData
}

export type UsersAction = SetUsersType | SetErrorType | SetUserInfoType