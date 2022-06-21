"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/globals.css");
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
const head_1 = __importDefault(require("next/head"));
function MyApp({ Component, pageProps }) {
    return (<>
        <head_1.default>
            <title>Todo Manager</title>
        </head_1.default>
    <Component {...pageProps}/>
    </>);
}
exports.default = MyApp;
