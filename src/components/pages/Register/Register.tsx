import { Button, btnVariant } from '../../common/Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useActions } from '../../../hooks/useActions';
import styles from "../Login/Login.module.css"
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getIsAuthValue, getError } from '../../../store/selectors/authSelectors';
import { Navigate } from 'react-router-dom';
import { Error } from '../../common/Error/Error';

export const Register = () => {

  const {register, handleSubmit, formState: { errors }} = useForm<Inputs>();
  const {registeration} = useActions()
  const isAuth = useTypedSelector(getIsAuthValue)
  const error = useTypedSelector(getError)

  const onSubmit: SubmitHandler<Inputs> = data => registeration(data.email, data.password, data.userName)

  type Inputs = {
    email: string,
    password: string,
    userName: string
  };

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

            <input type="text" placeholder="userName" {...register("userName", { required: true })} />
            {errors.password && <span style={{color:"red"}}>This field is required</span>}

            <input type="password" placeholder="Password" {...register("password", { required: true })} />
            {errors.password && <span style={{color:"red"}}>This field is required</span>}

            <Button type={btnVariant.blue} name="Register" />
        </form>
        {error && <Error textError={error} />}
    </div>
  )
}
