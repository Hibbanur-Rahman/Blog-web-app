import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    username:string;
    email:string;
    password:string;
    profilePic:string;
}

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
});

const User= mongoose.models.user || mongoose.model<IUser>('user',UserSchema);

export default User;