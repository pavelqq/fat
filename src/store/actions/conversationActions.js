import axios from "axios";
import {url, setHeaders} from "../../api";
import {toast} from "react-toastify";

export const getUsersConversations = (currentUserId) => {
    return (dispatch) => {
        axios
            .get(`${url}/conversations/${currentUserId}`, setHeaders())
            .then((conversationsList) => {
                dispatch({
                    type: "CLEAR_CONVERSATIONS"
                })
                dispatch({
                    type: "GET_CONVERSATIONS",
                    conversationsList,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const addConversation = (newConversation) => {
    return (dispatch) => {
        axios
            .post(`${url}/conversations`, { ...newConversation }, setHeaders())
            .then((conversation) => {
                // dispatch({
                //     type: "CLEAR_CONVERSATIONS",
                // });
                dispatch({
                    type: "ADD_CONVERSATION",
                    conversation,
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

export const deleteConversation = (conversationId) => {
    return (dispatch) => {
        axios
            .delete(`${url}/conversations/${conversationId}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_PROJECT",
                    conversationId,
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