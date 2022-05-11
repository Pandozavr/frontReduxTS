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
export const setError = (payload: string | null): SetErrorType => {
  return {
      type: ProfileActionsEnum.SET_ERROR,
      payload
  }
};
export const setIsLoading = (payload: boolean): SetIsLoading => {
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
      dispatch(setIsLoading(true));
      dispatch(setProfileData(res.data));
      dispatch(setIsLoading(false));
  } catch(e: any) {
      dispatch(setError(e.message))
  }
};

export const getPostsThunk = (): ThunkType => async (dispatch) => {
  try{
      let res = await profileAPI.getPosts();
      console.log(res.posts);
      
      dispatch(setIsLoading(true));
      dispatch(setPosts(res.posts))
  } catch(e: any) {
      dispatch(setError(e.message))
  }
};

export const addPostThunk = (textPost: string): ThunkType => async (dispatch) => {
  try{
      await profileAPI.sendPost(textPost);
      dispatch(getPostsThunk())
  } catch(e: any) {
      dispatch(setError(e.message))
  }
};

export const delPostThunk = (postID: number): ThunkType => async (dispatch) => {
  try{
      await profileAPI.deletePost(postID)
      dispatch(getPostsThunk())
  } catch(e: any) {
      dispatch(setError(e.message))
  }
};
export const updPostThunk = (postID: number, postText: string): ThunkType => async (dispatch) => {
  try{
      await profileAPI.updatePost(postID, postText);
      dispatch(getPostsThunk())
  } catch(e: any) {
      dispatch(setError(e.message))
  }
};
export const updAvatarThunk = (file: string): ThunkType => async (dispatch) => {
  try{
      let res = await profileAPI.uploadAvatar(file);
      console.log(res)
      dispatch(getProfileThunk())
  } catch(e: any) {
      dispatch(setError(e.message))
  }
};