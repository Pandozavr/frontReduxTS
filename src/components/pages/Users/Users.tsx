import { Outlet } from 'react-router-dom';
import { TwoTabRoute } from '../../common/TwoTabRoute/TwoTabRoute';
import { useActions } from '../../../hooks/useActions';
import { useEffect } from 'react';

export const Users = () => {

  const {getUserInfoThunk} = useActions()
  useEffect(()=>{getUserInfoThunk(16)}, [])

  return (
    <div>
      <TwoTabRoute name_2='My Friends' name_1='All Users' pathTo_2='my-friends' pathTo_1='all-users' />
      <Outlet />
    </div>
  );
};
