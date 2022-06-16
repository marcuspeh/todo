import User from "../entity/user"
import { dataSource } from "../data-source"
import Todo from "../entity/todo"

export interface ITodoDb {
    getAllTodo: (userId: string) => Promise<Todo[]>
    getAllUndone: (userId: string) => Promise<Todo[]>
    getAllDone: (userId: string) => Promise<Todo[]>
    getTodoById: (todoId: string, userId: string) => Promise<Todo>
    createTodo: (title: string, task: string, user: User) => Promise<Todo>
    saveTodo: (todo: Todo) => Promise<Todo>
}

export class TodoDb implements ITodoDb {
    todoRepo = dataSource.getRepository(Todo)
    
    public async getAllTodo(userId: string): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder('todo')
            .leftJoinAndSelect('todo.user', 'user')
            .where("todo.isDeleted = false")
            .andWhere("user.id = :id", { id: userId })
            .getMany()

        return todos
    }

    public async getAllUndone(userId: string): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder('todo')
            .leftJoinAndSelect('todo.user', 'user')
            .where('todo.isDone = :status', { status: false })
            .andWhere("todo.isDeleted = false")
            .andWhere("user.id = :id", { id: userId })
            .getMany()

        return todos
    }

    public async getAllDone(userId: string): Promise<Todo[]> {
        const todos: Todo[] = await this.todoRepo
            .createQueryBuilder('todo')
            .leftJoinAndSelect('todo.user', 'user')
            .where('todo.isDone = :status', { status: true })
            .andWhere("todo.isDeleted = false")
            .andWhere("user.id = :id", { id: userId })
            .getMany()
        
        return todos
    }

    public async getTodoById(todoId: string, userId: string): Promise<Todo> {
        const todo: Todo = await this.todoRepo
            .createQueryBuilder('todo')
            .leftJoinAndSelect('todo.user', 'user')
            .where("todo.id = :todoId", { todoId: todoId })
            .andWhere("todo.isDeleted = false")
            .andWhere("user.id = :userId", { userId: userId })
            .getOne()

        return todo
    }

    public async createTodo(title: string, task: string, user: User): Promise<Todo> {
        const todo = this.todoRepo.create({ 
            title: title,
            task: task,
            user: user
        })
        await this.todoRepo.save(todo)

        return todo
    }

    public async saveTodo(todo: Todo): Promise<Todo> {
        const savedTodo = await this.todoRepo.save(todo)

        return savedTodo
    }
}