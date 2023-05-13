import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser) : Promise<IUser> => {
    // const user = await new User({
    //     id: "3354",
    //     role: "student",
    //     password: "monirul567",
    //     name : {
    //         fistName: "Monirul",
    //         lastName: "Islam",
    //     },
    //     dateOfBirth: "10-12-2019",
    //     gender : "male",
    //     email : "abc@gmail.com",
    //     contactNo : "0179999999",
    //     emergencyContactNo : "0178980089",
    //     presentAddress : 'USA',
    //     permanentAddress: "Bangladesh",
    // })
    const user = new User(payload) //User is class -: user is instance
    await user.save(); //build in instance methods is save()
    await user.fullName(); //custom instance methods
    return user
    }

export const getallUsersToDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users
}

export const getUserByIdToDB = async (payload: string ): Promise<IUser | null> => {
    const user = await User.findOne({id : payload}, {name: 1, gender: 1, _id: 0})
    return user
}

export const getAdminUsersToDB = async() => {
    const admins = await User.getAdminUsers()
    return admins
}
