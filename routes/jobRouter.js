import { Router } from "express";
const router = Router();

import { addJob, getAllJobs, deleteJob } from "../controllers/jobController.js";

router.route("/").get(getAllJobs).post(addJob);

router.route("/:id").delete(deleteJob);

export default router;
