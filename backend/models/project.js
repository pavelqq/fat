const mongoose = require("mongoose");
const Schema = require("mongoose");

const projectSchema = new mongoose.Schema({
        title: {type: String, required: true},
        description: {type: String, required: true},
        //images: {type: Array}, файлы с картинками прикрепленные к посту, надо будет заняться этим
        //files: {type: Array},
        tags: {
            text: {type: Array, default: []},
        },
        //tags: [{ type: Schema.Types.ObjectId, ref: 'Tags' }],
        author: {
            uid: {type: String, required: true},
            name: {type: String, required: true},
            profilePicture: {type: String},
        },
        // membership: {type: Boolean},
        // members: {type: Array, default: []},
        difficult: {type: Number},
        // duration: {type: Number},
        startDate: {type: Date},
        endDate: {type: Date},
        date: {type: Date, default: new Date()},
        // diet: [{ type: Schema.Types.ObjectId, ref: 'Diet' }],
        // trainings: [{ type: Schema.Types.ObjectId, ref: 'Trainings' }]
    },
);

const tagsSchema = mongoose.Schema({
    text: {type: String}
})

const dietSchema = mongoose.Schema({
    date: {type: Date},
    title: {type: String},
    description: {type: String},
});

const trainingsSchema = mongoose.Schema({
    date: {type: Date},
    title: {type: String},
    description: {type: String},
});

const Project = mongoose.model("Project", projectSchema);
// const Tags = mongoose.model("Tags", tagsSchema);

const Diet = mongoose.model("Diet", dietSchema);
const Trainings = mongoose.model("Trainings", trainingsSchema);

exports.Project = Project;
// exports.Tags = Tags;

exports.Diet = Diet;
exports.Trainings = Trainings;
