import mongoose,{Schema} from 'mongoose';

interface Category extends mongoose.Document{
  name:string;
  image?:string;
  description:string;
  createAt:Date;
  state:boolean
}
const CategorySchema = new Schema({
  name:{type:String,required:[true,'category name is required']},
  image:{type:String},
  description:{type:String,required:[true,'description is required']},
  createAt:{type:Date,default: Date.now()},
  state:{type:Boolean,default:true} 
},{versionKey:false});

const Category = mongoose.model<Category>('Category',CategorySchema);

export default Category;
