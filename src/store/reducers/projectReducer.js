import { toast } from "react-toastify";

const projectReducer = (projectsList = [], action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return action.projectsList.data;
        case "GET_ALL_PROJECTS":
            return action.projectsList.data;
        case "ADD_PROJECT":
            toast.success("Проект добавлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.project.data, ...projectsList];
        case "UPDATE_PROJECT":
            toast.success("Проект обновлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return projectsList.map((project) =>
                project._id === action.updatedProject.data._id ? action.updatedProject.data : project
            );
        case "DELETE_PROJECT":
            toast.success("Проект удален...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return projectsList.filter((project) => project._id !== action.id);
        case "MEMBERING_PROJECT":
            return projectsList.map((project) =>
                project._id === action.projectsList.data._id ? action.projectsList.data : project
            );
        case "CLEAR_PROJECTS":
            return [];
        default:
            return projectsList;
    }
};

export default projectReducer;
