const winston = require("winston");
const cors = require("cors");
const express = require("express");
//const favicon = require('express-favicon');
const path = require("path");
const mongoose = require("mongoose");

const todos = require("./routes/todos");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const users = require("./routes/users");
const posts = require("./routes/posts");
const projects = require("./routes/projects");
const events = require("./routes/events");

winston.exceptions.handle(
    new winston.transports.Console({colorize: true, prettyprint: true}),
    new winston.transports.File({filename: "uncaughtExceptions.log"})
);

process.on("unhandledRejection", (error) => {
    throw error;
});

winston.add(new winston.transports.File({filename: "logfile.log"}));

require("dotenv").config();

const app = express();

// app.use(express.static(path.resolve(__dirname, "../build")));
// app.get("*", function (request, response) {
//     response.sendFile(path.resolve(__dirname, "../build", "index.html"));
// });

app.use(express.json());
app.use(cors());

app.use("/api/todos", todos);
app.use("/api/signup", signUp);
app.use("/api/signin", signIn);
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/projects", projects);
app.use("/api/events", events);

app.get("/", (req, res) => {
    res.send("добро пожаловать в API фэт...");
});

const uri = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту: ${PORT}...`);
});

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB соединение установлено..."))
    .catch((error) => console.error("MongoDB соединение потеряно:", error.message));

