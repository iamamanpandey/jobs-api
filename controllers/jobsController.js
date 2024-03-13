const Job = require("../models/jobs");

exports.getJobs = async (req, res, next) => {
  const job = await Job.find();
  res.status(200).json({
    success: true,
    message: "Job Created",
    data: job,
  });
};

exports.newJobs = async (req, res, next) => {
  const job = await Job.create(req.body);
  console.log(req.body, "reee");
  res.status(200).json({
    success: true,
    message: "Job Created",
    data: job,
  });
};
