import { combineReducers } from "redux";
import auth from "./auth";
import authReducer from "./authReducer";
import message from "./message";
import profilePosts from "./profilePosts";

export default combineReducers({
    //profilePosts,
    //authReducer,
    auth,
    message,
});
