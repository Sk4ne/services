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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
let validRoles = {
    values: ['STUDENT_ROLE', 'ADMIN_ROLE'],
    message: '{VALUE} is not a valid role'
};
const UserSchema = new mongoose_1.Schema({
    name: String,
    username: String,
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    image: String,
    role: {
        type: String,
        default: 'STUDENT_ROLE',
        enum: validRoles
    },
    createAt: { type: Date, default: Date.now() },
    state: { type: Boolean, default: true }
}, { versionKey: false });
// JS
// const User = mongoose.model('User',UserSchema);
// TS
const User = mongoose_1.default.model('User', UserSchema);
exports.default = User;
