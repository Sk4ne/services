import mongoose,{Schema} from "mongoose";

interface Program extends mongoose.Document{
  name:string;
  image?:string;
  description: string;
  createAt:Date;
  state:boolean; 
}
/*==================================
 *    Program: Lic. Informatíca
==================================*/
const ProgramSchema = new Schema({
   name:{
     type:String,
     required:[true,'program name is required'],
     unique:true
   },
   image:{type:String},
   description: {type:String,required:[true,'description is required']},
   createAt:{type:Date,default: Date.now()},
   state:{type:Boolean,default:true}   
},{versionKey:false});

const Program = mongoose.model<Program>('Program',ProgramSchema);

export default Program;