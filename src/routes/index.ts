import Router from "koa-router"

import todoRoutes from "./toDoRoute"
import cryptoRoutes from "./cryptoRoute"
import userRoutes from "./userRoute"

const router = new Router()
router.prefix("/api")

// Set up routes
router.use("/todo", todoRoutes)
router.use("/crypto", cryptoRoutes)
router.use("/user", userRoutes)

export default router