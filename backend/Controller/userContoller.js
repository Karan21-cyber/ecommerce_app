const User = require("../Model/userModel");
const generateToken = require("./generateToken");
const bcrypt = require("bcryptjs");

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
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
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
    } else {
      return res.status(401).send({ error: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(400).send({ error: "An error occurred during login" });
  }
};


const alluser = async (req, res) => {
  try {
    const users = await User.find();

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
      password,
      dateOfBirth,
      address,
      verify,
    } = req.body;

    let updatedFields = {
      firstname,
      lastname,
      gender,
      contact,
      email,
      dateOfBirth,
      address,
      verify,
    };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updatedFields.password = hashedPassword;
    }

    const update = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true,
    });
    if (update) {
      return res.status(200).send(update);
    } else {
      return res.status(400).send({ error: "Unable to find user to update" });
    }
  } catch (error) {
    return res.status(400).send({ error: "Unable to update user" });
  }
};

module.exports = { registerUser, userLogin, alluser, updateUser };
