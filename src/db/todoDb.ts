import { dataSource } from "../data-source";
import Todo from "../entity/todo"

export interface ITodoDb {
    getAllTodo: () => Promise<Todo[]>
    getAllUndone: () => Promise<Todo[]>
    getAllDone: () => Promise<Todo[]>
    getTodoById: (todoId: string) => Promise<Todo>
    createTodo: (task: string) => Promise<Todo>
    deleteTodoById: (todo: Todo) => Promise<void>
    saveTodo: (todo: Todo) => Promise<void>
}

export class TodoDb implements ITodoDb {
    todoRepo = dataSource.getRepository(Todo);
    
    public async getAllTodo(): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder()
            .getMany()

        return todos
    }

    public async getAllUndone(): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder('todo')
            .where('todo.done = :status', { status: false })
            .getMany()

        return todos
    }

    public async getAllDone(): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder('todo')
            .where('todo.done = :status', { status: true })
            .getMany()
        
        return todos
    }

    public async getTodoById(todoId: string): Promise<Todo> {
        const todo: Todo = await this.todoRepo
            .createQueryBuilder('todo')
            .where("todo.id = :id", { id: todoId })
            .getOne()

        return todo
    }

    public async createTodo(task: string): Promise<Todo> {
        const todo = this.todoRepo.create({ task: task })
        await this.todoRepo.save(todo)

        return todo
    }

    public async deleteTodoById(todo: Todo): Promise<void> {                   
        await this.todoRepo.delete(todo)
    }

    public async saveTodo(todo: Todo): Promise<void> {
        await this.todoRepo.save(todo)
    }
}