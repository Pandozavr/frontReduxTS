import { UsersActionsEnum, UsersState } from "../../types/UsersTypes";

const initialState: UsersState = {
  users: [],
  error: null,
  userInfo: null
}

export const usersReducer = (state = initialState, action: any): UsersState => {
  switch (action.type) {
    case UsersActionsEnum.SET_USERS: {
      return {...state, users: action.payload}
    }
    case UsersActionsEnum.SET_ERROR: {
      return {...state, error: action.payload}
    }
    case UsersActionsEnum.SET_USER_INFO: {
      return {...state, userInfo: action.payload}
    }
    default:
      return state;
  }
}