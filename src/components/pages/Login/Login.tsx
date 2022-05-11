import { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css"
import { authAPI, musicAPI } from '../../../API/API';
import { useActions } from '../../../hooks/useActions';
import { Music } from '../Music/Music';
import { addPostThunk } from '../../../store/actionCreators/ProfileActions';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

export const Login: FC = () => {

  //const {register, handleSubmit, reset, formState: { errors }} = useForm();

  const {login} = useActions()
  const {addPostThunk} = useActions()

let submit = () => {
  login("sobaka@mail.com","123456")
}

let post = () => {
  addPostThunk("ebaniy ts")
}

  return (
    <div className={styles.wrapperAuthForm}>
      <button onClick={submit}>login</button>
      <button onClick={post}>add post</button>
        {/* <form className={styles.authForm}
              onSubmit={handleSubmit(onSubmit)}
        >
            <input type="text" placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <input type="password" placeholder="Password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

            <Button type={btnVariant.blue} name="Login" />
            {error && <p style={{color:"red"}}>{error}</p>}
        </form> */}
    </div>
);
};
