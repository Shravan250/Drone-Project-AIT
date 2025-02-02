import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { createAnomaly } from "../controller/anomaly.controller";



const router = Router()

router.route('/insertAnomaly').post(authMiddleware,createAnomaly)


export default router