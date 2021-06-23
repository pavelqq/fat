const mongoose = require("mongoose");

require("dotenv").config();

const userSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 3, maxlength: 30},
        email: {type: String, required: true, minlength: 3, maxlength: 200, unique: true},
        password: {type: String, required: true, minlength: 3, maxlength: 1024},
        bio: {type: String, maxlength: 50, default: ""},
        profilePicture: {type: String, default: ""},
        coverPicture: {type: String, default: ""},
        followers: {type: Array, default: []},
        followings: {type: Array, default: []},
        projects: {type: Array, default: []},
        isAdmin: {type: Boolean, default: false},
        city: {type: String, max: 50, default: ""},
        from: {type: String, max: 50, default: ""},
        role: {
            type: Number, enum: [1, 2, 3], default: "" //не указано, тренер, пользователь
        },
        age: {type: Date, default: ""}
    },
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);

exports.User = User;
