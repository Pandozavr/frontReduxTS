import { FC } from 'react';
import styles from './DialogWindow.module.css'
import { MsgItem } from './MsgItem';

interface msgArrItem{
  event: "connection" | "message"
  id: number
  userName: string
  message?: string
}

interface msgArrType{
  msgArr: Array<msgArrItem>
}

export const DialogWindow: FC<msgArrType> = ({msgArr}) => {  

  return (
    <div className={styles.dialog}>
      {msgArr.map(msg => <MsgItem key={msg.id} event={msg.event} id={msg.id} userName={msg.userName} message={msg.message} />)}
    </div>
  )
}
