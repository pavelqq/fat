import {toast} from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    _id: null,
    name: null,
    email: null,
    bio: null,
    profilePicture: null,
    coverPicture: null,
    followers: null,
    followings: null,
    projects: null,
    isAdmin: null,
    city: null,
    from: null,
    role: null,
    age: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_IN":
        case "SIGN_UP":
        case "USER_LOADED":
            toast("Добро пожаловать...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            let user;
            user = jwtDecode(action.token);
            return {
                ...initialState,
                token: action.token,
                _id: user._id,
                name: user.name,
                email: user.email,
                bio: user.bio,
                profilePicture: user.profilePicture,
                coverPicture: user.coverPicture,
                followers: user.followers,
                followings: user.followings,
                projects: user.projects,
                isAdmin: user.isAdmin,
                city: user.city,
                from: user.from,
                role: user.role,
                age: user.age
            };
        case "SIGN_OUT":
            localStorage.removeItem("token");
            toast("До свидания...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return {
                token: null,
                _id: null,
                name: null,
                email: null,
                bio: null,
                profilePicture: null,
                coverPicture: null,
                followers: null,
                followings: null,
                projects: null,
                isAdmin: null,
                city: null,
                from: null,
                role: null,
                age: null
            };
        case "UPDATE_USER":
            user = action.user;
            return {
                ...initialState,
                _id: user._id,
                name: user.name,
                email: user.email,
                bio: user.bio,
                profilePicture: user.profilePicture,
                coverPicture: user.coverPicture,
                isAdmin: user.isAdmin,
                city: user.city,
                from: user.from,
                role: user.role,
                age: user.age
            }
        default:
            return state;
    }
};

export default authReducer;
