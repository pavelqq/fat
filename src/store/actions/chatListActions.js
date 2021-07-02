import axios from "axios";
import {url} from "../../api";


export const getAllUsers = () => {
    return (dispatch) => {
        axios
            .get(`${url}/users/allUsers/all`)
            .then((allUsers) => {
                dispatch({
                    type: "CLEAR_CHATLIST"
                })
                dispatch({
                    type: "GET_ALL_USERS",
                    allUsers
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
