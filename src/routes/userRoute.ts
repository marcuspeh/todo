import Router from "koa-router"
import { Context } from "koa";
import userController from "../controllers/userController";

const router = new Router()

router.post('/register', async (ctx: Context) => {await userController.register(ctx)});
router.post('/login', async (ctx:Context) => {await userController.login(ctx)});


const userRoutes = router.routes()
export default userRoutes