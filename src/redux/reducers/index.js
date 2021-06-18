import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import profilePosts from "./profilePosts";

export default combineReducers({
    profilePosts,
    auth,
    message,
});
