import { btnVariant, Button } from "../../../../common/Button/Button"
import styles from "./PostForm.module.css"
import { useActions } from '../../../../../hooks/useActions';
import { useState } from 'react';

export const PostForm = () => {

  const {addPostThunk} = useActions()

  const [inputText, setInputText] = useState("");

  const addPost = () => {
    addPostThunk(inputText)
    setInputText("")
  }

  return (
    <div className={styles.postForm}>
      <input type="text" value={inputText} onChange={event => setInputText(event.target.value)}/>
      <Button name="Add" type={btnVariant.blue} click={addPost} />
    </div>
  )
}
