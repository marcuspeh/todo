"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const dateFormatter_1 = require("../../utilities/dateFormatter");
const noTask_1 = __importDefault(require("./noTask"));
const todoCard_1 = __importDefault(require("./todoCard"));
const TodoList = (prop) => {
    const { data, viewMode } = prop, rest = __rest(prop, ["data", "viewMode"]);
    if (data && data.length > 0) {
        const dataMap = data.map((todo) => {
            return <todoCard_1.default key={todo.id} title={todo.title} body={todo.task} viewMode={viewMode} date={(0, dateFormatter_1.formatDate)(todo.updatedAt)} todoId={todo.id} isDone={todo.isDone}/>;
        });
        return (<>{dataMap}</>);
    }
    else {
        return <noTask_1.default />;
    }
};
exports.default = TodoList;
