import React from 'react';
import { TodoModel } from '../../models/todoModel';
import { formatDate } from '../../utilities/dateFormatter';
import TodoCard from '../atoms/todoCard';

interface Prop {
    data: TodoModel[]
}

const TodoList: React.FC<Prop> = (prop: Prop): JSX.Element => {
    const { data, ...rest } = prop
    
    if (data && data.length > 0) {
        const dataMap = data.map((todo) => {
            return <TodoCard key={todo.id} title={todo.title} body={todo.task} date={formatDate(todo.updatedAt)} todoId={todo.id} isDone={todo.isDone} />
        })
        return (<>{dataMap}</>)
    } else {
        return <></>
    }
}

export default TodoList;