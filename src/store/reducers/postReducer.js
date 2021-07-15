import { toast } from "react-toastify";

const postReducer = (postsList = [], action) => {
    switch (action.type) {
        case "GET_POSTS":
            return action.postsList.data;
        case "GET_ALL_POSTS":
            return action.postsList.data;
        case "ADD_POST":
            toast.info("Пост добавлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.post.data, ...postsList];
        case "UPDATE_POST":
            toast.info("Пост обновлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return postsList.map((post) =>
                post._id === action.post.data._id ? action.post.data : post
            );
        case "DELETE_POST":
            toast.info("Пост удален...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return postsList.filter((post) => post._id !== action.id);
        case "LIKE_DISLIKE_POST":
            return postsList.map((post) =>
                post._id === action.post.data._id ? action.post.data : post
            );
        case "CLEAR_POSTS":
            return [];
        default:
            return postsList;
    }
};

export default postReducer;
