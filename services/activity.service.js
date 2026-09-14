import activityModel from "../models/activity.model.js";

export const getActivitiesService = async () => {
  const activities = await activityModel.find();
  return activities;
};

export const addActivityService = async (body) => {
  const newActivity = await activityModel.create({
    name: body.name,
    duration: body.duration,
    level: body.level,
    status: "Pending",
  });

  return newActivity;
};

export const updateActivityService = async (id, data) => {
  delete data.status;

  const activity = await activityModel.updateOne(
    {
      _id: id,
    },
    {
      ...data,
    }
  );

  return activity;
};

export const updateActivityStatusService = async (id, status) => {
  const activity = await activityModel.updateOne(
    {
      _id: id,
    },
    {
      status: status,
    }
  );

  return activity;
};

export const deleteActivityService = async (id) => {
  const activity = await activityModel.deleteOne({
    _id: id,
  });

  return activity;
};