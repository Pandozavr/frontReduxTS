import { RootState } from '../store';

//из общего списка пользователей удаляем авторизованного себя
export const getUsersData = (state: RootState) => {
  const allUsers = state.users.users
  const idAuthUser = state.profile.userID
  for(let i=0; i < allUsers.length; i++){
    if(allUsers[i].user_id === idAuthUser){
      allUsers.splice(i,1)
    }
  }  
  return allUsers
};

//из всех юзеров вычлиняем только добавленных в друзья
export const getFriendsData = (state: RootState) => {
  const allUsers = state.users.users
  let friends = []
  for(let i = 0; allUsers.length > i; i++){
    if(allUsers[i].isFriend === 1){
      friends.push(allUsers[i])
    }
  } 
  return friends
};