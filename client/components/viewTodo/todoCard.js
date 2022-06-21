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
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const todoController_1 = require("../../apiController/todoController");
const viewType_1 = require("../../models/viewType");
const userInput_1 = __importDefault(require("../atoms/userInput"));
const TodoCard = (props) => {
    const { title, body, date, isDone, todoId, viewMode } = props, rest = __rest(props, ["title", "body", "date", "isDone", "todoId", "viewMode"]);
    const [currTitle, setTitle] = (0, react_1.useState)(title);
    const [currBody, setBody] = (0, react_1.useState)(body);
    const [titleError, setTitleError] = (0, react_1.useState)("");
    const [bodyError, setBodyError] = (0, react_1.useState)("");
    const [isEditing, setEditing] = (0, react_1.useState)(false);
    const [currIsDone, setIsDone] = (0, react_1.useState)(isDone);
    const [isNotDeleted, setIsNotDeleted] = (0, react_1.useState)(true);
    function onTitleChange(e) {
        if (e.target.value.length > 0) {
            setTitle(e.target.value);
            setTitleError("");
        }
        else {
            setTitleError("Title is required");
        }
    }
    function onBodyChange(e) {
        if (e.target.value.length > 0) {
            setBody(e.target.value);
            setBodyError("");
        }
        else {
            setBodyError("Body is required");
        }
    }
    function editButtonClick(e) {
        setEditing(true);
    }
    async function saveButtonClick(e) {
        var isValid = true;
        if (!currTitle || currTitle.length == 0) {
            setTitleError("Title is required");
            isValid = false;
        }
        if (!currBody || currBody.length == 0) {
            setTitleError("Body is required");
            isValid = false;
        }
        if (isValid) {
            const result = await (0, todoController_1.saveTodo)(todoId, currTitle, currBody);
            if (result.isSuccess) {
                setEditing(false);
            }
        }
    }
    async function deleteButtonClick(e) {
        const result = await (0, todoController_1.deleteTodo)(todoId);
        if (result.isSuccess) {
            setIsNotDeleted(false);
        }
    }
    async function markDoneButtonClick(e) {
        const result = await (0, todoController_1.markDone)(todoId);
        if (result.isSuccess) {
            setIsDone(true);
        }
    }
    async function markPendingButtonClick(e) {
        const result = await (0, todoController_1.markUndone)(todoId);
        if (result.isSuccess) {
            setIsDone(false);
        }
    }
    if (!isNotDeleted) {
        return <></>;
    }
    if (viewMode !== viewType_1.ViewType.VIEW_ALL && currIsDone !== isDone) {
        return <></>;
    }
    return (<material_1.Card variant="outlined" sx={{ my: 2 }}>
            <material_1.CardContent>
            {isEditing ? (<>
                <userInput_1.default label={'Title'} type={'text'} error={titleError} onChange={onTitleChange} defaultValue={currTitle}/>
                <material_1.Typography variant="body2" sx={{ color: 'grey', mb: 1 }}>{date}</material_1.Typography>
                <userInput_1.default label={'Body'} type={'text'} error={bodyError} onChange={onBodyChange} defaultValue={currBody} isMultiline={true}/>
                </>) : (<>
                <material_1.Typography variant='h5'>{currTitle}</material_1.Typography>
                <material_1.Typography variant="body2" sx={{ color: 'grey', mb: 1 }}>{date}</material_1.Typography>
                <material_1.Typography variant='body1'>{currBody}</material_1.Typography>
                </>)}
            </material_1.CardContent>
            <material_1.CardActions>
            {isEditing ? (<>
                <material_1.Button size="small" onClick={saveButtonClick}>Save</material_1.Button>
                <material_1.Button size="small" onClick={deleteButtonClick}>Delete</material_1.Button>
                </>) : (<>
                <material_1.Button size="small" onClick={editButtonClick}>Edit</material_1.Button>
                {currIsDone ? (<material_1.Button size="small" onClick={markPendingButtonClick}>Mark as pending</material_1.Button>) : (<material_1.Button size="small" onClick={markDoneButtonClick}>Mark as done</material_1.Button>)}
                </>)}
            </material_1.CardActions>
        </material_1.Card>);
};
exports.default = TodoCard;
