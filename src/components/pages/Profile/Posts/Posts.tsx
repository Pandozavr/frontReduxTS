import { PostForm } from "./PostForm/PostForm";
import { useEffect } from 'react';
import { useActions } from '../../../../hooks/useActions';
import { PostsList } from "./PostsList/PostsList";

export const Posts = () => {

  const {getPostsThunk} = useActions()

  useEffect(()=>{
    getPostsThunk()
  })

  return (
    <div>
      <PostForm />
      <PostsList />
    </div>
  )
}
