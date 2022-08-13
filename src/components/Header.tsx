import { FC, memo } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { btnVariant, Button } from "./common/Button/Button";
import styles from "./Header.module.css";
import { getIsAuthValue } from "../store/selectors/authSelectors";
import { Link } from "react-router-dom";
import { useActions } from "../hooks/useActions";

export const Header: FC = memo(() => {
  const isAuth = useTypedSelector(getIsAuthValue);
  const {logout} = useActions()

  return (
    <div className={styles.header}>
      {!isAuth ? 
        <>
          <Link to="/login">
            <Button name="Login" type={btnVariant.blue} />
          </Link>
          <Link to="/register">
            <Button name="Register" type={btnVariant.blue} />
          </Link>
        </>
       : 
        <Button click={logout} name="Logout" type={btnVariant.red} />
      }
    </div>
  );
});
