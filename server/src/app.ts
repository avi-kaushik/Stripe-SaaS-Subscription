import express, { Application, type Request, type Response } from "express";
import morgan from "morgan";
import { requestLoggerFormat } from "./constants/utils/logger";
import router from "./routes";

const app: Application = express();

app.use(express.json());
app.use(morgan(requestLoggerFormat));

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "Hi! This is Stripe SaaS server" });
});

app.use("/", router);

export default app;
