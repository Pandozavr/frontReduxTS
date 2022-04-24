import { Dispatch } from "redux";
import {authAPI} from "../../API/API";
import { AuthState, 
    MainAuthAction, 
    AuthActionTypes, 
    AuthAction, 
    AuthErrorAction, 
    PreloadAction, 
    RegisterAction } from '../../types/AuthTypes';

const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    isReg: false,
    error: null
};

export const authReducer = (state = initialState, action: MainAuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH: {
            return {...state, isAuth: action.payload}
        }
        case AuthActionTypes.SET_PRELOAD: {
            return {...state, isLoading: action.payload}
        }
        case AuthActionTypes.SET_ERROR: {
            return {...state, error: action.payload}
        }
        case AuthActionTypes.SET_REGISTER: {
            return {...state, isReg: action.payload}
        }
        default:
            return state;
    }
};


////////////////////ActionCreators

export const setAuthAction = (payload:boolean): AuthAction => {
    return {
        type: AuthActionTypes.SET_AUTH,
        payload
    }
};
export const setPreloadAction = (payload:boolean): PreloadAction => {
    return {
        type: AuthActionTypes.SET_PRELOAD,
        payload
    }
};
export const setRegisterAction = (payload:boolean): RegisterAction => {
    return {
        type: AuthActionTypes.SET_REGISTER,
        payload
    }
};
export const setErrorAction = (payload: null|string): AuthErrorAction => {
    return {
        type: AuthActionTypes.SET_ERROR,
        payload
    }
};

//////////////////////THUNK

export const loginThunk = (email: string, password: string) => async (dispatch: Dispatch<MainAuthAction>) => {
    try{
        await authAPI.login(email, password);
        dispatch(setAuthAction(true))
    } catch(e:any) {
        dispatch(setErrorAction(e.message))
        setTimeout(() => dispatch(setErrorAction(null)), 5000)
    }

};
export const logOutThunk = () => async (dispatch: Dispatch<MainAuthAction>) => {
    try{
        await authAPI.logout();
        dispatch(setAuthAction(false))
    } catch(e) {
        console.log(e)
    }
};
export const registerThunk = (email: string, password: string, user_name: string) => async (dispatch: Dispatch<MainAuthAction>) => {
    try{
        await authAPI.register(email, password, user_name);
        dispatch(setRegisterAction(true))
        setTimeout(() => dispatch(setRegisterAction(false)), 5000)
    } catch(e: any) {
        dispatch(setErrorAction(e.message))
        setTimeout(() => dispatch(setErrorAction(null)), 5000)
    }
};

