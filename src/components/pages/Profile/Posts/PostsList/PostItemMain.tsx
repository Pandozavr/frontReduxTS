import { FC, useState } from "react";
import { PostItemEditOn } from "./PostItemEditOn";
import { PostItemEditOff } from "./PostItemEditOff";
import styles from "./PostItemMain.module.css";
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { getAvatar } from '../../../../../store/selectors/profileSelectors';

interface PostType {
  id: number;
  postText: string;
}

export const PostItemMain: FC<PostType> = ({ id, postText }) => {
  const [editModeValue, setEditMode] = useState(false);
  const onEditMode = () => setEditMode(true);
  const offEditMode = () => setEditMode(false);

  const avatar = useTypedSelector(getAvatar);

  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </div>
      {!editModeValue ? (
        <PostItemEditOff id={id} postText={postText} click={onEditMode} />
      ) : (
        <PostItemEditOn id={id} postText={postText} click={offEditMode} />
      )}
    </div>
  );
};
