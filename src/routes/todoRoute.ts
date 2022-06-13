import Router from "koa-router"
import todoController from "../controllers/todoController"
import { Context } from "koa"
import auth from "../middleware/auth"

const router = new Router()


router.get('/getAll', auth, async (ctx: Context) => {await todoController.getAllTodo(ctx)})
router.get('/getUndone', auth, async (ctx:Context) => {await todoController.getAllUndone(ctx)})
router.get('/getDone', auth, async (ctx:Context) => {await todoController.getAllDone(ctx)})

router.post('/createNew', auth, async (ctx:Context) => {await todoController.createTodo(ctx)})

router.get('/get', auth, async (ctx:Context) => {await todoController.getTodoById(ctx)})
router.delete('/delete', auth, async (ctx:Context) => {await todoController.deleteTodo(ctx)})
router.patch('/markDone', auth, async (ctx:Context) => {await todoController.markTodoAsDone(ctx)})
router.patch('/markUndone', auth, async (ctx:Context) => {await todoController.markTodoUndone(ctx)})
router.patch('/update', auth, async (ctx:Context) => {await todoController.updateTodo(ctx)})


const todoRoutes = router.routes()
export default todoRoutes