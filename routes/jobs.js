const express = require("express");
const router = express.Router();

const {
  newJobs,
  getJobs,
  updateJob,
  deleteJob,
  getJob,
} = require("../controllers/jobsController");

router.get("/jobs", getJobs);
router.get("/job/:id", getJob);
router.put("/job/:id", updateJob);
router.delete("/job/:id", deleteJob);
router.post("/job/new", newJobs);

module.exports = router;
