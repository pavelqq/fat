import Axios from "axios";


const instanceAxios = Axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:8800/api/',
    headers: {

    }
})

export const usersAPI = {
    // getUsers(pageSize, currentPage) {
    //     return instanceAxios.get(`users?count=${pageSize}&page=${currentPage}`)
    //         .then(response => response.data)
    // },

    follow(userId){
        return instanceAxios.post(`users/${userId}/follow`)
            .then(response => response.data)
    },

    unfollow(userId){
        return instanceAxios.delete(`users/${userId}/unfollow`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instanceAxios.get(`users/${userId}`)
            .then(response => response.data)
    },
    // getStatus(userId){
    //     return instanceAxios.get(`profile/status/${userId}`)
    //         .then(response => response.data)
    // },
    // updateStatus(status){
    //     return instanceAxios.put(`profile/status`, {status: status})
    //         .then(response => response.data)
    // }
}

export const postsAPI = {
    getPost(userId){
        return instanceAxios.get(`posts/${userId}`)
            .then(response => response.data)
    },
}

export const authAPI = {
    // getAuthData(){
    //     return instanceAxios.get(`auth/me`)
    //         .then(response => response.data)
    // },
    login(email, password){
        return instanceAxios.post(`auth/login`, {email, password})
            .then(response => response.data)
    },
    logout(){
        return instanceAxios.delete(`auth/login`)
            .then(response => response.data)
    },

}