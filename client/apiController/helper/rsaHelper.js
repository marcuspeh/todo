"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
const customAxios_1 = __importDefault(require("../../utilities/customAxios"));
const node_rsa_1 = __importDefault(require("node-rsa"));
async function encryptPassword(password) {
    const response = await customAxios_1.default.get(process.env.BACKEND_URL + "/crypto/getPublicKey");
    const publicKey = new node_rsa_1.default(response.data.publicKey);
    const encryptPassword = publicKey.encrypt(password, 'base64');
    return encryptPassword;
}
exports.encryptPassword = encryptPassword;
