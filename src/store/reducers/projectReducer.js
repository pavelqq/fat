import { toast } from "react-toastify";

const projectReducer = (projects = [], action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return action.projects.data;
        case "ADD_PROJECT":
            toast.success("Проект добавлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.projects.data, ...projects];
        case "CLEAR_PROJECTS":
            return [];
        default:
            return projects;
    }
};

export default projectReducer;
