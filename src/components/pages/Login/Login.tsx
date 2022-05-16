import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Login.module.css"
import { useActions } from '../../../hooks/useActions';
import { btnVariant, Button } from '../../common/Button/Button';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getError, getIsAuthValue } from '../../../store/selectors/authSelectors';
import { Navigate } from "react-router-dom";
import { Error } from "../../common/Error/Error";

export const Login: FC = () => {

  const isAuth = useTypedSelector(getIsAuthValue)
  const error = useTypedSelector(getError)

  const {login} = useActions()

  type Inputs = {
    email: string,
    password: string,
  };

  const {register, handleSubmit, formState: { errors }} = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => login(data.email, data.password)


  if (isAuth) {
    return <Navigate to={"/profile"}/>
}

  return (
    <div className={styles.wrapperAuthForm}>
        <form className={styles.authForm}
              onSubmit={handleSubmit(onSubmit)}
        >
            <input type="text" placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span style={{color:"red"}}>This field is required</span>}

            <input type="password" placeholder="Password" {...register("password", { required: true })} />
            {errors.password && <span style={{color:"red"}}>This field is required</span>}

            <Button type={btnVariant.blue} name="Login" />
        </form>
        {error && <Error textError={error}/>}
    </div>
);
};
