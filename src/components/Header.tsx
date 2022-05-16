import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { btnVariant, Button } from "./common/Button/Button";
import styles from "./Header.module.css";
import { getIsAuthValue } from "../store/selectors/authSelectors";
import { NavLink } from "react-router-dom";
import { useActions } from "../hooks/useActions";

export const Header: FC = () => {
  const isAuth = useTypedSelector(getIsAuthValue);
  const {logout} = useActions()

  return (
    <div className={styles.header}>
      {!isAuth ? 
        <>
          <NavLink to="/login">
            <Button name="Login" type={btnVariant.blue} />
          </NavLink>
          <NavLink to="/register">
            <Button name="Register" type={btnVariant.blue} />
          </NavLink>
        </>
       : 
        <Button click={logout} name="Logout" type={btnVariant.red} />
      }
    </div>
  );
};
