import { userItem, UsersActionsEnum, SetUsersType, SetErrorType, UsersAction } from '../../types/UsersTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { userAPI } from '../../API/API';


export const setUsers = (payload: Array<userItem>): SetUsersType => {
  return {
      type: UsersActionsEnum.SET_USERS,
      payload
  }
};

export const setErrorUsers = (payload: string): SetErrorType => {
  return {
      type: UsersActionsEnum.SET_ERROR,
      payload
  }
};

////////THUNK

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UsersAction>

export const getUsersThunk = (): ThunkType => async (dispatch) => {
  try{
      let res = await userAPI.getUsers();
      dispatch(setUsers(res.allUsers));
  } catch(e: any) {
      dispatch(setErrorUsers(e.message))
  }
};

export const followThunk = (id: number): ThunkType => async (dispatch) => {
  try {
    await userAPI.follow(id)
    dispatch(getUsersThunk())
  } catch (e: any) {
    dispatch(setErrorUsers(e.message))
  }
}

export const unFollowThunk = (id: number): ThunkType => async (dispatch) => {
  try {
    await userAPI.unfollow(id)
    dispatch(getUsersThunk())
  } catch (e: any) {
    dispatch(setErrorUsers(e.message))
  }
}