export const url = "https://apifat.herokuapp.com/api";

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    };

    return headers;
};

export const setProjectHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    };

    return headers;
}