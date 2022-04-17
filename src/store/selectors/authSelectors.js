export const getIsAuthValue = (state) => {
    return state.auth.isAuth
};
export const getPreloadValue = (state) => {
    return state.auth.isLoading
};
export const getIsRegValue = (state) => {
    return state.auth.isReg
};
export const getError = (state) => {
    return state.auth.error
};
