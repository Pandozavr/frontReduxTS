import styles from "./UserList.module.css";
import { FC, memo } from 'react';

interface user {
  id: string;
  user: string;
}

interface userArrType {
  userList: Array<user>;
}

export const UserList: FC<userArrType> = memo(({ userList }) => {
  return (
    <div className={styles.userList}>
      {userList &&
        userList.map((user) => (
          <div className={styles.userItem} key={user.id}>
            {user.user}
          </div>
        ))}
    </div>
  );
});
