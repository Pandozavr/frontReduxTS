import { RootState } from '../store';

export const getIsAuthValue = (state: RootState) => {
    return state.auth.isAuth
};
export const getPreloadValue = (state: RootState) => {
    return state.auth.isLoading
};
export const getError = (state: RootState) => {
    return state.auth.error
};
