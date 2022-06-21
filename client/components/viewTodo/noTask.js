"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const NoTask = () => {
    return <material_1.Typography variant={"body1"}>Oops, we couldn&apos;t find any todo :(</material_1.Typography>;
};
exports.default = NoTask;
