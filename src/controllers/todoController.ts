import { plainToInstance } from "class-transformer"
import { Context } from "koa"
import Todo from "../entity/todo"
import TodoService from "../services/todoService"
import { newTodoDTO, todoIdDTO, updateTodoDTO } from "./apiSchemas/todoDTO"
import dtoValidator from "./helper/dtoValidator"

class TodoController {
    private todoService: TodoService = new TodoService()

    public async getAllTodo(ctx: Context) {
        const todos: Todo[] = await this.todoService.getAllTodo()

        ctx.body = {
            data: todos 
        }
    }

    public async getAllDone(ctx: Context) {
        const todos: Todo[] = await this.todoService.getAllDone()

        ctx.body = {
            data: todos
        }
    }

    public async getAllUndone(ctx: Context) {
        const todos: Todo[] = await this.todoService.getAllUndone()

        ctx.body = {
            data: todos 
        }
    }

    public async getTodoById(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(todoIdDTO, ctx.request.body);
        const todo: Todo = await this.todoService.getTodoById(apiDto.id)

        ctx.body = {
            data: todo
        }
    }

    public async createTodo(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(newTodoDTO, ctx.request.body);
        const todo: Todo = await this.todoService.createTodo(apiDto.task)

        ctx.body = {
            data: todo
        }
    }

    public async deleteTodo(ctx: Context) {    
        const apiDto = await dtoValidator.inputValidate(todoIdDTO, ctx.request.body);
        await this.todoService.deleteTodo(apiDto.id)
    
        ctx.body = {
            message: "Deleted"
        }
    }

    public async updateTodo(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(updateTodoDTO, ctx.request.body);
        const todo:Todo = await this.todoService.updateTodo(apiDto.id, apiDto.task)
       
        ctx.body = {
           data: todo
        }
    }

    public async markTodoAsDone(ctx: Context) {  
        const apiDto = await dtoValidator.inputValidate(todoIdDTO, ctx.request.body);
        const todo = await this.todoService.markAsDoneById(apiDto.id)

        ctx.body = {
            data: todo,
        }
    }

    public async markTodoUndone(ctx: Context) {
        const apiDto = await dtoValidator.inputValidate(todoIdDTO, ctx.request.body);
        const todo = await this.todoService.markAsUndoneById(apiDto.id)

        ctx.body = {
            data: todo,
        }
    }
}

export default new TodoController()