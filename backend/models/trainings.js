const mongoose = require("mongoose");


const trainingsEventSchema = new mongoose.Schema({
        id: {type: String},
        type: {type: String},
        projectId: {type: String},
        authorId: {type: String},
        title: {type: String},
        desc: {type: String},
        allDay: {type: Boolean},
        color: {type: String},
        start: {type: Date},
        end: {type: Date}
    }
);

const Trainings = mongoose.model("TrainingsEvent", trainingsEventSchema);
exports.Trainings = Trainings;