import { AuthState, AuthAction, AuthActionsEnum } from '../../types/AuthTypes';

const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    error: null
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_ISAUTH: {
            return {...state, isAuth: action.payload}
        }
        case AuthActionsEnum.SET_ISLOADING: {
            return {...state, isLoading: action.payload}
        }
        case AuthActionsEnum.SET_ERROR: {
            return {...state, error: action.payload}
        }
        default:
            return state;
    }
};