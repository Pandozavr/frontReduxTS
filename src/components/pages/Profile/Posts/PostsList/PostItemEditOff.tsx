import { Button, btnVariant, btnSize } from '../../../../common/Button/Button';
import { useActions } from '../../../../../hooks/useActions';
import { FC } from 'react';
import styles from "./PostItemMain.module.css"

interface EditOff{
  id: number
  postText: string
  click: ()=>void
}

export const PostItemEditOff: FC<EditOff> = ({id, postText, click}) => {

  
  const { delPostThunk } = useActions();

  const delPost = () => {
    delPostThunk(id);
  };

  return (
    <div className={styles.editOffContent}>
      <div>{postText}</div>
      <div className={styles.btnWrapper}>
        <Button name="Edit" type={btnVariant.blue} size={btnSize.small} click={click} />
        <Button name="Delete" type={btnVariant.red} size={btnSize.small} click={delPost} />
      </div>
    </div>
  );
};