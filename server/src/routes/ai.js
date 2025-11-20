import express from "express";
import { evaluateSurvey } from "../controllers/aiController.js";

const router = express.Router();

router.post("/evaluate-survey", evaluateSurvey);

export default router;
