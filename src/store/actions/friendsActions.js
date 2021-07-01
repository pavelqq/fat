import axios from "axios";
import {url} from "../../api";
import {toast} from "react-toastify";

export const getFriends = (id) => {
    return (dispatch) => {
        axios
            .get(`${url}/users/friends/${id}`)
            .then((friendsList) => {

                dispatch({
                    type: "GET_FRIENDS",
                    friendsList
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const getMembers = (projectId) => {
    return (dispatch) => {
        axios
            .get(`${url}/projects/members/list/${projectId}`)
            .then((membersList) => {

                dispatch({
                    type: "GET_MEMBERS",
                    membersList
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

