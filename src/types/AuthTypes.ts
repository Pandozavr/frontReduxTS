export interface AuthState {
  isAuth: boolean
  isLoading: boolean
  error: string | null
}

export enum AuthActionsEnum {
  SET_ISAUTH = "SET_ISAUTH",
  SET_ISLOADING = "SET_ISLOADING",
  SET_ERROR = "SET_ERROR",
}

export interface SetIsAuthAction {
  type: AuthActionsEnum.SET_ISAUTH
  payload: boolean
}

export interface SetIsLoading {
  type: AuthActionsEnum.SET_ISLOADING
  payload: boolean
}

export interface SetError {
  type: AuthActionsEnum.SET_ERROR
  payload: string | null
}

export type AuthAction = SetIsAuthAction | SetIsLoading | SetError