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
const task_1 = __importDefault(require("../models/task"));
exports.default = {
    addTask: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const body = req.body;
            const task = yield task_1.default.create(body);
            res.status(200).json(task);
        }
        catch (err) {
            res.status(500).send({
                message: `An error ocurred ${err}`
            });
            next(err);
        }
    }),
    getTasks: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const tasks = yield task_1.default.find({});
            res.status(200).json(tasks);
        }
        catch (err) {
            res.status(500).send({
                message: `An error ocurred ${err}`
            });
            next();
        }
    }),
    // updateAbout: async(req,res,next)=>{
    //   try {
    //       const { id } = req.params;
    //       const update  = req.body;
    //       const about  = await About.findByIdAndUpdate(id,update,{new:true});
    //       res.status(200).json(about);
    //       const abouts = await About.find({})
    //     } catch (err) {
    //       res.status(500).send({
    //          message: `An error ocurred ${err}`
    //       }) 
    //       next(err);
    //   }
    // },
    // deleteAbout: async(req,res,next)=>{
    //   try {
    //       const { id } = req.params;
    //       const update  = req.body;
    //       const about  = await About.findByIdAndUpdate(id,{state:false},{new:true});
    //       res.status(200).json({message:'About delete succesfully'});
    //     } catch (err) {
    //       res.status(500).send({
    //          message: `An error ocurred ${err}`
    //       }) 
    //       next(err);
    //   } 
    // }  
};
