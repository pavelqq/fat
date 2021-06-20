const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
    bio: Joi.string().max(60),
    profilePicture: Joi.string(),
    coverPicture: Joi.string(),
    isAdmin: Joi.boolean(),
    city: Joi.string().min(3).max(30),
    from: Joi.string().min(3).max(30),
    role: Joi.string(),
    age: Joi.date().raw(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Пользователь уже существует...");

  const { name, email, password, bio, profilePicture, coverPicture, city, from, role, age } = req.body;

  user = new User({ name, email, password, bio, profilePicture, coverPicture, city, from, role, age });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    bio: user.bio,
    profilePicture: user.profilePicture,
    coverPicture: user.coverPicture,
    isAdmin: user.isAdmin,
    city: user.city,
    from: user.from,
    role: user.role,
    age: user.age
  }, jwtSecretKey)

  res.send(token);
});

module.exports = router;
