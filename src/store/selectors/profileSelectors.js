export const getPosts = (state) => {
    const sortPosts = state.profile.posts.sort(function(a, b) {
        return b.post_id - a.post_id;
    })
    return sortPosts
};
export const getAvatar = (state) => {
    return state.profile.avatarUrl
};
export const getUserName = (state) => {
    return state.profile.userName
};

