import { FC, useState } from "react";
import { btnVariant, Button, btnSize } from '../../../../common/Button/Button';
import { useActions } from "../../../../../hooks/useActions";
import styles from "./PostItemMain.module.css"

interface EditPost {
  id: number;
  postText: string;
  click: () => void;
}

export const PostItemEditOn: FC<EditPost> = ({ id, postText, click }) => {
  const [inputValue, setInputValue] = useState(postText);
  const { updPostThunk } = useActions();
  const updPost = () => {
    updPostThunk(id, inputValue);
    click();
  };

  return (
    <div className={styles.editOffContent}>
      <div className={styles.inpWrapper}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <div className={styles.btnWrapper}>
        <Button name="Apply" type={btnVariant.green} size={btnSize.small} click={updPost} />
        <Button name="Cancel" type={btnVariant.red} size={btnSize.small} click={click} />
      </div>
    </div>
  );
};
