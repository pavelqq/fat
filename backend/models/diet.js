const mongoose = require("mongoose");

const dietEventSchema = new mongoose.Schema({
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

const Diet = mongoose.model("Diet", dietEventSchema);
exports.Diet = Diet;