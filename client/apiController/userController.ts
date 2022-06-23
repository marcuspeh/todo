import { ResponseModel } from "../models/responseModel";
import customAxios from "../utilities/customAxios";
import { extractErrorMessage } from "./helper/apiHelper";
import { encryptPassword } from "./helper/rsaHelper";

export async function loginUser(email: string, password: string): Promise<ResponseModel> {
    try {
        const encryptedPassword = await encryptPassword(password)
        const result = await customAxios
            .post(process.env.BACKEND_URL + "/user/login", {
                email: email,
                password: encryptedPassword
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

export async function registerUser(name: string, email: string, password: string): Promise<ResponseModel> {
    try {
        const encryptedPassword = await encryptPassword(password)
        const result = await customAxios
            .post(process.env.BACKEND_URL + "/user/register", {
                email: email,
                name: name,
                password: encryptedPassword
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

export async function logoutUser(): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .post(process.env.BACKEND_URL + "/user/logout")

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