import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { getPosts } from "../../../../../store/selectors/profileSelectors";
import { PostItemMain } from "./PostItemMain";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../Transition.css"

export const PostsList = () => {
  const postData = useTypedSelector(getPosts);

  return (
    <div>
       <TransitionGroup>
       {postData.map((post) => (
        <CSSTransition key={post.post_id} timeout={500} classNames="post">
          <PostItemMain id={post.post_id} postText={post.post_text} />
        </CSSTransition>
      ))}
       </TransitionGroup>
    </div>
  );
};
