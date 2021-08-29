//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route  /signup
Des    Register new  user
Params None
Access Public
Method Post
*/

Router.post("/signup", async (req, res) => {
  try {
    await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials); // save to DB
    const token = newUser.generateJwtToken(); // generate JWT auth token
    return res.status(200).json({ token, status: "success" }); //return
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route  /signin
Des    Signin with email and password
Params None
Access Public
Method Post
*/

Router.post("/signin", async (req, res) => {
  try {
    const user = await UserModel.findByEmailAndPassword(
      req.body.credentials
    );
    const token = user.generateJwtToken(); // generate JWT auth token
    return res.status(200).json({ token, status: "success" }); //return
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
