import { UserItem } from "./UserItem";
import { useActions } from "../../../hooks/useActions";
import { useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getUsersData } from "../../../store/selectors/usersSelectors";
import { Loader } from "../../common/Loader/Loader";
import styles from "./Users.module.css"

export const Users = () => {
  const [preloadValue, setPreloadValue] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { getUsersThunk } = useActions();

  useEffect(() => {
    setPreloadValue(true);
    getUsersThunk();
    setPreloadValue(false);
  }, []);

  const usersData = useTypedSelector(getUsersData);

  const searchedUsers = useMemo(() => {
    if(searchValue === "") {
        return usersData
    } else {
        return usersData.filter(user => user.user_name.toLowerCase().includes(searchValue.toLowerCase()))
    }
}, [searchValue, usersData]);

  return (
    <div>
      <div className={styles.searchWrapper}>
        <p>Find Friend</p>
        <input value={searchValue} onChange={e => setSearchValue(e.currentTarget.value)} type="text" />
      </div>
      {preloadValue ? (
        <Loader />
      ) : (
        searchedUsers.map((user) => (
          <UserItem
            key={user.user_id}
            id={user.user_id}
            avatar={user.file_name}
            isFriend={user.isFriend}
            userName={user.user_name}
          />
        ))
      )}
    </div>
  );
};
