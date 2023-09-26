import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

export const getAllJobs = async (req, res) => {
  const queryObject = { createdBy: req.user.userId };
  const jobs = await Job.find(queryObject);

  res.status(StatusCodes.OK).json({ jobs });
};

export const addJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  return res.status(StatusCodes.CREATED).json({ job });
};

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ job: removedJob });
};
