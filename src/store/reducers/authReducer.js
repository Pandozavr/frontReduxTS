import {authAPI} from "../../API/API";

const SET_AUTH = "SET_AUTH";
const SET_PRELOAD = "SET_PRELOAD";
const SET_REGISTER = "SET_REGISTER";
const SET_ERROR = "SET_ERROR";

const initialState = {
    isAuth: false,
    isLoading: false,
    isReg: false,
    error: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH: {
            return {...state, isAuth: action.payload}
        }
        case SET_PRELOAD: {
            return {...state, isLoading: action.payload}
        }
        case SET_ERROR: {
            return {...state, error: action.payload}
        }
        case SET_REGISTER: {
            return {...state, isReg: action.payload}
        }
        default:
            return state;
    }
};


export const setAuthAction = (payload) => {
    return {
        type: SET_AUTH,
        payload
    }
};
export const setPreloadAction = (payload) => {
    return {
        type: SET_PRELOAD,
        payload
    }
};
export const setRegisterAction = (payload) => {
    return {
        type: SET_REGISTER,
        payload
    }
};
export const setErrorAction = (payload) => {
    return {
        type: SET_ERROR,
        payload
    }
};

//////////////////////THUNK

export const loginThunk = (email, password) => async (dispatch) => {
    try{
        let data = await authAPI.login(email, password);
        dispatch(setAuthAction(true))
    } catch(e) {
        dispatch(setErrorAction(e.message))
        setTimeout(() => dispatch(setErrorAction(null)), 5000)
    }

};
export const logOutThunk = () => async (dispatch) => {
    try{
        let data = await authAPI.logout();
        dispatch(setAuthAction(false))
    } catch(e) {
        console.log(e)
    }
};
export const registerThunk = (email, password, user_name) => async (dispatch) => {
    try{
        let data = await authAPI.register(email, password, user_name);
        dispatch(setRegisterAction(true))
        setTimeout(() => dispatch(setRegisterAction(false)), 5000)
    } catch(e) {
        dispatch(setErrorAction(e.message))
        setTimeout(() => dispatch(setErrorAction(null)), 5000)
    }
};

