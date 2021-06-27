const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
        //title: {type: String}, Поиск постов по заголовку??? Подумаю
        description: {type: String, required: true},
        //images: {type: Array}, файлы с картинками прикрепленные к посту, надо будет заняться этим
        //files: {type: Array},
        profilePicture: {type: String},
        author: {type: String, required: true},
        liked: {type: Boolean},
        likes: {type: Array, default: []},
        uid: {type: String},
        date: {type: Date, default: new Date()},
    },
);

const Post = mongoose.model("Post", postSchema);

exports.Post = Post;
