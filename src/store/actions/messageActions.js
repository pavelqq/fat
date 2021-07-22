import axios from "axios";
import {url, setHeaders} from "../../api";
import {toast} from "react-toastify";

export const getConversationMessages = (conversationId) => {
    return (dispatch) => {
        axios
            .get(`${url}/messages/${conversationId}`, setHeaders())
            .then((messagesList) => {
                dispatch({
                    type: "CLEAR_MESSAGES"
                })
                dispatch({
                    type: "GET_MESSAGES",
                    messagesList,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const addMessage = (newMessage) => {
    return (dispatch, getState) => {
        const uid = getState().auth._id;
        const name = getState().auth.name;
        const profilePicture = getState().auth.profilePicture;
        axios
            .post(`${url}/messages`, {...newMessage, sender:{uid,name,profilePicture}}, setHeaders())
            .then((message) => {
                dispatch({
                    type: "ADD_MESSAGE",
                    message,
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

export const deleteMessage = (_id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/messages/${_id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_MESSAGE",
                    _id,
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

// export const getProjectById = (projectId) => {
//     return (dispatch) => {
//         axios
//             .get(`${url}/projects/current/${projectId}`, setProjectHeaders())
//             .then((projectById) => {
//                 dispatch({
//                     type: "GET_PROJECT_BY_ID",
//                     projectById,
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };
// };