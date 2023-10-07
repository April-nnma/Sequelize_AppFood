import express from "express";
import { userOrder } from "../controllers/orderController.js";

export const orderRoutes = express.Router()


orderRoutes.post("/", userOrder)