"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.default = {
    addUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const body = req.body;
            const existEmail = yield user_1.default.findOne({ email: req.body.email });
            if (existEmail) {
                return res.status(404).json({
                    msg: 'email exists'
                });
            }
            const salt = bcryptjs_1.default.genSaltSync();
            body.password = bcryptjs_1.default.hashSync(body.password, salt);
            const user = yield user_1.default.create(body);
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).send({
                message: `An error ocurred ${err}`
            });
            next(err);
        }
    }),
    getUsers: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const users = yield user_1.default.find({});
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).send({
                message: `An error ocurred ${err}`
            });
            next();
        }
    })
};
