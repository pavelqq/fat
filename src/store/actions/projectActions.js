import axios from "axios";
import {url, setProjectHeaders, setHeaders} from "../../api";
import {toast} from "react-toastify";

export const getUsersProjects = (currentUserId) => {
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

export const getAllProjects = () => {
    return (dispatch) => {
        axios
            .get(`${url}/projects/allProjects/all`)
            .then((projectsList) => {
                dispatch({
                    type: "GET_ALL_PROJECTS",
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

export const updateProject = (updatedProject, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/projects/${id}`, updatedProject, setProjectHeaders())
            .then((updatedProject) => {
                dispatch({
                    type: "UPDATE_PROJECT",
                    updatedProject,
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

export const memberingProject = (projectId, authUserId) => {
    return (dispatch) => {
        axios
            .put(`${url}/projects/${projectId}/membering`, {userId: authUserId}, setHeaders())
            .then((project) => {
                dispatch({
                    type: "MEMBERING_PROJECT",
                    project,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const deleteProject = (id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/projects/${id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_PROJECT",
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

export const getProjectById = (projectId) => {
    return (dispatch) => {
        axios
            .get(`${url}/projects/current/${projectId}`, setProjectHeaders())
            .then((projectById) => {
                dispatch({
                    type: "GET_PROJECT_BY_ID",
                    projectById,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};