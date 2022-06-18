import { ResponseModel } from "../models/responseModel";
import customAxios from "../utilities/customAxios";
import { extractErrorMessage } from "./helper/apiHelper";

export async function getUndone(): Promise<ResponseModel> {
    try {
        const result = await customAxios
            .get(process.env.BACKEND_URL + "/todo/getUndone")
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