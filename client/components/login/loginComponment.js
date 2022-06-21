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
const React = __importStar(require("react"));
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const Link_1 = __importDefault(require("@mui/material/Link"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const loginForm_1 = __importDefault(require("./loginForm"));
function LoginComponment() {
    return (<Grid_1.default container component="main" sx={{ height: '100vh' }}>
        <CssBaseline_1.default />
        <Grid_1.default item xs={12} sm={8} md={5} component={Paper_1.default} elevation={6} square>
            <Box_1.default sx={{
            my: 8,
            mx: 2
        }}>
            <Typography_1.default variant="h4" sx={{ fontWeight: '700' }}> 
                Todo Manager
            </Typography_1.default>
            <loginForm_1.default />
            <Typography_1.default variant="body2">
                Don&apos;t have an account? {" "}
                <Link_1.default href="/register" variant="body2">
                    Sign Up
                </Link_1.default>
            </Typography_1.default>
            </Box_1.default>
        </Grid_1.default>
        
        <Grid_1.default item xs={false} sm={4} md={7} sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}/>
    </Grid_1.default>);
}
exports.default = LoginComponment;
