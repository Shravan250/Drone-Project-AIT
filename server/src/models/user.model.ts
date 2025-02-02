import mongoose , {Types} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    isPasswordValid(password: string): Promise<boolean>;
    generateToken():Promise<string>
}

const clientSchema = new mongoose.Schema({

    username:{
        type:String,
        unique:true,
        required:true 
    },
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true,
        select:false
    },

},{
    timestamps:true
})



clientSchema.pre('save',async function (next){

        const client = this as any 
      
        if(!client.isModified('password')){
            return next()
        }
    
        if (client.password) {
          
            this.password = await bcrypt.hash(this.password, 10);
        }
})


clientSchema.methods.isPasswordValid = async function(password:string){
       const client = this as any
       return await bcrypt.compare(password,this.password)
}

clientSchema.methods.generateToken = async function () {

   try {
     const key =  process.env.JWT_SECRET as any
 
     const token = jwt.sign(
     {_id  : this._id,
      role : this.role 
     },
     key,
     {
        expiresIn:'7d'
     }) 
     return token

   } catch (error) {
      console.log("Error while creating token")
   }

}


export const Client = mongoose.model<IUser>("Client",clientSchema)
