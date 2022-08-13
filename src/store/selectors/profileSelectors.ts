import { RootState } from '../store';
import noAvatar from "../../assets/images/no-avatar.png"


export const getUserName = (state: RootState) => {
  return state.profile.userName
};
export const getIsLoadingValue = (state: RootState) => {
  return state.profile.isLoading
};

//возвращаем автарку если есть, если нет стандартную картинку при отсутствии аватара
export const getAvatar = (state: RootState) => {
  if(state.profile.avatarUrl === "http://45.147.178.191:3001/none"){
    return noAvatar
  } else {
    return state.profile.avatarUrl
  }
};

//возвращаем посты в обратной последовательности т.к. последни посты должны быть сверху
export const getPosts = (state: RootState) => {
  const posts = state.profile.posts;
  const postsSort = posts.sort(function(a, b) {
    return b.post_id - a.post_id;
})
  return postsSort
};