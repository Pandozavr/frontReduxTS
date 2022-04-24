import { Navigate, Outlet } from 'react-router-dom';

export const AuthRequire = ({isAuth}:any) => {

  return isAuth ? <Outlet /> : <Navigate to="login" />
}
