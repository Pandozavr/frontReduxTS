import { FC, useState } from "react";
import { PostItemEditOn } from "./PostItemEditOn";
import { PostItemEditOff } from "./PostItemEditOff";
import styles from "./PostItemMain.module.css";

interface PostType {
  id: number;
  postText: string;
}

export const PostItemMain: FC<PostType> = ({ id, postText }) => {

  const [editModeValue, setEditMode] = useState(false);
  const onEditMode = () => setEditMode(true);
  const offEditMode = () => setEditMode(false);

  return (
    <div className={styles.wrapper} >
      {!editModeValue ? (
        <PostItemEditOff id={id} postText={postText} click={onEditMode} />
      ) : (
        <PostItemEditOn id={id} postText={postText} click={offEditMode} />
      )}
    </div>
  );
};
