import axios from "axios";
import { API_URL } from "../API/API";
import { Aside } from "../components/Aside";
import { Loader } from "../components/common/Loader/Loader";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getPreloadValue, getIsAuthValue } from '../store/selectors/authSelectors';

export const MainLayout = () => {
  
  const {setIsLoadingAuth} = useActions()
  const {setIsAuthAction} = useActions()
  const isLoading = useTypedSelector(getPreloadValue)
  const isAuth = useTypedSelector(getIsAuthValue)

  const checkAuth = async () => {
    const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
    localStorage.setItem('token', response.data.accessToken);
};

useEffect(() => {
  if (localStorage.getItem("token")) {
    setIsLoadingAuth(true);    
      checkAuth().then(data => {
          setIsAuthAction(true)
          setIsLoadingAuth(false)
      }).catch(e => {
          console.log("not authorized " + e)}).finally(() => setIsLoadingAuth(false))
  }
}, []);

  return (
    <div >
      <Header />
      {isAuth && <Aside />}
      {!isLoading ? <Content /> : <Loader />}
    </div>
  );
};

