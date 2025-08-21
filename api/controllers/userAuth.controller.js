import User from "../models/userModel/userModel.js";
import bcryptjs from "bcryptjs";
import { customError } from "../utils/errorHandling/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  try {
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Registered user successfully!" });
  } catch (error) {
    console.error("Error:", error.message);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(customError(404, "User not found!"));
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) return next(customError(401, "Wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password:hashedPassword,...rest} = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true, maxAge:36000 })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
