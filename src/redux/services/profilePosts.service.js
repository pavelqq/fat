import axios from 'axios';

const API_URL = "http://localhost:8800/api/";

const createPost = (userId, username, title, description, profilePicture, images, files) => {
    return axios.post(API_URL + "posts", {
        userId, username, title, description, profilePicture, images, files
    });
};

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

export default {
    createPost,
    likeDislikePost,
    updatePost,
    deletePost
}