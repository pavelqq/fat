import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import usersListReducer from "./usersListReducer";
import projectReducer from "./projectReducer";
import currentProjectReducer from "./currentProjectReducer";
import chatListReducer from "./chatLIstReducer";
import eventReducer from "./eventReducer";

const rootReducer = combineReducers({ 
    todos: todoReducer,
    auth: authReducer,
    userById: userReducer,
    projectById: currentProjectReducer,
    postsList: postReducer,
    projectsList: projectReducer,
    usersList: usersListReducer,
    chatList: chatListReducer,
    eventsList: eventReducer,
})

export default rootReducer;