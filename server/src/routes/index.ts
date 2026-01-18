import { Router } from "express";
import configRoutes from "./config";

const router = Router();

router.use("/config", configRoutes);

export default router;
