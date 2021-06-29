const winston = require("winston");
const auth = require("../middleware/auth");
const {Project} = require("../models/project");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

//получить проекты пользователя
router.get("/:currentUserId", auth, async (req, res, next) => {
    try {
        const projects = await Project.find().sort({date: -1});
        const filteredProjects = projects.filter(project => project.author.uid === req.params.currentUserId);
        res.send(filteredProjects);
    } catch (error) {
        res.status(500).send("Ошибка: " + error.message);

        winston.error(error.message);
    }
});

//Создать проект
router.post("/", auth, async (req, res) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        tags: {
            text: Joi.array(),
        },
        author: {
            uid: Joi.string().required(),
            name: Joi.string().required(),
            profilePicture: Joi.string(),
        },
        //membership: Joi.boolean(),
        difficult: Joi.number().min(1).max(10),
        //duration: Joi.number(),
        startDate: Joi.date(),
        endDate: Joi.date(),
        date: Joi.date(),
        // diet: [
        //     {
        //         date: Joi.date().required(),
        //         title: Joi.string().required(),
        //         description: Joi.string().required(),
        //     }
        // ],
        // trainings: [
        //     {
        //         date: Joi.date().required(),
        //         title: Joi.string().required(),
        //         description: Joi.string().required(),
        //     }
        // ]
    });

    const {error} = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const {title, description, tags, author: {uid, name, profilePicture},
        difficult, startDate, endDate, date} = req.body;

    let project = new Project({title, description, tags, author: {uid, name, profilePicture},
        difficult, startDate, endDate, date});

    project = await project.save();
    res.send(project);
});

// router.post("/", auth, async (req, res) => {
//     const schema = Joi.object({
//         description: Joi.string().required(),
//         profilePicture: Joi.string(),
//         author: Joi.string(),
//         uid: Joi.string(),
//         date: Joi.date(),
//     });
//
//     const { error } = schema.validate(req.body);
//
//     if (error) return res.status(400).send(error.details[0].message);
//
//     const { description, profilePicture, author, uid, date } = req.body;
//
//     let post = new Post({ description, profilePicture, author, uid, date });
//
//     post = await post.save();
//     res.send(post);
// });
//
// router.put("/:id", auth, async (req, res) => {
//     const schema = Joi.object({
//         description: Joi.string().required(),
//         profilePicture: Joi.string(),
//         author: Joi.string(),
//         uid: Joi.string(),
//         date: Joi.date(),
//     });
//
//     const { error } = schema.validate(req.body);
//
//     if (error) return res.status(400).send(result.error.details[0].message);
//
//     const post = await Post.findById(req.params.id);
//
//     if (!post) return res.status(404).send("пост не найден...");
//
//     if (post.uid !== req.user._id)
//         return res.status(401).send("Пост не обновлен. Нет авторизации...");
//
//     const { description, profilePicture, author, uid, date } = req.body;
//
//     const updatedPost = await Post.findByIdAndUpdate(
//         req.params.id,
//         { description, profilePicture, author, uid, date },
//         { new: true }
//     );
//
//     res.send(updatedPost);
// });
//
// router.delete("/:id", auth, async (req, res) => {
//     const post = await Post.findById(req.params.id);
//
//     if (!post) return res.status(404).send("Пост не найден...");
//
//     if (post.uid !== req.user._id)
//         return res.status(401).send("Удаление поста невозможнно. Нет авторизации...");
//
//     const deletedPost = await Post.findByIdAndDelete(req.params.id);
//
//     res.send(deletedPost);
// });

module.exports = router;