"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const router_1 = __importDefault(require("next/router"));
const apiHelper_1 = require("../apiController/helper/apiHelper");
const customAxios = axios_1.default.create({});
customAxios.interceptors.request.use((config) => {
    const tonic = (0, apiHelper_1.getUserCsrf)();
    config.withCredentials = true;
    config.headers = tonic ? {
        TONIC: (0, apiHelper_1.getUserCsrf)(),
        APITOKEN: process.env.API_KEY || "",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': process.env.FRONTEND_URL || ""
    } : {
        APITOKEN: process.env.API_KEY || "",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': process.env.FRONTEND_URL || ""
    };
    return config;
});
customAxios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    var _a;
    if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 401 && router_1.default.pathname !== '/login') {
        router_1.default.push("/login");
    }
    return Promise.reject(error);
});
exports.default = customAxios;
