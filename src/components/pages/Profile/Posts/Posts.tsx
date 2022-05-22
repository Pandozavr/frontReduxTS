import { PostForm } from "./PostForm/PostForm";
import { useEffect } from 'react';
import { useActions } from '../../../../hooks/useActions';
import { PostsList } from "./PostsList/PostsList";
import styles from "./PostsList/PostItemMain.module.css"

export const Posts = () => {

  const {getPostsThunk} = useActions()

  useEffect(()=>{
    getPostsThunk()
  })

  return (
    <div className={styles.postListWrapper}>
      <PostForm />
      <PostsList />
    </div>
  )
}
