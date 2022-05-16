import mongoose,{Schema,Types} from 'mongoose';

interface Service extends mongoose.Document{
  title:string;
  user:Types.ObjectId;
  description:string;
  createAt:Date;
  state:boolean;
}

const ServiceSchema = new Schema({
  title:{type:String,required:[true,'title service is required']},
  user:{type:Schema.Types.ObjectId,ref:'User'},
  description:{type:String},
  createAt:{type:Date,default: Date.now()},
  state:{type:Boolean,default:true} 
},{versionKey:false});

const Service = mongoose.model<Service>('Service',ServiceSchema);

export default Service;
