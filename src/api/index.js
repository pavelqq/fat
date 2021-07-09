export const url = "https://mernfatapptest.herokuapp.com/fat/api";

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