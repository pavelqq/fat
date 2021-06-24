import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({ 
    todos: todoReducer,
    auth: authReducer,
    userById: userReducer,
    posts: postReducer,
})

export default rootReducer;