import axios from "axios";
import { API_URL } from "../API/API";
import { Aside } from "../components/Aside";
import { Loader } from "../components/common/Loader/Loader";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import styles from "./MainLayout.module.css"
import { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';

export const MainLayout = () => {
  
  const [preloadValue, setPreloadValue] = useState(false);

  const {setIsAuthAction} = useActions()

  const checkAuth = async () => {
    const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
    localStorage.setItem('token', response.data.accessToken);
};

useEffect(() => {
  if (localStorage.getItem("token")) {
      setPreloadValue(true);
      checkAuth().then(data => {
          setIsAuthAction(true)
          setPreloadValue(false)
      }).catch(e => {
          console.log("not authorized "+ e)}).finally(() => setPreloadValue(false))
  }
}, []);

  return (
    <div className={styles.appWrapper}>
      <Header />
      <Aside />
      {!preloadValue ? <Content /> : <Loader />}
    </div>
  );
};

