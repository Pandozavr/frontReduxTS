import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { getAvatar } from '../../../../../store/selectors/profileSelectors';
import { Button, btnVariant } from '../../../../common/Button/Button';
import { useActions } from '../../../../../hooks/useActions';
import { FC } from 'react';

interface EditOff{
  id: number
  postText: string
  click: ()=>void
}

export const PostItemEditOff: FC<EditOff> = ({id, postText, click}) => {

  const avatar = useTypedSelector(getAvatar);
  const { delPostThunk } = useActions();

  const delPost = () => {
    delPostThunk(id);
  };

  return (
    <>
      <div>
        <img
          style={{ width: "50px", display: "block" }}
          src={avatar}
          alt="avatar"
        />
      </div>
      <div>{postText}</div>
      <div>
        <Button name="Edit" type={btnVariant.blue} click={click} />
        <Button name="Delete" type={btnVariant.red} click={delPost} />
      </div>
    </>
  );
};
