import { Router } from "express";
import paymentRoutes from "./payment";

const router = Router();

router.use("/payment", paymentRoutes);

export default router;
