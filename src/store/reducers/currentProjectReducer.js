
const projectReducer = (projectById = [], action) => {
    switch (action.type) {
        case "GET_PROJECT_BY_ID":
            return action.projectById.data;
        case "CLEAR_PROJECT":
            return [];
        default:
            return projectById;
    }
};

export default projectReducer;
