import { toast } from "react-toastify";

const postReducer = (posts = [], action) => {
    switch (action.type) {
        case "GET_POSTS":
            return action.posts.data;
        case "ADD_POST":
            toast.success("Пост добавлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.post.data, ...posts];
        case "UPDATE_POST":
            toast.success("Пост обновлен...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return posts.map((post) =>
                post._id === action.post.data._id ? action.post.data : post
            );
        case "DELETE_POST":
            toast.success("Пост удален...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return posts.filter((post) => post._id !== action.id);
        case "CLEAR_POSTS":
            return [];
        default:
            return posts;
    }
};

export default postReducer;
