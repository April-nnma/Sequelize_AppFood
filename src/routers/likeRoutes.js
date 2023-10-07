import express from "express"
import { getListLikeFromRes, getListLikeFromUser, likeRestaurant } from "../controllers/likeController.js"

export const likeRoute = express.Router()

likeRoute.post("/user", likeRestaurant)

likeRoute.get("/get-list-like-from-res/:resId", getListLikeFromRes)

likeRoute.get("/get-list-like-from-user/:userId", getListLikeFromUser)