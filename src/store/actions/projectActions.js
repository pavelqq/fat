import axios from "axios";
import {setHeaders, url} from "../../api";
import {toast} from "react-toastify";

export const getProjects = (currentUserId) => {
    return (dispatch) => {
        axios
            .get(`${url}/projects/${currentUserId}`)
            .then((projects) => {
                dispatch({
                    type: "GET_PROJECTS",
                    projects,
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
            .post(`${url}/projects`, { ...newProject, author:{uid, name, profilePicture} }, setHeaders())
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