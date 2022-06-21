"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewTodo = exports.saveTodo = exports.deleteTodo = exports.markUndone = exports.markDone = exports.getAll = exports.getDone = exports.getUndone = void 0;
const customAxios_1 = __importDefault(require("../utilities/customAxios"));
const apiHelper_1 = require("./helper/apiHelper");
async function getUndone() {
    try {
        const result = await customAxios_1.default
            .get(process.env.BACKEND_URL + "/todo/getUndone");
        return {
            isSuccess: true,
            errorCode: "",
            data: result.data.todos
        };
    }
    catch (err) {
        return {
            isSuccess: false,
            errorCode: (0, apiHelper_1.extractErrorMessage)(err.response)
        };
    }
}
exports.getUndone = getUndone;
async function getDone() {
    try {
        const result = await customAxios_1.default
            .get(process.env.BACKEND_URL + "/todo/getDone");
        return {
            isSuccess: true,
            errorCode: "",
            data: result.data.todos
        };
    }
    catch (err) {
        return {
            isSuccess: false,
            errorCode: (0, apiHelper_1.extractErrorMessage)(err.response)
        };
    }
}
exports.getDone = getDone;
async function getAll() {
    try {
        const result = await customAxios_1.default
            .get(process.env.BACKEND_URL + "/todo/getAll");
        return {
            isSuccess: true,
            errorCode: "",
            data: result.data.todos
        };
    }
    catch (err) {
        return {
            isSuccess: false,
            errorCode: (0, apiHelper_1.extractErrorMessage)(err.response)
        };
    }
}
exports.getAll = getAll;
async function markDone(todoId) {
    try {
        const result = await customAxios_1.default
            .patch(process.env.BACKEND_URL + "/todo/markDone", {
            id: todoId
        });
        return {
            isSuccess: true,
            errorCode: ""
        };
    }
    catch (err) {
        return {
            isSuccess: false,
            errorCode: (0, apiHelper_1.extractErrorMessage)(err.response)
        };
    }
}
exports.markDone = markDone;
async function markUndone(todoId) {
    try {
        const result = await customAxios_1.default
            .patch(process.env.BACKEND_URL + "/todo/markUndone", {
            id: todoId
        });
        return {
            isSuccess: true,
            errorCode: ""
        };
    }
    catch (err) {
        return {
            isSuccess: false,
            errorCode: (0, apiHelper_1.extractErrorMessage)(err.response)
        };
    }
}
exports.markUndone = markUndone;
async function deleteTodo(todoId) {
    try {
        const result = await customAxios_1.default
            .patch(process.env.BACKEND_URL + "/todo/delete", {
            id: todoId
        });
        return {
            isSuccess: true,
            errorCode: ""
        };
    }
    catch (err) {
        return {
            isSuccess: false,
            errorCode: (0, apiHelper_1.extractErrorMessage)(err.response)
        };
    }
}
exports.deleteTodo = deleteTodo;
async function saveTodo(todoId, title, body) {
    try {
        const result = await customAxios_1.default
            .patch(process.env.BACKEND_URL + "/todo/update", {
            id: todoId,
            title: title,
            task: body
        });
        return {
            isSuccess: true,
            errorCode: ""
        };
    }
    catch (err) {
        return {
            isSuccess: false,
            errorCode: (0, apiHelper_1.extractErrorMessage)(err.response)
        };
    }
}
exports.saveTodo = saveTodo;
async function createNewTodo(title, body) {
    try {
        const result = await customAxios_1.default
            .post(process.env.BACKEND_URL + "/todo/createNew", {
            title: title,
            task: body
        });
        return {
            isSuccess: true,
            errorCode: ""
        };
    }
    catch (err) {
        return {
            isSuccess: false,
            errorCode: (0, apiHelper_1.extractErrorMessage)(err.response)
        };
    }
}
exports.createNewTodo = createNewTodo;
