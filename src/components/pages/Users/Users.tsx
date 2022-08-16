import { Outlet } from 'react-router-dom';
import { TwoTabRoute } from '../../common/TwoTabRoute/TwoTabRoute';
import { useActions } from '../../../hooks/useActions';
import { useEffect } from 'react';

export const Users = () => {

  const { getUsersThunk } = useActions();
  const { getProfileThunk } = useActions();
  useEffect(() => {
    getProfileThunk();
    getUsersThunk();
  }, []);

  return (
    <div>
      <TwoTabRoute name_1='All Users' name_2='My Friends' pathTo_1='all-users' pathTo_2='my-friends' />
      <Outlet />
    </div>
  );
};
