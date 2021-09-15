// Libraries
import express from "express";
import passport from "passport";

// Database Model
import { ReviewModel } from "../../database/allModels";

// Validations
import { ValidateReview, ValidateDeleteReview } from "../../validation/reviews";

const Router = express.Router();

/*
Route  /new
Des    add new food review/rating
Params none
Body   review object
Access Public
Method POST
*/

Router.post("/new", async (req, res) => {
  try {
    await ValidateReview(req.body);
    const { reviewData } = req.body;

    await ReviewModel.create(reviewData);

    return res.json({ review: "Successfully Review Created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route  /delete
Des    delete food review/rating
Params _id
Body   none
Access Public
Method DELETE
*/

Router.delete("/delete/:_id", async (req, res) => {
  try {
    await ValidateDeleteReview(req.params);
    const { _id } = req.params;

    await ReviewModel.findByIdAndDelete(_id);

    return res.json({ review: "Successfully Review Deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
