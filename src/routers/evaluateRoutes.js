import express from "express"
import { addEvaluate, getListEvaluateFromRes, getListEvaluateFromUser } from "../controllers/evaluateController.js"
export const EvaluateRoute = express.Router()

EvaluateRoute.post("/", addEvaluate)

EvaluateRoute.get("/get-list-evaluate-from-res/:resId", getListEvaluateFromRes)

EvaluateRoute.get("/get-list-evaluate-from-user/:userId", getListEvaluateFromUser)