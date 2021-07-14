import { toast } from "react-toastify";

const conversationReducer = (conversationsList = [], action) => {
    switch (action.type) {
        case "GET_CONVERSATIONS":
            return action.conversationsList.data;
        case "ADD_CONVERSATION":
            toast.success("Диалог создан...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.conversation.data, ...conversationsList];
        case "DELETE_CONVERSATION":
            toast.success("Диалог удален...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return conversationsList.filter((conversation) => conversation._id !== action.id);
        case "CLEAR_CONVERSATIONS":
            return [];
        default:
            return conversationsList;
    }
};

export default conversationReducer;
