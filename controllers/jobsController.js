const Job = require("../models/jobs");
const mongoose = require("mongoose");

exports.getJobs = async (req, res, next) => {
  const job = await Job.find();
  res.status(200).json({
    success: true,
    result: Job.length,
    data: job,
  });
};

exports.getJob = async (req, res, next) => {
  try {
    let job;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(req?.params?.id);
    // const job = await Job.findOne({
    //  $and/$or: [{ _id: req.params.id }, { slug: req.params.slug }],
    // });

    if (isValidObjectId) {
      job = await Job.findOne({ _id: req.params.id });
    } else {

      job = await Job.findOne({ slug: req.params.slug });
      console.log(req.params.slug)
    }
    if (!job || job.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found.",
      });
    }
    return res.status(200).json({
      success: true,
      result: job?.length,
      data: job,
    });
  } catch (error) {
    console.log(error?.message);
  }
};

exports.newJobs = async (req, res, next) => {
  const job = await Job.create(req.body);
  res.status(200).json({
    success: true,
    message: "Job Created",
    data: job,
  });
};

exports.updateJob = async (req, res) => {
  let job = await Job.findById(req?.params?.id);

  if (!job) {
    res.status(404).json({
      success: false,
      message: "Job not found.",
    });
  }
  job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Job has been updated",
    data: job,
  });
};

exports.deleteJob = async (req, res) => {
  let job = await Job.findById(req?.params?.id);
  if (!job) {
    res.status(404).json({
      success: false,
      message: "Job not found.",
    });
  }
  job = await Job.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Job has been updated",
    data: job,
  });
};
