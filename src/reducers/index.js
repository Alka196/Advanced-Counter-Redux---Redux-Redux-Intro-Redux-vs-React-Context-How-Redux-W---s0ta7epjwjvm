import counterReducer from "./Counter";
import loggedReducer from './islogged';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    islogged: loggedReducer,
})

export default allReducers;