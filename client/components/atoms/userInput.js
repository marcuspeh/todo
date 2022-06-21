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
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const StyledTypography = (0, styled_1.default)(material_1.Typography) `
    color: red
`;
const UserInput = (props) => {
    const { label, type, error, isMultiline, autoComplete, defaultValue, onChange } = props, rest = __rest(props, ["label", "type", "error", "isMultiline", "autoComplete", "defaultValue", "onChange"]);
    return (<div>
        <material_1.TextField required fullWidth error={error.length !== 0} label={label} type={type} onChange={onChange} autoComplete={autoComplete} defaultValue={defaultValue} multiline={isMultiline} size='small' sx={{ mt: 2, boxShadow: 1, backgroundColor: '#FFFFFF', borderRadius: '10px' }}/>
        {!!(error.length !== 0) && <StyledTypography variant="body2">{error}</StyledTypography>}
      </div>);
};
exports.default = UserInput;
