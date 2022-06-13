import Router from "koa-router"
import todoController from "../controllers/todoController"
import { Context } from "koa"

const router = new Router()


router.get('/getAll', async (ctx: Context) => {await todoController.getAllTodo(ctx)})
router.get('/getUndone', async (ctx:Context) => {await todoController.getAllUndone(ctx)})
router.get('/getDone', async (ctx:Context) => {await todoController.getAllDone(ctx)})

router.post('/createNew', async (ctx:Context) => {await todoController.createTodo(ctx)})

router.get('/get', async (ctx:Context) => {await todoController.getTodoById(ctx)})
router.delete('/delete', async (ctx:Context) => {await todoController.deleteTodo(ctx)})
router.patch('/markDone', async (ctx:Context) => {await todoController.markTodoAsDone(ctx)})
router.patch('/markUndone', async (ctx:Context) => {await todoController.markTodoUndone(ctx)})
router.patch('/update', async (ctx:Context) => {await todoController.updateTodo(ctx)})


const todoRoutes = router.routes()
export default todoRoutes