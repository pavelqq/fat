

const friendsReducer = (friendsList = [], action) => {
    switch (action.type) {
        case "GET_FRIENDS":
            return action.friendsList.data;
        default:
            return friendsList;
    }
}

export default friendsReducer;