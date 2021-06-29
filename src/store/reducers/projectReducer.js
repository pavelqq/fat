import { toast } from "react-toastify";

const projectReducer = (projectsList = [], action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return action.projectsList.data;
        case "ADD_PROJECT":
            toast.success("Проект добавлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.projectsList.data, ...projectsList];
        default:
            return projectsList;
    }
};

export default projectReducer;
