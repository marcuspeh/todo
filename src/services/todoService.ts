import User from "entity/user"
import { ITodoDb, TodoDb } from "../db/todoDb"
import Todo from "../entity/todo"
import CustomError from "../errors/customError"
import { errorCode } from "../errors/errorCode"

export default class TodoService {
    private todoDb: ITodoDb = new TodoDb()

    public async getAllTodo(userId: string): Promise<Todo[]> {
        return this.todoDb.getAllTodo(userId)
    }

    public async getAllUndone(userId: string): Promise<Todo[]> {
        return this.todoDb.getAllUndone(userId)
    }

    public async getAllDone(userId: string): Promise<Todo[]> {
        return this.todoDb.getAllDone(userId)
    }

    public async getTodoById(todoId: string, userId: string): Promise<Todo> {
        return this.todoDb.getTodoById(todoId, userId)
    }

    public async createTodo(title: string, task: string, user: User): Promise<Todo> {
        return this.todoDb.createTodo(title, task, user)
    }

    public async deleteTodo(todoId: string, userId: string): Promise<void> {
        const todo: Todo = await this.todoDb.getTodoById(todoId, userId)

        if (!todo) {
            throw new CustomError(errorCode.TODO_NOT_FOUND)
        }

        todo.isDeleted = true

        await this.todoDb.saveTodo(todo)
    }

    public async updateTodo(todoId: string, title: string, task: string, userId: string): Promise<Todo> {
        const todo: Todo = await this.todoDb.getTodoById(todoId, userId)

        if (!todo) {
            throw new CustomError(errorCode.TODO_NOT_FOUND)
        }

        if (title && title.length > 0) {
            todo.title = title
        }
        if (task && task.length > 0) {
            todo.task = task
        }

        return await this.todoDb.saveTodo(todo)
    }

    public async markAsDoneById(todoId: string, userId: string): Promise<Todo> {
        const todo: Todo = await this.todoDb.getTodoById(todoId, userId)

        if (!todo) {
            throw new CustomError(errorCode.TODO_NOT_FOUND)
        }

        todo.isDone = true
        return await this.todoDb.saveTodo(todo)
    }

    public async markAsUndoneById(todoId: string, userId: string): Promise<Todo> {
        const todo: Todo = await this.todoDb.getTodoById(todoId, userId)

        if (!todo) {
            throw new CustomError(errorCode.TODO_NOT_FOUND)
        }

        todo.isDone = false
        return await this.todoDb.saveTodo(todo)
    }
}