import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { useActions } from "../../../hooks/useActions";
import { btnVariant, Button } from "../../common/Button/Button";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
  getError,
  getIsAuthValue,
} from "../../../store/selectors/authSelectors";
import { useNavigate } from "react-router-dom";
import { Error } from "../../common/Error/Error";

export const Login: FC = () => {
  const isAuth = useTypedSelector(getIsAuthValue);
  const error = useTypedSelector(getError);
  const navigate = useNavigate();

  const { login } = useActions();

  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //если пользователь авторизован, то перенаправляем его либо на профайл, либо на страницу на которой он был последний раз
  useEffect(() => {
    if (isAuth) {
      let loc = sessionStorage.getItem("lastLocation");
      if (loc === null) {
        navigate("/profile");
      }
      if (loc === "/") {
        navigate("/profile");
      }
      if (loc !== null && loc !== "/") {
        navigate(loc);
      }
    }
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    login(data.email, data.password);

  return (
    <div className={styles.wrapperAuthForm}>
      <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>This field is required</span>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span style={{ color: "red" }}>This field is required</span>
        )}

        <Button type={btnVariant.blue} name="Login" />
      </form>
      {error && <Error msgText={error} msgType="error" />}
    </div>
  );
};
