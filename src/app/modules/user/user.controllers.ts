import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminUsersToDB, getUserByIdToDB, getallUsersToDB } from "./user.service";

export const createNewUser = async (req:Request, res:Response, next:NextFunction) => {
    const data = req.body
    const user = await createUserToDB(data)
    res.status(200).json({
        status : "success",
        data : user
    })
}

export const getAllUser =async (req:Request, res:Response, next:NextFunction) => {
    const user = await getallUsersToDB()
    res.status(200).json({
        status: "Success",
        data : user
    })
}

export const getUserWithId = async (req:Request, res:Response, next:NextFunction) => {
    const {id} = req.params
    const singleUser = await getUserByIdToDB(id)
    console.log(singleUser);
    res.status(200).json({
        status: "success",
        data : singleUser
    })
}

export const getAdminUser = async (req:Request, res:Response, next:NextFunction) => {
    const singleUser = await getAdminUsersToDB()
    res.status(200).json({
        status: "success",
        data : singleUser
    })
}
