"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.loginUser = void 0;
const customAxios_1 = __importDefault(require("../utilities/customAxios"));
const apiHelper_1 = require("./helper/apiHelper");
const rsaHelper_1 = require("./helper/rsaHelper");
async function loginUser(email, password) {
    try {
        const encryptedPassword = await (0, rsaHelper_1.encryptPassword)(password);
        const result = await customAxios_1.default
            .post(process.env.BACKEND_URL + "/user/login", {
            email: email,
            password: encryptedPassword
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
exports.loginUser = loginUser;
async function registerUser(name, email, password) {
    try {
        const encryptedPassword = await (0, rsaHelper_1.encryptPassword)(password);
        const result = await customAxios_1.default
            .post(process.env.BACKEND_URL + "/user/register", {
            email: email,
            name: name,
            password: encryptedPassword
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
exports.registerUser = registerUser;
