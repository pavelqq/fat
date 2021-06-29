import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import friendsReducer from "./friendsReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({ 
    todos: todoReducer,
    auth: authReducer,
    userById: userReducer,
    postsList: postReducer,
    projectsList: projectReducer,
    friendsList: friendsReducer,
})

export default rootReducer;