const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");


//обновить пользовательскую информацию
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password !== "") {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (e) {
                return res.status(500).json(e);
            }
        }
        const schema = Joi.object({
            userId: Joi.string(),
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().min(3).max(200).required().email(),
            password: Joi.string().min(6).max(200).required(),
            bio: Joi.string().max(60),
            profilePicture: Joi.string(),
            coverPicture: Joi.string(),
            isAdmin: Joi.boolean(),
            city: Joi.string().min(3).max(30),
            from: Joi.string().min(3).max(30),
            role: Joi.number(),
            age: Joi.date().raw(),
        });

        const { error } = schema.validate(req.body);

        if (error) return res.status(400).send(error.details[0].message);

        const { name, email, password, bio, profilePicture, coverPicture, city, from, role, age } = req.body;

        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });

        res.status(200).json("Информация обновлена");
    } else {
        return res.status(403).json("Вы можете обновить информацию только на своем аккаунте!");
    }
});

//удалить пользователя
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Аккаунт был удалён");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Вы можете удалить только свой аккаунт");
    }
});

//получить пользователя
router.get("/:id", async (req, res) => {
    try {
        const userById = await User.findById(req.params.id);
        res.status(200).json(userById);
    } catch (err) {
        res.status(500).json(err);
    }
});

//получить всех пользователей
router.get("/allUsers/all", async (req, res) => {
    try {
        const allUsers = await User.find().sort({date: -1});
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

//подписаться на пользователя
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("Вы подписались на пользователя");
            } else {
                res.status(403).json("Вы уже подписаны на пользователя");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Вы не можете подписаться на самого себя");
    }
});

//отписаться от пользователя
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("Вы отписались от пользователя");
            } else {
                res.status(403).json("Вы уже отписались от этого пользователя");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Вы не можете отписаться от самого себя");
    }
});

//получить друзей
router.get("/friends/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const friends = await Promise.all(
            user.followings.map((friendId) => {
                return User.findById(friendId);
            })
        );
        let friendsList = [];
        friends.map((friend) => {
            const { _id, name, profilePicture, followers} = friend;
            friendsList.push({ _id, name, profilePicture, followers });
        });
        res.status(200).json(friendsList)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router
