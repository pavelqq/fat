import {toast} from "react-toastify";

const eventReducer = (eventsList = [], action) => {
    switch (action.type) {
        case "GET_TRAININGS_EVENTS":
            return action.trainingsEventsList.data;
        case "GET_DIET_EVENTS":
            return action.dietEventsList.data;
        case "ADD_EVENT":
            toast.success("Задача добавлена...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.event.data, ...eventsList];
        case "UPDATE_EVENT":
            toast.warning("Задача обновлена...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return eventsList.map((event) =>
                event._id === action.updatedEvent.data._id ? action.updatedEvent.data : event
            );
        case "DELETE_EVENT":
            toast.success("Задача удалена...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return eventsList.filter((event) => event._id !== action.id);
        case "CLEAR_EVENTS":
            return [];
        default:
            return eventsList;
    }
};

export default eventReducer;
