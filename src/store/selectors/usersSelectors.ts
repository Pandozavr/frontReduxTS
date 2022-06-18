import { RootState } from '../store';


export const getUsersData = (state: RootState) => {
  return state.users.users
};