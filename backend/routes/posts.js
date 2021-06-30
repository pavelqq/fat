const winston = require("winston");
const auth = require("../middleware/auth");
const {Post} = require("../models/post");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.get("/:currentUserId", auth, async (req, res, next) => {
    try {
        const posts = await Post.find().sort({date: -1});
        const filteredPosts = posts.filter(post => post.uid === req.params.currentUserId); //req.user._id
        res.send(filteredPosts);
    } catch (error) {
        res.status(500).send("Ошибка: " + error.message);

        winston.error(error.message);
    }
});

router.post("/", auth, async (req, res) => {
    const schema = Joi.object({
        description: Joi.string().required(),
        profilePicture: Joi.string(),
        author: Joi.string(),
        uid: Joi.string(),
        date: Joi.date(),
    });

    const {error} = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const {description, profilePicture, author, uid, date} = req.body;

    let post = new Post({description, profilePicture, author, uid, date});

    post = await post.save();
    res.send(post);
});

router.put("/:id", auth, async (req, res) => {
    const schema = Joi.object({
        description: Joi.string().required(),
        profilePicture: Joi.string(),
        author: Joi.string(),
        uid: Joi.string(),
        date: Joi.date(),
    });

    const {error} = schema.validate(req.body);

    if (error) return res.status(400).send(result.error.details[0].message);

    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).send("пост не найден...");

    if (post.uid !== req.user._id)
        return res.status(401).send("Пост не обновлен. Нет авторизации...");

    const {description, profilePicture, author, uid, date} = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {description, profilePicture, author, uid, date},
        {new: true}
    );

    res.send(updatedPost);
});

router.delete("/:id", auth, async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).send("Пост не найден...");

    if (post.uid !== req.user._id)
        return res.status(401).send("Удаление поста невозможнно. Нет авторизации...");

    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    res.send(deletedPost);
});

router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("Пост лайкнут");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("Пост дизлайкнут");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
