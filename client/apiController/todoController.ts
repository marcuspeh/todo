import { ResponseModel } from "../models/responseModel";
import customAxios from "../utilities/customAxios";
import { extractErrorMessage } from "./helper/apiHelper";

export async function getUndone(): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .get(process.env.BACKEND_URL + "/api/todo/getUndone")
        return {
            isSuccess: true,
            errorCode: "",
            data: result.data.todos
        }
    } catch (err: any) {
        return {
            isSuccess: false,
            errorCode: extractErrorMessage(err.response)
        }
    }
}
    
export async function getDone(): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .get(process.env.BACKEND_URL + "/api/todo/getDone")
        return {
            isSuccess: true,
            errorCode: "",
            data: result.data.todos
        }
    } catch (err: any) {
        return {
            isSuccess: false,
            errorCode: extractErrorMessage(err.response)
        }
    }
}


export async function getAll(): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .get(process.env.BACKEND_URL + "/api/todo/getAll")
        return {
            isSuccess: true,
            errorCode: "",
            data: result.data.todos
        }
    } catch (err: any) {
        return {
            isSuccess: false,
            errorCode: extractErrorMessage(err.response)
        }
    }
}

export async function markDone(todoId: string): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .patch(process.env.BACKEND_URL + "/api/todo/markDone", {
                id: todoId
            })
        return {
            isSuccess: true,
            errorCode: ""
        }
    } catch (err: any) {
        return {
            isSuccess: false,
            errorCode: extractErrorMessage(err.response)
        }
    }
}

export async function markUndone(todoId: string): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .patch(process.env.BACKEND_URL + "/api/todo/markUndone", {
                id: todoId
            })
        return {
            isSuccess: true,
            errorCode: ""
        }
    } catch (err: any) {
        return {
            isSuccess: false,
            errorCode: extractErrorMessage(err.response)
        }
    }
}

export async function deleteTodo(todoId: string): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .patch(process.env.BACKEND_URL + "/api/todo/delete", {
                id: todoId
            })
        return {
            isSuccess: true,
            errorCode: ""
        }
    } catch (err: any) {
        return {
            isSuccess: false,
            errorCode: extractErrorMessage(err.response)
        }
    }
}

export async function saveTodo(todoId: string, title: string, body: string): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .patch(process.env.BACKEND_URL + "/api/todo/update", {
                id: todoId,
                title: title,
                task: body
            })
        return {
            isSuccess: true,
            errorCode: ""
        }
    } catch (err: any) {
        return {
            isSuccess: false,
            errorCode: extractErrorMessage(err.response)
        }
    }
}
export async function createNewTodo(title: string, body: string): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .post(process.env.BACKEND_URL + "/api/todo/createNew", {
                title: title,
                task: body
            })
        return {
            isSuccess: true,
            errorCode: ""
        }
    } catch (err: any) {
        return {
            isSuccess: false,
            errorCode: extractErrorMessage(err.response)
        }
    }
}