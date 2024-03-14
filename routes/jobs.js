const express = require("express");
const router = express.Router();

const { newJobs ,getJobs} = require("../controllers/jobsController");

router.route("/jobs").get(getJobs)

router.route("/job/new").post(newJobs);

module.exports = router;
