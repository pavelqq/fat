export const url = "https://apifat.herokuapp.com/api";
// export const url = "http://localhost:5000/api";

export const setHeaders = () => {
    const headers = {
        headers: {
            "x-auth-token": localStorage.getItem("token"),
        },
    };

    return headers;
};

//не уверен, что это так работает

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