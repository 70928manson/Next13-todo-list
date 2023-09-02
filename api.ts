import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:3001';

//get, add, delete, edit

export const getAllTodos = async (): Promise<ITask[]> => {
    const response = await fetch(`${baseUrl}/task`, { cache: 'no-store' }); //next13 dynamic data fetching
    const todos = await response.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}