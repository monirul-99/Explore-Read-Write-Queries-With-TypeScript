import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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

//class -> this. --> class
userSchema.static("getAdminUsers", async function getAdminUsers(){
    const admins: IUser[] = await this.find({role: 'student'});
    return admins
})


userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

const User = model<IUser, UserModel>('User', userSchema);
export default User
