import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors"
import { Schema, model } from "mongoose";
const app:Application = express()

//using cors
app.use(cors())

//parse data
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req:Request, res:Response, next:NextFunction) => {
    // step 1 --> create a interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name : {
            fistName: string;
            middleName ?: string;
            lastName: string
        };
        dateOfBirth ? : string;
        gender : "male" | "female";
        email? : string;
        contactNo : string;
        emergencyContactNo : string;
        presentAddress : string;
        permanentAddress: string;
    }

    // step 2 --> create a Schema using interface
    const userSchema = new Schema<IUser>({
        id: {type: String, required: true, unique: true},
        role: {type: String, required: true},
        password: {type: String, required: true},
        name: { 
            fistName:{
            type: String, required: true
            },
            middleName: {
            type: String
            }, 
            lastName: {
            type: String, required: true
            }},
        dateOfBirth: {type: String, required: true},
        gender: {type: String, enum: ["male", "female"]},
        email: {type: String},
        contactNo: {type: String, required: true},
        emergencyContactNo: {type: String, required: true},
        presentAddress: {type: String, required: true},
        permanentAddress: {type: String, required: true},
    })

    // step 1 --> create a Model
    const User = model<IUser>('User', userSchema);
    
    // step 1 --> create a Query That's Mean Data Keep To DB
    const createUserToDB = async () => {
    const user = new User({
        id: "779",
        role: "student",
        password: "monirul567",
        name : {
            fistName: "Monirul",
            lastName: "Islam",
        },
        dateOfBirth: "10-12-2019",
        gender : "male",
        email : "abc@gmail.com",
        contactNo : "0179999999",
        emergencyContactNo : "0178980089",
        presentAddress : 'USA',
        permanentAddress: "Bangladesh",
    })
    await user.save();
    }

    createUserToDB()

})

export default app