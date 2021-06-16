import axios from "axios";
import store from "../store";

// let initialState = {
//     _id: null,
//     username: null,
//     email: null,
//     isAuth: false,
//     profilePicture: '',
//     bio: '',
//     coverPicture: '',
//     followers: [],
//     followings: [],
//     isAdmin: false,
//     createdAt: '',
//     updatedAt: ''
// };

// export const setAuthUserData = ({response.data}) => ({
//     type: SET_USER_DATA,
//     user: response.data
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
                store.subscribe(() => {
                    localStorage.setItem("user", JSON.stringify(response.data));
                })
            }
            return response.data
        });
};

const logout = () => {
    store.subscribe(() => {
        localStorage.removeItem("user");
    })
};

export default {
    register,
    login,
    logout,
};
