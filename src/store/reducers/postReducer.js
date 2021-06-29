import { toast } from "react-toastify";

const postReducer = (postsList = [], action) => {
    switch (action.type) {
        case "GET_POSTS":
            return action.postsList.data;
        case "ADD_POST":
            toast.success("Пост добавлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.postsList.data, ...postsList];
        case "UPDATE_POST":
            toast.success("Пост обновлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return postsList.map((post) =>
                post._id === action.postsList.data._id ? action.postsList.data : post
            );
        case "DELETE_POST":
            toast.success("Пост удален...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return postsList.filter((post) => post._id !== action.id);
        case "CLEAR_POSTS":
            return [];
        default:
            return postsList;
    }
};

export default postReducer;
