const winston = require("winston");
const auth = require("../middleware/auth");
const Joi = require("joi");
const express = require("express");
const router = express.Router();
const {Trainings} = require("../models/trainings");
const {Diet} = require("../models/diet");

const moment = require('moment')

//получить тренировочные задания проекта
router.get("/:currentProjectId/trainingsEvents", auth, async (req, res, next) => {
    try {
        const trainingsEvents = await Trainings.find();
        const filteredTrainingsEvents = trainingsEvents.filter(
            tEvent => tEvent.projectId === req.params.currentProjectId
        );
        res.send(filteredTrainingsEvents);
    } catch (error) {
        res.status(500).send("Ошибка: " + error.message);

        winston.error(error.message);
    }
});

//получить задания по диете проекта
router.get("/:currentProjectId/dietEvents", auth, async (req, res, next) => {
    try {
        const dietEvents = await Diet.find();
        const filteredDietEvents = dietEvents.filter(
            dEvent => dEvent.projectId === req.params.currentProjectId
        );
        res.send(filteredDietEvents);
    } catch (error) {
        res.status(500).send("Ошибка: " + error.message);

        winston.error(error.message);
    }
});

//получить все задания на сегодня
router.get("/date/:date/projectId/:projectId", async (req, res, next) => {
    try {
        const trainingsEvents = await Trainings.find();
        const dietEvents = await Diet.find();

        const today = moment().startOf('day').format('YYYY-MM-DDThh:mm:ss')

        const filteredTrainingsEvents = trainingsEvents.filter(
            (tEvent) => (tEvent.start === today.toDate())
        );
        const filteredDietEvents = dietEvents.filter(
            (dEvent) => (dEvent.start === today.toDate())
        );

        let todayEvents = [...filteredTrainingsEvents, ...filteredDietEvents]

        res.send(todayEvents);
    } catch (error) {
        res.status(500).send("Ошибка: " + error.message);

        winston.error(error.message);
    }
});

// создать новое тренировочное задание
router.post("/createEvent", auth, async (req, res) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        type: Joi.string().required(),
        projectId: Joi.string().required(),
        authorId: Joi.string().required(),
        title: Joi.string().required(),
        desc: Joi.string().required(),
        allDay: Joi.boolean().required(),
        color: Joi.string().required(),
        start: Joi.date().required(),
        end: Joi.date().required(),
    });

    const {error} = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const {id, type, projectId, authorId, title, desc, allDay, color, start, end} = req.body;
    try {
        if (type === 'trainings') {
            let trainings = new Trainings({
                id, type, projectId, authorId, title, desc, allDay, color, start, end
            });
            trainings = await trainings.save();
            res.send(trainings);
        }
        if (type === 'diet') {
            let diet = new Diet({
                id, type, projectId, authorId, title, desc, allDay, color, start, end
            });

            diet = await diet.save();
            res.send(diet);
        }
    } catch (err) {
        res.status(500).send("Ошибка: " + err.message);
        winston.error(err.message);
    }
});

//изменить задание
router.put("/:id/:type", auth, async (req, res) => {
    const schema = Joi.object({
        __v: Joi.number().required(),
        _id: Joi.string().required(),
        id: Joi.string().required(),
        type: Joi.string().required(),
        projectId: Joi.string().required(),
        authorId: Joi.string().required(),
        title: Joi.string().required(),
        desc: Joi.string().required(),
        allDay: Joi.boolean().required(),
        color: Joi.string().required(),
        start: Joi.date().required(),
        end: Joi.date().required(),
    });

    const {error} = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    try {
        if (req.params.type === 'trainings') {
            const event = await Trainings.findById(req.params.id);
            if (!event) return res.status(404).send("Trainings. Задание не найдено...");
            if (event.authorId !== req.user._id)
                return res.status(401).send("Trainings. Задание не обновлено. Нет авторизации...");

            const {id, type, projectId, authorId, title, desc, allDay, color, start, end} = req.body;

            const updatedTrainingsEvent = await Trainings.findByIdAndUpdate(
                req.params.id,
                {id, type, projectId, authorId, title, desc, allDay, color, start, end},
                {new: true}
            );
            res.send(updatedTrainingsEvent);
        }
        if (req.params.type === 'diet') {
            const event = await Diet.findById(req.params.id);
            if (!event) return res.status(404).send("Diet. Задание не найдено...");
            if (event.authorId !== req.user._id)
                return res.status(401).send("Diet. Задание не обновлено. Нет авторизации...");

            const {id, type, projectId, authorId, title, desc, allDay, color, start, end} = req.body;

            const updatedDietEvent = await Diet.findByIdAndUpdate(
                req.params.id,
                {id, type, projectId, authorId, title, desc, allDay, color, start, end},
                {new: true}
            );
            res.send(updatedDietEvent);
        }
    } catch (err) {
        res.status(500).send("Ошибка: " + err.message);
        winston.error(err.message);
    }
});

//удалить задание
router.delete("/:id/:type", auth, async (req, res) => {
    try {
        if (req.params.type === 'trainings') {

            const event = await Trainings.findById(req.params.id);

            if (!event) return res.status(404).send("Trainings. Задача не найдена...");

            if (event.authorId !== req.user._id)
                return res.status(401).send("Trainings. Удаление задачи невозможнно. Нет авторизации...");

            const deletedTrainingsEvent = await Trainings.findByIdAndDelete(req.params.id);
            res.send(deletedTrainingsEvent);
        }
        if (req.params.type === 'diet') {

            const event = await Diet.findById(req.params.id);

            if (!event) return res.status(404).send("Diet. Задача не найдена...");

            if (event.authorId !== req.user._id)
                return res.status(401).send("Diet. Удаление задачи невозможнно. Нет авторизации...");

            const deletedDietEvent = await Diet.findByIdAndDelete(req.params.id);
            res.send(deletedDietEvent);
        }
    } catch (err) {
        res.status(500).send("Ошибка: " + err.message);
        winston.error(err.message);
    }
});

module.exports = router;

