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
const router_1 = __importDefault(require("next/router"));
const react_1 = __importStar(require("react"));
const userController_1 = require("../../apiController/userController");
const userInput_1 = __importDefault(require("../atoms/userInput"));
const RegisterForm = () => {
    const [inputName, setInputName] = (0, react_1.useState)("");
    const [inputEmail, setInputEmail] = (0, react_1.useState)("");
    const [inputPassword, setInputPassword] = (0, react_1.useState)("");
    const [inputPassword2, setInputPassword2] = (0, react_1.useState)("");
    const [nameError, setNameError] = (0, react_1.useState)("");
    const [emailError, setEmailError] = (0, react_1.useState)("");
    const [passwordError, setPasswordError] = (0, react_1.useState)("");
    const [password2Error, setPassword2Error] = (0, react_1.useState)("");
    const [authError, setAuthError] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        if (inputEmail.length === 0 ||
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                .test(inputEmail)) {
            setEmailError("");
        }
        else {
            setEmailError('Please enter a valid email address');
        }
    }, [inputEmail]);
    (0, react_1.useEffect)(() => {
        if (inputPassword !== inputPassword2) {
            setPassword2Error("Password must match");
        }
        else {
            setPassword2Error("");
        }
    }, [inputPassword2]);
    function onEmailInputChange(e) {
        setInputEmail(e.target.value);
    }
    function onNameInputChange(e) {
        setInputName(e.target.value);
        setNameError("");
    }
    function onPasswordInputChange(e) {
        setInputPassword(e.target.value);
        setPasswordError("");
    }
    function onPassword2InputChange(e) {
        setInputPassword2(e.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        var isValid = true;
        if (inputName.length === 0) {
            setNameError("Name is required");
            isValid = false;
        }
        if (inputEmail.length === 0) {
            setEmailError("Email is required");
            isValid = false;
        }
        if (inputPassword.length === 0) {
            setPasswordError("Password is required");
            setPassword2Error("");
            isValid = false;
        }
        else if (inputPassword2.length === 0) {
            setPasswordError("");
            setPassword2Error("Password is required");
            isValid = false;
        }
        else if (inputPassword !== inputPassword2) {
            setPasswordError("");
            setPassword2Error("Password must match");
            isValid = false;
        }
        else {
            setPasswordError("");
            setPassword2Error("");
        }
        if (isValid) {
            const data = await (0, userController_1.registerUser)(inputName, inputEmail, inputPassword);
            if (data.isSuccess) {
                router_1.default.push('/login');
            }
            else {
                setAuthError(data.errorCode);
            }
        }
    };
    return (<material_1.Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, mb: 2, px: 3, py: 3, borderRadius: '10px' }} bgcolor="#d4e3fb">
            <material_1.Typography variant="h5">
                Register
            </material_1.Typography>
            {!!(authError.length !== 0) && <material_1.Alert severity="warning">{authError}</material_1.Alert>}
            <userInput_1.default label={'Name'} type={'text'} error={nameError} onChange={onNameInputChange}/>
            <userInput_1.default label={'Email'} type={'email'} error={emailError} autoComplete={'email'} onChange={onEmailInputChange}/>
            <userInput_1.default label={'Password'} type={'password'} error={passwordError} autoComplete={'current-password'} onChange={onPasswordInputChange}/>
            <userInput_1.default label={'Password'} type={'password'} error={password2Error} onChange={onPassword2InputChange}/>
            <material_1.Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
            </material_1.Button>
        </material_1.Box>);
};
exports.default = RegisterForm;
