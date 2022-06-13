import Router from "koa-router"

import todoRoutes from "./toDoRoute"
import authRoutes from "./authRoute"
import userRoutes from "./userRoute"

const router = new Router()
router.prefix("/api")

// Set up routes
router.use("/todo", todoRoutes)
router.use("/crypto", authRoutes)
router.use("/user", userRoutes)

export default router