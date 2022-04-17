import React from 'react';
import './components/common/Input/Input.css';
import { Aside } from './components/Aside';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Loader } from './components/common/Loader/Loader';
// @ts-ignore
import styles from './App.module.css';



const App = () => {

    const preloadValue = false;

  return (
      <div className={styles.appWrapper}>
          <Header/>
          <Aside/>
         {/*!preloadValue ? <Content/> : <Loader/>*/}
      </div>
  );
};

export default App;
