import axios from "axios";
import {setHeaders, url} from "../../api";
import {toast} from "react-toastify";

export const getProfileById = (id) => {
    // dispatch({type: 'CLEAR_USER_BY_ID'});
    return (dispatch) => {
        axios
            .get(`${url}/users/${id}`, setHeaders())
            .then((userById) => {

                dispatch({
                    type: "GET_USER_BY_ID",
                    userById
                });
            })
            .catch((error) => {
                console.log(error.response);

                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};

// export const getProfileById = id => async dispatch => {
//     // dispatch({type: 'CLEAR_USER'});
//     axios
//         .get(`${url}/users/${id}`, setHeaders())
//         .then((userById) => {
//
//             dispatch({
//                 type: 'GET_USER',
//                 userById: userById.data
//             });
//         })
//         .catch((error) => {
//             console.log(error.response);
//
//             toast.error(error.response?.data, {
//                 position: toast.POSITION.BOTTOM_RIGHT,
//             });
//         });
// }

// export const getUser = ({id}) => {
//     return (dispatch) => {
//         axios
//             .get(`${url}/users/${id}`, setHeaders())
//             .then((user) => {
//                 dispatch({
//                     type: "GET_USER",
//                     user,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 toast.error(error.response?.data, {
//                     position: toast.POSITION.BOTTOM_RIGHT,
//                 });
//             });
//     };
// };

// export const signUp = (user) => {
//     return (dispatch) => {
//         axios
//             .post(`${url}/signup`, user)
//             .then((token) => {
//                 localStorage.setItem("token", token.data);
//
//                 dispatch({
//                     type: "SIGN_UP",
//                     token: token.data,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error.response);
//
//                 toast.error(error.response?.data, {
//                     position: toast.POSITION.BOTTOM_RIGHT,
//                 });
//             });
//     };
// };