import User from "../entity/user"
import { Context } from "koa"
import Todo from "../entity/todo"
import TodoService from "../services/todoService"
import UserService from "../services/userService"
import { newTodoDTO, todoIdDTO, updateTodoDTO } from "./apiSchemas/todoDTO"
import dtoValidator from "./helper/dtoValidator"

class TodoController {
    private todoService: TodoService = new TodoService()
    private userService: UserService = new UserService()

    public async getAllTodo(ctx: Context) {
        const userId = ctx.request.header.userId.toString()
        const todos: Todo[] = await this.todoService.getAllTodo(userId)

        ctx.body = {
            data: todos 
        }
    }

    public async getAllDone(ctx: Context) {
        const userId = ctx.request.header.userId.toString()
        const todos: Todo[] = await this.todoService.getAllDone(userId)

        ctx.body = {
            data: todos
        }
    }

    public async getAllUndone(ctx: Context) {
        const userId = ctx.request.header.userId.toString()
        const todos: Todo[] = await this.todoService.getAllUndone(userId)

        ctx.body = {
            data: todos 
        }
    }

    public async getTodoById(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(todoIdDTO, ctx.request.body)
        
        const userId = ctx.request.header.userId.toString()
        const todo: Todo = await this.todoService.getTodoById(apiDto.id, userId)

        ctx.body = {
            data: todo
        }
    }

    public async createTodo(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(newTodoDTO, ctx.request.body)
        
        const userId = ctx.request.header.userId.toString()
        const user: User = await this.userService.getUser(userId)

        const todo: Todo = await this.todoService.createTodo(apiDto.task, user)

        ctx.body = {
            data: todo
        }
    }

    public async deleteTodo(ctx: Context) {    
        const apiDto = await dtoValidator.inputValidate(todoIdDTO, ctx.request.body)
        
        const userId = ctx.request.header.userId.toString()
        await this.todoService.deleteTodo(apiDto.id, userId)
    
        ctx.body = {
            message: "Deleted"
        }
    }

    public async updateTodo(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(updateTodoDTO, ctx.request.body)
        
        const userId = ctx.request.header.userId.toString()
        const todo:Todo = await this.todoService.updateTodo(apiDto.id, apiDto.task, userId)
       
        ctx.body = {
           data: todo
        }
    }

    public async markTodoAsDone(ctx: Context) {  
        const apiDto = await dtoValidator.inputValidate(todoIdDTO, ctx.request.body)
        
        const userId = ctx.request.header.userId.toString()
        const todo = await this.todoService.markAsDoneById(apiDto.id, userId)

        ctx.body = {
            data: todo,
        }
    }

    public async markTodoUndone(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(todoIdDTO, ctx.request.body)
        
        const userId = ctx.request.header.userId.toString()
        const todo = await this.todoService.markAsUndoneById(apiDto.id, userId)

        ctx.body = {
            data: todo,
        }
    }
}

export default new TodoController()