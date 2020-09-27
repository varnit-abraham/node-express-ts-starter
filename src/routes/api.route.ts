/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";

import { ApiService } from "../services/api.service";

/**
 * Router Definition
 */
export const router = express.Router();

/**
 * Controller Definitions
 */

// GET api/
router.get("/", async (req: Request, res: Response) => {
  try {
    const expenses = await ApiService.getInstance().getData();
    return res.status(200).send(expenses);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
