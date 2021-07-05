const winston = require("winston");
const auth = require("../middleware/auth");
const Joi = require("joi");
const express = require("express");
const router = express.Router();
const {Trainings} = require("../models/trainings");
const {Diet} = require("../models/diet");

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

module.exports = router;

//создать новое задание по диете
// router.post("/:currentProjectId/createEvent/diet", auth, async (req, res) => {
//     const schema = Joi.object({
//         type: Joi.string().required(),
//         projectId: Joi.string().required(),
//         authorId: Joi.string().required(),
//         title: Joi.string().required(),
//         desc: Joi.string().required(),
//         allDay: Joi.boolean().required(),
//         color: Joi.string().required(),
//         start: Joi.date().required(),
//         end: Joi.date().required(),
//     });
//
//     const {error} = schema.validate(req.body);
//
//     if (error) return res.status(400).send(error.details[0].message);
//
//     const {type, projectId, authorId, title, desc, allDay, color, start, end} = req.body;
//
//     let dietEvent = new DietEvent({type, projectId, authorId, title, desc, allDay, color, start, end});
//
//     dietEvent = await dietEvent.save();
//     res.send(dietEvent);
// });

