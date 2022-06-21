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
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const viewType_1 = require("../../models/viewType");
const DropDown = (props) => {
    const { value, onClick } = props, rest = __rest(props, ["value", "onClick"]);
    return (<material_1.FormControl fullWidth>
            <material_1.InputLabel id="selectView">View</material_1.InputLabel>
            <material_1.Select labelId="selectView" value={value} label="View" onChange={onClick}>
                <material_1.MenuItem value={viewType_1.ViewType.VIEW_ALL}>All</material_1.MenuItem>
                <material_1.MenuItem value={viewType_1.ViewType.VIEW_UNDONE}>Pending</material_1.MenuItem>
                <material_1.MenuItem value={viewType_1.ViewType.VIEW_DONE}>Done</material_1.MenuItem>
            </material_1.Select>
        </material_1.FormControl>);
};
exports.default = DropDown;
