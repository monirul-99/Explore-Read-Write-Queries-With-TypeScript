const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 5000

//Database Connecting
async function ConnectingDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/practice-mongoose")
        console.log(`database connection success!`);
    }
    catch(err){
        console.log(`Failed To Connect DB`,err);
    }
}

app.get("/", (req, res) => {
    res.send("Hello Server!")
})

app.listen(port, () => {
    console.log(`Server Listing Port On ${port}`);
})
