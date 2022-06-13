import Router from "koa-router"
import authController from "../controllers/authController"
import { Context } from "koa";

const router = new Router()


router.get('/getPublicKey', async (ctx: Context) => {await authController.getPublicKey(ctx)});
router.post('/encrypt', async (ctx:Context) => {await authController.encrypt(ctx)});
router.post('/decrypt', async (ctx:Context) => {await authController.decrypt(ctx)});


const todoRoutes = router.routes()
export default todoRoutes