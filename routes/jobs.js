const express = require("express");
const router = express.Router();
const catchAsyncError = require("../middleware/catchAsyncErros")
const {
  newJobs,
  getJobs,
  updateJob,
  deleteJob,
  getJob,
} = require("../controllers/jobsController");


router.get("/jobs", catchAsyncError(getJobs));
router.get("/job/:id", catchAsyncError(getJob));
router.put("/job/:id", catchAsyncError(updateJob));
router.delete("/job/:id", catchAsyncError(deleteJob));
router.post("/job/new", catchAsyncError(newJobs));

module.exports = router;
