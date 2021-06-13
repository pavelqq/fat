import axios from "axios";

let initialState = {
    _id: null,
    username: null,
    email: null,
    isAuth: false,
    profilePicture: '',
    bio: '',
    coverPicture: '',
    followers: [],
    followings: [],
    isAdmin: false,
    createdAt: '',
    updatedAt: ''
};

// export const setAuthUserData = (_id, username, email, isAuth) => ({
//     type: SET_USER_DATA, payload:
//         {_id, username, email, isAuth}
// });

const API_URL = "http://localhost:8800/api/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
                // dispatch(setAuthUserData(null, null, null,))
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};
