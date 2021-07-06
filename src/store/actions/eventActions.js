import axios from "axios";
import {setHeaders, setProjectHeaders, url} from "../../api";
import {toast} from "react-toastify";

export const getProjectTrainingsEvents = (currentProjectId) => {
    return (dispatch) => {
        axios
            .get(`${url}/events/${currentProjectId}/trainingsEvents`, setProjectHeaders())
            .then((trainingsEventsList) => {
                dispatch({
                    type: "CLEAR_EVENTS"
                })
                dispatch({
                    type: "GET_TRAININGS_EVENTS",
                    trainingsEventsList,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const getProjectDietEvents = (currentProjectId) => {
    return (dispatch) => {
        axios
            .get(`${url}/events/${currentProjectId}/dietEvents`, setProjectHeaders())
            .then((dietEventsList) => {
                dispatch({
                    type: "CLEAR_EVENTS"
                })
                dispatch({
                    type: "GET_DIET_EVENTS",
                    dietEventsList,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const addEvent = (newEvent) => {
    return (dispatch, getState) => {
        const authorId = getState().auth._id;
        axios
            .post(`${url}/events/createEvent`, { ...newEvent, authorId }, setProjectHeaders())
            .then((event) => {
                dispatch({
                    type: "ADD_EVENT",
                    event,
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

export const updateEvent = (updatedEvent, id, type) => {
    return (dispatch) => {
        axios
            .put(`${url}/events/${id}/${type}`, updatedEvent, setProjectHeaders())
            .then((updatedEvent) => {
                dispatch({
                    type: "UPDATE_EVENT",
                    updatedEvent,
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

export const deleteEvent = (id, type) => {
    return (dispatch) => {
        axios
            .delete(`${url}/events/${id}/${type}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_EVENT",
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