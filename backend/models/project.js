const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({
        title: {type: String, required: true},
        description: {type: String, required: true},
        tags: {
            text: {type: Array, default: []},
        },
        author: {
            uid: {type: String, required: true},
            name: {type: String, required: true},
            profilePicture: {type: String},
        },
        members: {type: Array, default: []},
        difficult: {type: Number},
        duration: {type: Number},
        startDate: {type: Date},
        endDate: {type: Date},
        date: {type: Date, default: new Date()},
    },
);

//images: {type: Array}, файлы с картинками прикрепленные к посту, надо будет заняться этим
//files: {type: Array},
//tags: [{ type: Schema.Types.ObjectId, ref: 'Tags' }],
// membership: {type: Boolean},
// diet: [{ type: Schema.Types.ObjectId, ref: 'Diet' }],
// trainings: [{ type: Schema.Types.ObjectId, ref: 'Trainings' }]

// const tagsSchema = mongoose.Schema({
//     text: {type: String}
// })
// const dietSchema = new mongoose.Schema({
//     // date: {type: Date},
//     // title: {type: String},
//     // description: {type: String},
//     events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
// });
//
// const trainingsSchema = new mongoose.Schema({
//     // date: {type: Date},
//     // title: {type: String},
//     // description: {type: String},
//     events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
// });

const Project = mongoose.model("Project", projectSchema);
// const Tags = mongoose.model("Tags", tagsSchema);
// const Diet = mongoose.model("Diet", dietSchema);
// const Trainings = mongoose.model("Trainings", trainingsSchema);

exports.Project = Project;
// exports.Tags = Tags;
// exports.Diet = Diet;
// exports.Trainings = Trainings;