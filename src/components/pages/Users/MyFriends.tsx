import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getFriendsData } from '../../../store/selectors/usersSelectors';
import { UserItem } from './UserItem';

export const MyFriends = () => {

  const friendsData = useTypedSelector(getFriendsData);  

  return (
    <div>
       {friendsData.map((user) => (
        <UserItem
          key={user.user_id}
          id={user.user_id}
          avatar={user.file_name}
          isFriend={user.isFriend}
          userName={user.user_name}
        />
      ))}
    </div>
  )
}
