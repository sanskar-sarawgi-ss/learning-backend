import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const DbConnect = async () => {
    try{
        const initConection = await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`)
        console.log('Connect to Database port', initConection.connection.port)
    }catch(error){
        console.log(`Connect error in DB: ${process.env.MONGODB_URI}/${DBNAME}`+error)
        process.exit(1)
    }
}


export default DbConnect;