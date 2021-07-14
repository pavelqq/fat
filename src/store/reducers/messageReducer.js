import { toast } from "react-toastify";

const messageReducer = (messagesList = [], action) => {
    switch (action.type) {
        case "GET_MESSAGES":
            return action.messagesList.data;
        case "ADD_MESSAGE":
            return [action.message.data, ...messagesList];
        case "UPDATE_MESSAGE":
            toast.success("Сообщение обновлено...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return messagesList.map((message) =>
                message._id === action.updatedMessage.data._id
                    ? action.updatedMessage.data
                    : message
            );
        case "DELETE_MESSAGE":
            toast.success("Сообщение удалено...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return messagesList.filter((message) => message._id !== action.id);
        case "CLEAR_MESSAGES":
            return [];
        default:
            return messagesList;
    }
};

export default messageReducer;
