import { Outlet } from 'react-router-dom';
import styles from "./Content.module.css"

export const Content = () => {  

  return (
    <div className={styles.content}>
       <Outlet/>
    </div>
  )
 
};
