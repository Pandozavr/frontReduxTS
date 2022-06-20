import styles from "./Chat.module.css"
import { DialogWindow } from "./DialogWindow/DialogWindow"
import { EnterMsg } from "./EnterMsg/EnterMsg"
import { UserList } from "./UserList/UserList"

export const Chat = () => {
  return (
    <div className={styles.chatWrapper}>
      <DialogWindow />
      <EnterMsg />
      <UserList />
    </div>
  )
}
