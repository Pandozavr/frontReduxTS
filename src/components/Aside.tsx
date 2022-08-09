import { NavLink } from 'react-router-dom';
import styles from './Aside.module.css';

interface isActive {
  isActive: boolean
}

export const Aside = () => {
  const setActive = ({isActive}:isActive) => isActive ? styles.active : ''
  return (
    <>
      <div className={styles.aside}>
       <div >
          <NavLink className={setActive} to='/profile'>My Profile</NavLink>
        </div>
        <div>
          <NavLink className={setActive} to='/users'>Users</NavLink>
        </div>
        <div>
          <NavLink className={setActive} to='/chat'>Chat</NavLink>
        </div>
        <div>
          <NavLink className={setActive} to='/music'>Music</NavLink>
        </div>
      </div>
    </>
  )
};
