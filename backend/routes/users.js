const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/user");


//обновить пользовательскую информацию
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (e) {
                return res.status(500).json(e);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Информация обновлена");
        } catch (e) {
            return res.status(500).json(e);
        }
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

module.exports = router
