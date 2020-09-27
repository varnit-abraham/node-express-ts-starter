/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { router } from "./routes/api.route";
import { ApiService } from "./services/api.service";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api', router);

/**
 * Server Activation
 */
const server = app.listen(PORT, async() => {
    ApiService.getInstance();
    console.log(`listening on port ${PORT}`);
});
