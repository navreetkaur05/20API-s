import express from "express"
import { addActivityController, deleteActivityController, getActivitiesController, updateActivityController, updateActivityStatusController } from "../controller/activity.controller.js";

const activitiesRouter = express.Router();

activitiesRouter.get("/", getActivitiesController);

activitiesRouter.post("/", addActivityController);

activitiesRouter.put("/:id", updateActivityController);

activitiesRouter.patch("/:id/status", updateActivityStatusController);

activitiesRouter.delete("/:id", deleteActivityController);

export default activitiesRouter