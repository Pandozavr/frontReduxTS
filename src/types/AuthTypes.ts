export enum AuthActionTypes {
  SET_AUTH = "SET_AUTH",
  SET_PRELOAD = "SET_PRELOAD",
  SET_REGISTER = "SET_REGISTER",
  SET_ERROR = "SET_ERROR"
}

export interface AuthState {
  isAuth: boolean,
  isLoading: boolean,
  isReg: boolean,
  error: null | string    
}

export interface AuthAction {
  type: AuthActionTypes.SET_AUTH,
  payload: boolean
}
export interface PreloadAction {
  type: AuthActionTypes.SET_PRELOAD,
  payload: boolean
}
export interface RegisterAction {
  type: AuthActionTypes.SET_REGISTER,
  payload: boolean
}
export interface AuthErrorAction {
  type: AuthActionTypes.SET_ERROR,
  payload: string | null
}

export type MainAuthAction = AuthAction | PreloadAction | RegisterAction | AuthErrorAction