import { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { Outlet } from "react-router-dom";
import { TwoTabRoute } from "../../common/TwoTabRoute/TwoTabRoute";

export const Music = () => {
  const { getMusichunk } = useActions();

  useEffect(() => {
    getMusichunk();
  }, []);

  return (
    <div>
      <TwoTabRoute name_1="All Tracks" name_2="Add Track" pathTo_1="all-tracks" pathTo_2="add-tracks" />
      <Outlet />
    </div>
  );
};
