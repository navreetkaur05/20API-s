import activityModel from "../models/activity.model.js";
import { addActivityService, deleteActivityService, getActivitiesService, updateActivityService, updateActivityStatusService } from "../services/activity.service.js";

export const getActivitiesController = async (req, res) => {
  
  const activities = await getActivitiesService();

  res.json({
    message: "Activities fetched successfully",
    data: activities,
  });
};

export const addActivityController = async (req, res) => {
  const data = req.body;

  const newActivity = await addActivityService(data)

  res.json({
    message: "Activity added successfully",
    data: newActivity,
  });
};

export const updateActivityController = async (req, res) => {
  const data = req.body;

  const aId = req.params.id;

  const activity = await updateActivityService(aId, data);

  res.json({
    message: "Activity updated successfully",
    activityId: aId,
    data: activity
  });
};

export const updateActivityStatusController = async (req, res) => {
  const data = req.body;
  const aId = req.params.id;

  const activity = await updateActivityStatusService(aId,
    data.status
  )
  res.json({
    message: "Activity status updated successfully",
    activityId: aId,
    data: activity
  });
};

export const deleteActivityController = async (req, res) => {
  const aId = req.params.id;

  const activity = await deleteActivityService(aId);

  res.json({
    message: "Activity deleted successfully",
    activityId: aId,
    data: activity
  });
};
