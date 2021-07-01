

const usersListReducer = (usersList = [], action) => {
    switch (action.type) {
        case "GET_FRIENDS":
            return action.friendsList.data;
        case "GET_MEMBERS":
            return action.membersList.data;
        default:
            return usersList;
    }
}

export default usersListReducer;