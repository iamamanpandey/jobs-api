const { json } = require("body-parser");
const Job = require("../models/jobs");

exports.getJobs = async (req, res, next) => {
  const job = await Job.find();
  res.status(200).json({
    success: true,
    result: Job.length,
    data: job,
  });
};

exports.newJobs = async (req, res, next) => {
  const job = await Job.create(req.body);
  res.status(200).json({
    success: true,
    message: "Job Created",
    data: job,
  });
};
