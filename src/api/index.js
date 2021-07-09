export const url = "http://localhost:5000/api";

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