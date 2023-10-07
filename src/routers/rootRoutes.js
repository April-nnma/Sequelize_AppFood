import express from "express"
import { likeRoute } from "./likeRoutes.js"
import { EvaluateRoute } from "./evaluateRoutes.js"
import { orderRoutes } from "./orderRoutes.js"
export const rootRouter = express.Router()

rootRouter.use("/like" , likeRoute)


rootRouter.use("/evaluate" , EvaluateRoute)

rootRouter.use("/order", orderRoutes)

