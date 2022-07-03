import { FC } from 'react';
import styles from "./MsgItem.module.css"


interface MsgPropsType{
  id: number
  userName: string
  message?: string
  event: "connection" | "message" | "exit"
}

export const MsgItem: FC<MsgPropsType> = ({id, userName, message, event}) => {
  return (
    <div className={styles.msgItemWrapper}>
      {event === "exit" && <div>{`${userName} выпилился из чата`}</div>}
      {event === "connection" && <div>{`${userName} ворвался в чат`}</div>}
      {event === "message" && <div>{`${userName}: ${message}`}</div>}
    </div>
  )
}
