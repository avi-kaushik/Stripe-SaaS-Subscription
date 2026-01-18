import { Response, Router } from "express";
import { PRICING_MODEL } from "../../constants/payments/pricing";

const router = Router();

router.get("/pricing", (req, res: Response) => res.json(PRICING_MODEL));

export default router;
