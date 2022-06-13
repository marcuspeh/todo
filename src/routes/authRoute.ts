import Router from "koa-router"
import cryptoController from "../controllers/cryptoController"
import { Context } from "koa";

const router = new Router()


router.get('/getPublicKey', async (ctx: Context) => {await cryptoController.getPublicKey(ctx)});
router.post('/encrypt', async (ctx:Context) => {await cryptoController.encrypt(ctx)});
router.post('/decrypt', async (ctx:Context) => {await cryptoController.decrypt(ctx)});
router.post('/hashPassword', async (ctx:Context) => {await cryptoController.hashPasword(ctx)});
router.post('/checkPassword', async (ctx:Context) => {await cryptoController.checkPassword(ctx)});


const authRoutes = router.routes()
export default authRoutes