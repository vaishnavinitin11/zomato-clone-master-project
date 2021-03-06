// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database Model
import { ImageModel } from "../../database/allModels";

// Validations
import { ValidateImageFile } from "../../validation/image";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route  /
Des    Get Image details
Params _id
Access Public
Method GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route  /
Des    uploads given image to s3 bucket, and saves file link to mongodb
Params none
Access Public
Method POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    await ValidateImageFile(req.file);
    const file = req.file;

    //S3 bucket options
    const bucketOptions = {
      Bucket: "zomatovaishnavi",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // ACCESS CONTROL LIST
    };

    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
