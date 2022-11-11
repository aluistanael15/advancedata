import express from "express";
import mongoose from "mongoose";
import db from "./models.js";

const recordRoutes = express.Router();

const mongoDB =
    "mongodb+srv://admin:superstrongpass@cluster0.vi9dmex.mongodb.net/sample_restaurants?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

recordRoutes.route("/").get((req, res) => {
    res.json("test");
});

// This section will get a list of records
recordRoutes.route("/record").get(async (req, res) => {
    const records = await db.find({}).limit(500);
    res.json(records);
});

// This section will help you get a single record by name
recordRoutes.route("/record/:keyword").get(async (req, res) => {
    const records = await db
        .find({
            name: { $regex: req.params.keyword, $options: "ix" },
        })
        .limit(500);
    res.json(records);
});

recordRoutes.route("/record/borough/:name").get(async (req, res) => {
    const records = await db.find({ borough: req.params.name }).limit(500);
    res.json(records);
});

recordRoutes.route("/ratings").get(async (req, res) => {
    const records = await db.aggregate([
        { $match: { grades: { $elemMatch: { score: { $gt: 90 } } } } },
    ]);
    res.json(records);
});

export default recordRoutes;
