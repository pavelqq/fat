import axios from 'axios';

const API_URL = "http://localhost:8800/api/";

const createPost = (userId, username, title, description, profilePicture, images, files) => {
    return axios.post(API_URL + "posts", {
        userId, username, title, description, profilePicture, images, files
    });
};

const retrieveUserPosts = (username) => {
    return axios.get(API_URL + "profile" + `${username}`)
}

const likeDislikePost = (userId, postId) => {
    return axios.put(API_URL + "posts" + postId + "like", {
        userId
    })
};

const updatePost = (userId, username, title, description, profilePicture, images, files, postId) => {
    return axios.put(API_URL + "posts" + postId, {
        userId, username, title, description, profilePicture, images, files
    })
}

const deletePost = (userId, postId) => {
    return axios.delete(API_URL + "posts" + postId, {
        userId
    })
}

//не работает поиск, по findById по Айди поста только если, через обычный find не выдает результат
const findByTitle = (title) => {
    return axios.get(API_URL + "posts" + "find" + `${title}`)
}

export default {
    findByTitle,
    createPost,
    retrieveUserPosts,
    likeDislikePost,
    updatePost,
    deletePost
}