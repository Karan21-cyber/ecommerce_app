const User = require("../Model/userModel");
const generateToken = require("./generateToken");

const registerUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      gender,
      contact,
      email,
      dateOfBirth,
      role,
      address,
      password,
      verify,
    } = req.body;

    if (
      !firstname ||
      !lastname ||
      !gender ||
      !contact ||
      !email ||
      !dateOfBirth ||
      !role ||
      !address ||
      !password ||
      !verify
    ) {
      return res.status(400).send({
        fieldsError: "All fields are required",
      });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).send({
        emailError: "Email already exists",
      });
    }

    const phoneExists = await User.findOne({ contact });

    if (phoneExists) {
      return res.status(400).send({
        phoneError: "Phone already exists",
      });
    }

    const user = await User.create({
      firstname,
      lastname,
      gender,
      contact,
      email,
      dateOfBirth,
      role,
      address,
      password,
      verify,
    });

    if (user) {
      return res.status(201).send(user);
    }
  } catch (error) {
    return res.status(400).send({ error: "Unable to create new user" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    const user = await User.findOne({ email, phone }).populate(
      "user",
      "-password"
    );

    if (login && (await User.matchPassword(password))) {
      return res.status(200).send({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        gender: user.gender,
        contact: user.contact,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        role: user.role,
        verify: user.verify,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const alluser = async (req, res) => {
  try {
    const users = await User.find().populate("user", "-password");

    if (users) {
      return res.status(200).send(users);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      userId,
      firstname,
      lastname,
      gender,
      contact,
      email,
      dateOfBirth,
      address,
      password,
      verify,
    } = req.body;

    const update = await User.findByIdAndUpdate(
      userId,
      {
        firstname,
        lastname,
        gender,
        contact,
        email,
        dateOfBirth,
        address,
        password,
        verify,
      },
      {
        new: true,
      }
    );
    if (update) {
      res.status(200).send(update);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { registerUser, userLogin, alluser };
