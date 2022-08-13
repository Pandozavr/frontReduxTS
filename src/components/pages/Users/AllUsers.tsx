import { useMemo, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getUsersData } from '../../../store/selectors/usersSelectors';
import { UserItem } from './UserItem';
import styles from "./Users.module.css";

export const AllUsers = () => {

  const [searchValue, setSearchValue] = useState("");
  const usersData = useTypedSelector(getUsersData);
  const searchedUsers = useMemo(() => {
    if (searchValue === "") {
      return usersData;
    } else {
      return usersData.filter((user) =>
        user.user_name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }, [searchValue, usersData]);

  return (
    <div>
      <div className={styles.searchWrapper}>
        <p>Find Friend</p>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          type="text"
        />
      </div>
      {searchedUsers.map((user) => (
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
