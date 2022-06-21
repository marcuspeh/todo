"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const todoController_1 = require("../../apiController/todoController");
const userInput_1 = __importDefault(require("../atoms/userInput"));
const NewTodo = () => {
    const [inputBody, setInputBody] = (0, react_1.useState)("");
    const [inputTitle, setInputTitle] = (0, react_1.useState)("");
    const [bodyError, setBodyError] = (0, react_1.useState)("");
    const [titleError, setTitleError] = (0, react_1.useState)("");
    const [bannerMessage, setBannerMessage] = (0, react_1.useState)("");
    function onTitleInputChange(e) {
        if (e.target.value) {
            setTitleError("");
            setInputTitle(e.target.value);
        }
        else {
            setTitleError("Title is required");
        }
    }
    function onBodyInputChange(e) {
        if (e.target.value) {
            setBodyError("");
            setInputBody(e.target.value);
        }
        else {
            setBodyError("Body is required");
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        var isValid = true;
        if (inputTitle.length === 0) {
            setTitleError("Title is required");
            isValid = false;
        }
        if (inputBody.length === 0) {
            setBodyError("Body is required");
            isValid = false;
        }
        if (isValid) {
            const result = await (0, todoController_1.createNewTodo)(inputTitle, inputBody);
            if (result.isSuccess) {
                setBannerMessage("Todo added.");
                setInputTitle("");
                setInputBody("");
            }
            else {
                setBannerMessage(result.errorCode);
            }
        }
    };
    return (<material_1.Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, mb: 2, px: 3, py: 3, borderRadius: '10px' }} bgcolor="#d4e3fb">
            {!!(bannerMessage.length !== 0) && <material_1.Alert severity="warning">{bannerMessage}</material_1.Alert>}
            <userInput_1.default label={'Title'} type={'text'} error={titleError} onChange={onTitleInputChange}/>
            <userInput_1.default label={'Body'} type={'text'} error={bodyError} isMultiline={true} onChange={onBodyInputChange}/>
            <material_1.Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Create new
            </material_1.Button>
        </material_1.Box>);
};
exports.default = NewTodo;
