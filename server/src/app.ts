import express, { type Request, type Response } from "express";
import morgan from "morgan";
import { requestLoggerFormat } from "./constants/utils/logger";

const app: express.Express = express();

app.use(morgan(requestLoggerFormat));

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "Hi! This is Stripe SaaS server" });
});

export default app;
