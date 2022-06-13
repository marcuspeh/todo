import { dataSource } from "../data-source"
import Todo from "../entity/todo"

export interface ITodoDb {
    getAllTodo: () => Promise<Todo[]>
    getAllUndone: () => Promise<Todo[]>
    getAllDone: () => Promise<Todo[]>
    getTodoById: (todoId: string) => Promise<Todo>
    createTodo: (task: string) => Promise<Todo>
    saveTodo: (todo: Todo) => Promise<Todo>
}

export class TodoDb implements ITodoDb {
    todoRepo = dataSource.getRepository(Todo)
    
    public async getAllTodo(): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder('todo')
            .where("todo.isDeleted = false")
            .getMany()

        return todos
    }

    public async getAllUndone(): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder('todo')
            .where('todo.isDone = :status', { status: false })
            .andWhere("todo.isDeleted = false")
            .getMany()

        return todos
    }

    public async getAllDone(): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder('todo')
            .where('todo.isDone = :status', { status: true })
            .andWhere("todo.isDeleted = false")
            .getMany()
        
        return todos
    }

    public async getTodoById(todoId: string): Promise<Todo> {
        const todo: Todo = await this.todoRepo
            .createQueryBuilder('todo')
            .where("todo.id = :id", { id: todoId })
            .andWhere("todo.isDeleted = false")
            .getOne()

        return todo
    }

    public async createTodo(task: string): Promise<Todo> {
        const todo = this.todoRepo.create({ 
            task: task 
        })
        await this.todoRepo.save(todo)

        return todo
    }

    public async saveTodo(todo: Todo): Promise<Todo> {
        const savedTodo = await this.todoRepo.save(todo)

        return savedTodo
    }
}