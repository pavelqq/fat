import axios from "axios";
import {url, setHeaders, setProjectHeaders} from "../../api";
import { toast } from "react-toastify";

export const getPosts = (currentUserId) => {
    return (dispatch) => {
        axios
            .get(`${url}/posts/${currentUserId}`, setHeaders())
            .then((postsList) => {
                dispatch({
                    type: "GET_POSTS",
                    postsList,
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
            .post(`${url}/posts`, { ...newPost, author, profilePicture, uid }, setProjectHeaders())
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
            .put(`${url}/posts/${id}`, updatedPost, setProjectHeaders())
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

export const likeDislikePost = (postId, authUserId) => {
    return (dispatch) => {
        axios
            .put(`${url}/posts/${postId}/like`, {userId: authUserId}, setHeaders())
            .then((post) => {
                dispatch({
                    type: "LIKE_DISLIKE_POST",
                    post,
                });
            })
            .catch((error) => {
                console.log(error);
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
