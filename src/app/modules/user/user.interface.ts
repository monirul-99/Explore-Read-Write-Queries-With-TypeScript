import { IUser, IUserMethods } from './user.interface';
import { HydratedDocument, Model } from "mongoose";

export interface IUser {
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

//statics instance
export interface IUserMethods {
    fullName(): string;
}

//statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers():Promise<HydratedDocument<IUser, IUserMethods>>
}