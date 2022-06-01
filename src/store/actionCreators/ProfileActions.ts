import { ProfileActionsEnum, 
  SetPostsType, 
  profilePayload, 
  SetProfileType, 
  SetErrorType, 
  ProfileAction, 
  SetIsLoading, 
  posts } from '../../types/ProfileTypes';
import { profileAPI } from '../../API/API';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export const setPosts = (payload: Array<posts>): SetPostsType => {
  return {
      type: ProfileActionsEnum.SET_POSTS,
      payload
  }
};
export const setProfileData = (payload: profilePayload): SetProfileType => {
  return {
      type: ProfileActionsEnum.SET_PROFILE,
      payload
  }
};
export const setErrorProfile = (payload: string | null): SetErrorType => {
  return {
      type: ProfileActionsEnum.SET_ERROR,
      payload
  }
};
export const setIsLoadingProfile = (payload: boolean): SetIsLoading => {
  return {
      type: ProfileActionsEnum.SET_IS_LOADING,
      payload
  }
};

////////THUNK

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ProfileAction>

export const getProfileThunk = (): ThunkType => async (dispatch) => {
  try{
      let res = await profileAPI.getProfileData();
      dispatch(setIsLoadingProfile(true));
      dispatch(setProfileData(res.data));
      dispatch(setIsLoadingProfile(false));
  } catch(e: any) {
      dispatch(setErrorProfile(e.message))
  }
};

export const getPostsThunk = (): ThunkType => async (dispatch) => {
  try{
      let res = await profileAPI.getPosts();      
      dispatch(setIsLoadingProfile(true));
      dispatch(setPosts(res.posts))
      dispatch(setIsLoadingProfile(false));
  } catch(e: any) {
      dispatch(setErrorProfile(e.message))
  }
};

export const addPostThunk = (textPost: string): ThunkType => async (dispatch) => {
  try{
      await profileAPI.sendPost(textPost);
      dispatch(setIsLoadingProfile(true));
      dispatch(getPostsThunk())
      dispatch(setIsLoadingProfile(false));
  } catch(e: any) {
      dispatch(setErrorProfile(e.message))
  }
};

export const delPostThunk = (postID: number): ThunkType => async (dispatch) => {
  try{
      await profileAPI.deletePost(postID)
      dispatch(getPostsThunk())
  } catch(e: any) {
      dispatch(setErrorProfile(e.message))
  }
};
export const updPostThunk = (postID: number, postText: string): ThunkType => async (dispatch) => {
  try{
      await profileAPI.updatePost(postID, postText);
      dispatch(getPostsThunk())
  } catch(e: any) {
      dispatch(setErrorProfile(e.message))
  }
};
export const updAvatarThunk = (file: string): ThunkType => async (dispatch) => {
  try{
      await profileAPI.uploadAvatar(file);
      dispatch(setIsLoadingProfile(true));
      dispatch(getProfileThunk())
      dispatch(setIsLoadingProfile(false));
  } catch(e: any) {
      dispatch(setErrorProfile(e.message))
  }
};