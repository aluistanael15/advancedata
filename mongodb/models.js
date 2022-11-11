import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurants = new Schema({
    name: String,
    borough: String,
    cuisine: String,
    address: Object,
    grades: Array,
});

//Export model
export default mongoose.model("restaurants", restaurants);
