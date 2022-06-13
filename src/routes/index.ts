import Router from "koa-router"

import todoRoutes from "./toDoRoute"
import authRoutes from "./authRoute"

const router = new Router()
router.prefix("/api")

// Set up routes
router.use("/todo", todoRoutes)
router.use("/auth", authRoutes)

export default router