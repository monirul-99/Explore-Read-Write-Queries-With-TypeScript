import mongoose from "mongoose";
import app from "./app";

const port : number =  5000

//Database Connecting
async function ConnectingDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose")
        console.log(`database connection success👍👍👍`);
        app.listen(port, () => {
            console.log(`Server Listing Port On ${port}`);
        })
    }
    catch(err){
        console.log(`Failed To Connect DB`,err);
    }
}

ConnectingDB()
