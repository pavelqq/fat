

const chatListReducer = (chatList = [], action) => {
    switch (action.type) {
        case "GET_ALL_USERS":
            return action.allUsers.data;
        case "CLEAR_CHATLIST":
            return [];
        default:
            return chatList;
    }
}

export default chatListReducer;