import axios from "axios";
import {setHeaders, url} from "../../api";
import {toast} from "react-toastify";

export const getProfileById = (id) => {
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

export function unfollowUser(authedUser, currentUser) {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({type: "UNFOLLOW_USER", payload: success});
            return success;
        }

        function onError(error) {
            console.log(error.response);

            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }

        try {
            const success = await axios.put(`${url}/users/${currentUser}/unfollow`,
                {userId: authedUser}, setHeaders());
            return onSuccess(success);
        } catch (error) {
            return onError(error);
        }
    }
};

export function followUser(authedUser, currentUser) {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({type: "FOLLOW_USER", payload: success});
            return success;
        }

        function onError(error) {
            console.log(error.response);

            toast.error(error.response?.data, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }

        try {
            const success = await axios.put(`${url}/users/${currentUser}/follow`,
                {userId: authedUser}, setHeaders());
            return onSuccess(success);
        } catch (error) {
            return onError(error);
        }
    }
};