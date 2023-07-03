import {Schema,model} from "mongoose";


const userSchema =new Schema({
    firstName:{
        type:String,
        required:true
        
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Telephone:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    UpdatedAt:{
        type:Date,
        default:Date.now()

    }
})


const userModal = model('coustomer',userSchema);

export default userModal;