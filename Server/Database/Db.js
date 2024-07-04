import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const URL= `mongodb+srv://oyeankit6:ankit2024@cluster0.gw7zvlf.mongodb.net/?retryWrites=true&w=majority`
 const Connection = async ()=>{
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true});
      console.log("Connected to DB");
     
    } catch (error) {
        console.log("Error while connecting in DB", error);
    }
}

export default Connection;