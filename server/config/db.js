import mongoose from 'mongoose';
import { connect } from 'mongoose';


mongoose.set('strictQuery',false);

/**
 * !CONNECTION WITH DATABASE:
 */

const connectDb= async()=>{
    try{
         const conn = await connect(process.env.MONGODB_DB,{ useNewUrlParser: true, useUnifiedTopology: true })
         console.log('successfully connected with database'+ conn.connection.host)
    }catch(e){
        console.log('Failed to connected with database'+e)
    }
}

export default connectDb;