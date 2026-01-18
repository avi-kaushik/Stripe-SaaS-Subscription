import app from "./app";
import { ENV } from "./config";
import logger from "./utils/logger";

app.listen(ENV.PORT, () => {
  logger.info(`Server listening at port ${ENV.PORT}`);
});
