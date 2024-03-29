import { Outlet } from 'react-router-dom';
import styles from "./Content.module.css";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getIsAuthValue } from "../store/selectors/authSelectors";

export const Content = () => {

  const isAuth = useTypedSelector(getIsAuthValue);
  let styleVariant;
  if (isAuth) {
    styleVariant = styles.content;
  } else {
    styleVariant = styles.contentNotAuth;
  }

  return (
    <>
      <div className={styleVariant}>
        <Outlet />
      </div>
    </>
  );
};
