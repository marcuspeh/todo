"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const todoController_1 = require("../apiController/todoController");
const dropDown_1 = __importDefault(require("../components/atoms/dropDown"));
const navbarLayout_1 = __importDefault(require("../components/atoms/navbarLayout"));
const todoList_1 = __importDefault(require("../components/viewTodo/todoList"));
const viewType_1 = require("../models/viewType");
async function getData(type) {
    if (type == viewType_1.ViewType.VIEW_ALL) {
        return (await (0, todoController_1.getAll)()).data;
    }
    else if (type == viewType_1.ViewType.VIEW_DONE) {
        return (await (0, todoController_1.getDone)()).data;
    }
    else if (type == viewType_1.ViewType.VIEW_UNDONE) {
        return (await (0, todoController_1.getUndone)()).data;
    }
    else {
        throw new Error("Not implemented");
    }
}
function Login(props) {
    const [data, setData] = (0, react_1.useState)([]);
    const [viewType, setViewType] = (0, react_1.useState)(viewType_1.ViewType.VIEW_UNDONE);
    (0, react_1.useEffect)(() => {
        (async () => {
            const result = await getData(viewType);
            setData(result);
        })();
    }, []);
    (0, react_1.useEffect)(() => {
        (async () => {
            const result = await getData(viewType);
            setData(result);
        })();
    }, [viewType]);
    function onViewTypeSelect(e) {
        setViewType(e.target.value);
    }
    const reactElement = (<>
        <dropDown_1.default value={viewType} onClick={onViewTypeSelect}/>
        <todoList_1.default data={data} viewMode={viewType}/>
    </>);
    return (<>
            <navbarLayout_1.default reactElement={reactElement} title={viewType}/>
        </>);
}
exports.default = Login;
