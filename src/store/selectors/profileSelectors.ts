import { RootState } from '../store';
//@ts-ignore
import noAvatar from "../../assets/images/no-avatar.png"


export const getUserName = (state: RootState) => {
  return state.profile.userName
};
export const getIsLoadingValue = (state: RootState) => {
  return state.profile.isLoading
};

export const getAvatar = (state: RootState) => {
  if(state.profile.avatarUrl === "http://localhost:3001/none"){
    return noAvatar
  } else {
    return state.profile.avatarUrl
  }
};

export const getPosts = (state: RootState) => {
  const posts = state.profile.posts;
  const postsSort = posts.sort(function(a, b) {
    return b.post_id - a.post_id;
})
  return postsSort
};