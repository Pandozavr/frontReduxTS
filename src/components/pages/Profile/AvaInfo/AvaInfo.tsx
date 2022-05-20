import { useTypedSelector } from "../../../../hooks/useTypedSelector"
import { getUserName, getAvatar } from '../../../../store/selectors/profileSelectors';
import { useActions } from '../../../../hooks/useActions';
import { useEffect } from 'react';

export const AvaInfo = () => {

  const userName = useTypedSelector(getUserName)
  const avatar = useTypedSelector(getAvatar)
  const {getProfileThunk} = useActions()

  useEffect(()=>{
    getProfileThunk()
  })

  return (
    <div>
      <p>Hello {userName}</p>
      <img style={{ width: "200px", display: "block" }} src={avatar} alt="avatar" />
      <div>
        <label>
          {" "}
          Сменить аватарку
          <input
            //onChange={getFile}
            style={{ display: "none" }}
            name="file"
            type="file"
          />
        </label>
      </div>
    </div>
  )
}
