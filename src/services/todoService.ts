import { ITodoDb, TodoDb } from "../db/todoDb";
import Todo from "../entity/todo";
import CustomError from "../errors/customError";
import { errorCode } from "../errors/errorCode";

export default class TodoService {
    private todoDb: ITodoDb = new TodoDb()

    public async getAllTodo(): Promise<Todo[]> {
        return this.todoDb.getAllTodo()
    }

    public async getAllUndone(): Promise<Todo[]> {
        return this.todoDb.getAllUndone()
    }

    public async getAllDone(): Promise<Todo[]> {
        return this.todoDb.getAllDone()
    }

    public async getTodoById(todoId: string): Promise<Todo> {
        return this.todoDb.getTodoById(todoId)
    }

    public async createTodo(task: string): Promise<Todo> {
        return this.todoDb.createTodo(task)
    }

    public async deleteTodo(todoId: string): Promise<void> {
        const todo: Todo = await this.todoDb.getTodoById(todoId)

        if (!todo) {
            throw new CustomError(errorCode.TODO_NOT_FOUND)
        }

        todo.isDeleted = true

        return this.todoDb.saveTodo(todo)
    }

    public async updateTodo(todoId: string, task: string): Promise<Todo> {
        const todo: Todo = await this.todoDb.getTodoById(todoId)

        if (!todo) {
            throw new CustomError(errorCode.TODO_NOT_FOUND)
        }

        todo.task = task
        await this.todoDb.saveTodo(todo)
        return todo
    }

    public async markAsDoneById(todoId: string): Promise<Todo> {
        const todo: Todo = await this.todoDb.getTodoById(todoId)

        if (!todo) {
            throw new CustomError(errorCode.TODO_NOT_FOUND)
        }

        todo.isDone = true
        await this.todoDb.saveTodo(todo)
        return todo
    }

    public async markAsUndoneById(todoId: string): Promise<Todo> {
        const todo: Todo = await this.todoDb.getTodoById(todoId)

        if (!todo) {
            throw new CustomError(errorCode.TODO_NOT_FOUND)
        }

        todo.isDone = false
        await this.todoDb.saveTodo(todo)
        return todo
    }
}