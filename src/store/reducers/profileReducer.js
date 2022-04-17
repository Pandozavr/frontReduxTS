import {profileAPI} from "../../API/API";
import {setPreloadAction} from "./authReducer";

const SET_POSTS = "SET_POSTS";
const SET_PROFILE = "SET_PROFILE";
const SET_ERROR = "SET_ERROR";

const initialState = {
    userName: "",
    avatarUrl: "",
    posts: [],
    error: ""
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {...state, userName: action.payload.userName, avatarUrl: action.payload.avaUrl}
        }
        case SET_POSTS: {
            return {...state, posts: action.payload}
        }
        default:
            return state;
    }
};

export const setProfileData = (payload) => {
    return {
        type: SET_PROFILE,
        payload
    }
}

export const setPostsAction = (payload) => {
    return {
        type: SET_POSTS,
        payload
    }
};
export const setErrorAction = (payload) => {
    return {
        type: SET_ERROR,
        payload
    }
};

////////////////////////////////THUNK

export const getProfileThunk = () => async (dispatch) => {
    try{
        let res = await profileAPI.getProfileData();
        dispatch(setPreloadAction(true));
        dispatch(setProfileData(res.data));
        dispatch(setPreloadAction(false));
    } catch(e) {
        dispatch(setErrorAction(e.message))
    }
};

export const getPostsThunk = () => async (dispatch) => {
    try{
        let res = await profileAPI.getPosts();
        dispatch(setPostsAction(res.posts))
    } catch(e) {
        dispatch(setErrorAction(e.message))
    }
};

export const addPostThunk = (textPost) => async (dispatch) => {
    try{
        let res = await profileAPI.sendPost(textPost);
        dispatch(getPostsThunk())
    } catch(e) {
        dispatch(setErrorAction(e.message))
    }
};

export const delPostThunk = (postID) => async (dispatch) => {
    try{
        let res = await profileAPI.deletePost(postID)
        dispatch(getPostsThunk())
    } catch(e) {
        dispatch(setErrorAction(e.message))
    }
};
export const updPostThunk = (postID, postText) => async (dispatch) => {
    try{
        let res = await profileAPI.updatePost(postID, postText);
        dispatch(getPostsThunk())
    } catch(e) {
        dispatch(setErrorAction(e.message))
    }
};
export const updAvatarThunk = (file) => async (dispatch) => {
    try{
        let res = await profileAPI.uploadAvatar(file);
        console.log(res)
        dispatch(getProfileThunk())
    } catch(e) {
        dispatch(setErrorAction(e.message))
    }
};