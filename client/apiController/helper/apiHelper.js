"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractErrorMessage = exports.extractErrorCode = exports.getCookies = exports.clearUserToken = exports.getUserCsrf = void 0;
const universal_cookie_1 = __importDefault(require("universal-cookie"));
const constants_1 = require("../../utilities/constants");
const errorMessageMapping_1 = require("../../utilities/errorMessageMapping");
const cookies = new universal_cookie_1.default();
function getUserCsrf() {
    return cookies.get(constants_1.USER_CSRF_TOKEN);
}
exports.getUserCsrf = getUserCsrf;
function clearUserToken() {
    cookies.remove(constants_1.USER_TOKEN);
}
exports.clearUserToken = clearUserToken;
function getCookies() {
    const userToken = cookies.get(constants_1.USER_TOKEN);
    const userCsrfToken = cookies.get(constants_1.USER_CSRF_TOKEN);
    if (!userToken || !userCsrfToken) {
        return "";
    }
    return `GIN=${userToken}; TONIC=${userCsrfToken}`;
}
exports.getCookies = getCookies;
function extractErrorCode(err) {
    if (err && err.data && err.data.error && err.data.error.code) {
        return err.data.error.code;
    }
    return "";
}
exports.extractErrorCode = extractErrorCode;
function extractErrorMessage(err) {
    const errorCode = extractErrorCode(err);
    if (errorCode) {
        return errorMessageMapping_1.ErrorMapping[errorCode] || "";
    }
    return "";
}
exports.extractErrorMessage = extractErrorMessage;
