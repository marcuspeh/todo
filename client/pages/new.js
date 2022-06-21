"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navbarLayout_1 = __importDefault(require("../components/atoms/navbarLayout"));
const newTodo_1 = __importDefault(require("../components/editTodo/newTodo"));
function newTodo(props) {
    return (<navbarLayout_1.default reactElement={<newTodo_1.default />} title={"Create New Todo"}/>);
}
exports.default = newTodo;
