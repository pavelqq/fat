const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).send("Доступ без авторизации запрещён...");
    try {
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        const decoded = jwt.verify(token, jwtSecretKey);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send("Неправильный токен авторизации...");
    }
}

module.exports = auth;
