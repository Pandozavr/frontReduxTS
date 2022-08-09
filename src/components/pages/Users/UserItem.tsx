import { FC } from "react"
import styles from "./UserItem.module.css"
import { FILE_URL } from '../../../API/API';
import { btnSize, btnVariant, Button } from "../../common/Button/Button";
import { useActions } from '../../../hooks/useActions';
//@ts-ignore
import noAvatar from "../../../assets/images/no-avatar.png"

interface usersProps{
  id: number
  isFriend: number
  avatar: string
  userName: string
}

export const UserItem: FC<usersProps> = ({avatar,id,isFriend,userName}) => {

  const {followThunk} = useActions()
  const {unFollowThunk} = useActions()

  const clickFollow =() => followThunk(id)
  const clickUnFollow =() => unFollowThunk(id)

  let urlAva;

  if(avatar === "none"){
    urlAva = noAvatar
  }else {
    urlAva = FILE_URL + avatar;
  }

  return (
    <div className={styles.wrapper}>
      <img src={urlAva} alt="avatar" />
      {userName}
      {isFriend === 0 
      ? <Button name="Follow" type={btnVariant.blue} size={btnSize.small} click={clickFollow} />
      : <Button name="unFollow" type={btnVariant.red} size={btnSize.small} click={clickUnFollow} />
    }
    </div>
  )
}
