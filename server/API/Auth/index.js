//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

//Models
import { UserModel } from "../../database/user";

// validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

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
    await ValidateSignup(req.body.credentials);
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
    await ValidateSignin(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken(); // generate JWT auth token
    return res.status(200).json({ token, status: "success" }); //return
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route  /google
Des    Google Signin
Params None
Access Public
Method Get
*/

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/*
Route  /google/callback
Des    Google Signin Callback
Params None
Access Public
Method Get
*/

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);

export default Router;
