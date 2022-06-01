import { AuthAction, AuthActionsEnum, SetError, SetIsAuthAction, SetIsLoading } from "../../types/AuthTypes";
import { Dispatch } from 'redux';
import { authAPI } from "../../API/API";

export const setIsAuthAction = (payload:boolean): SetIsAuthAction => {
    return {
        type: AuthActionsEnum.SET_ISAUTH,
        payload
    }
};
export const setIsLoadingAuth = (payload:boolean): SetIsLoading => {
    return {
        type: AuthActionsEnum.SET_ISLOADING,
        payload
    }
};
export const setErrorAuth = (payload: null|string): SetError => {
    return {
        type: AuthActionsEnum.SET_ERROR,
        payload
    }
}

export const login = (email: string, password: string) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch(setIsLoadingAuth(true))
    await authAPI.login(email, password)
    dispatch(setIsAuthAction(true))
    dispatch(setIsLoadingAuth(false))
  } catch (e:any) {   
    if(e.response){
      dispatch(setErrorAuth(e.response.data.message))
    } else {
      dispatch(setErrorAuth(e.message))
    }
    setTimeout(() => dispatch(setErrorAuth(null)), 3000)
  }
}

export const logout = () => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch(setIsLoadingAuth(true))
    await authAPI.logout()
    dispatch(setIsAuthAction(false))
    dispatch(setIsLoadingAuth(false))
  } catch (e:any) {
    if(e.response){
      dispatch(setErrorAuth(e.response.data.message))
    } else {
      dispatch(setErrorAuth(e.message))
    }
    setTimeout(() => dispatch(setErrorAuth(null)), 3000)
  }
}

export const register = (email: string, password: string, user_name: string) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch(setIsLoadingAuth(true))
    await authAPI.register(email, password, user_name)
    dispatch(setIsAuthAction(false))
    dispatch(setIsLoadingAuth(false))
  } catch (e:any) {
    if(e.response){
      dispatch(setErrorAuth(e.response.data.message))
    } else {
      dispatch(setErrorAuth(e.message))
    }
    setTimeout(() => dispatch(setErrorAuth(null)), 3000)
  }
}