import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {profileReducer} from "./reducers/profileReducer";
import {authReducer} from "./reducers/authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer
    });


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));