import axios from "axios";
import {url, setHeaders, setProjectHeaders} from "../../api";
import {toast} from "react-toastify";

export const getProjects = (currentUserId) => {
    return (dispatch) => {
        axios
            .get(`${url}/projects/${currentUserId}`, setProjectHeaders())
            .then((projectsList) => {
                dispatch({
                    type: "GET_PROJECTS",
                    projectsList,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const addProject = (newProject) => {
    return (dispatch, getState) => {
        const profilePicture = getState().auth.profilePicture;
        const name = getState().auth.name;
        const uid = getState().auth._id;
        axios
            .post(`${url}/projects`, { ...newProject, author:{uid, name, profilePicture} }, setProjectHeaders())
            .then((project) => {
                dispatch({
                    type: "ADD_PROJECT",
                    project,
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