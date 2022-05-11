import { ProfileState, ProfileActionsEnum, ProfileAction } from '../../types/ProfileTypes';


const initialState: ProfileState = {
    avatarUrl: "",
    userName: "",
    posts: [],
    isLoading: false,
    error: null
};

export const profileReducer = (state = initialState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ProfileActionsEnum.SET_POSTS: {
            return {...state, posts: action.payload}
        }
        case ProfileActionsEnum.SET_PROFILE: {
            return {...state, avatarUrl: action.payload.avaUrl, userName: action.payload.userName}
        }
        case ProfileActionsEnum.SET_ERROR: {
            return {...state, error: action.payload}
        }
        default:
            return state;
    }
};