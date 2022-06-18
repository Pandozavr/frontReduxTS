import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { profileReducer } from './reducers/profileReducer';
import { usersReducer } from "./reducers/usersReducer";



const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    users: usersReducer
    });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch