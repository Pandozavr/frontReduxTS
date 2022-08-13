import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { getUserName, getAvatar } from '../../../../store/selectors/profileSelectors';
import { useActions } from '../../../../hooks/useActions';
import { BaseSyntheticEvent, useEffect } from 'react';
import styles from "./AvaInfo.module.css";

export const AvaInfo = () => {

  const userName = useTypedSelector(getUserName)
  const avatar = useTypedSelector(getAvatar)
  const {getProfileThunk} = useActions()
  const {updAvatarThunk} = useActions()

  const getFile = (e: BaseSyntheticEvent) => {
    if(e.target.files.length){
      updAvatarThunk(e.target.files[0])
  }
}
  useEffect(()=>{
    getProfileThunk()
  })

  return (
    <div>
      <p>Hello {userName}</p>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <div>
        <label className={styles.btnAvatar}>
          New Avatar
          <input
            onChange={getFile}
            style={{ display: "none" }}
            accept="image/jpeg,image/png"
            name="file"
            type="file"
          />
        </label>
      </div>
    </div>
  )
}
