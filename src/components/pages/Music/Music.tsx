import { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import styles from "./Music.module.css";
import { Outlet, NavLink } from "react-router-dom";

export const Music = () => {
  const { getMusichunk } = useActions();

  useEffect(() => {
    getMusichunk();
  }, []);

  return (
    <div>
      <div className={styles.btnMenuTracks}>
        <div>
          <NavLink to="all-tracks">All Tracks</NavLink>
        </div>
        <div>
          <NavLink to="add-tracks">Add Track</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
