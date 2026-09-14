import mongoose from "mongoose"

const ActivitySchema = new mongoose.Schema({
  name: String,
  duration: String,
  level: String
});

const activityModel = mongoose.model('activities', ActivitySchema);

export default activityModel
