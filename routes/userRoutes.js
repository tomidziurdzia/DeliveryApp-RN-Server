import express from "express";
import { register } from "../controllers/usersController.js";

const router = express.Router();

router.post("/api/users/create", register);

export default router;
