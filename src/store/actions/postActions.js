import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getPosts = () => {
    return (dispatch) => {
        axios
            .get(`${url}/posts`, setHeaders())
            .then((posts) => {
                dispatch({
                    type: "GET_POSTS",
                    posts,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const addPost = (newPost) => {
    return (dispatch, getState) => {
        const profilePicture = getState().auth.profilePicture;
        const author = getState().auth.name;
        const uid = getState().auth._id;
        axios
            .post(`${url}/posts`, { ...newPost, author, profilePicture, uid }, setHeaders())
            .then((post) => {
                dispatch({
                    type: "ADD_POST",
                    post,
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

export const updatePost = (updatedPost, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/posts/${id}`, updatedPost, setHeaders())
            .then((post) => {
                dispatch({
                    type: "UPDATE_POST",
                    post,
                });
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};

export const deletePost = (id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/posts/${id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_POST",
                    id,
                });
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};

// export const checkTodo = (id) => {
//     return (dispatch) => {
//         axios
//             .patch(`${url}/todos/${id}`, {}, setHeaders())
//             .then((todo) => {
//                 dispatch({
//                     type: "CHECK_TODO",
//                     todo,
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
