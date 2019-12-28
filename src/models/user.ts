import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the User Schema for TypeScript.
 * @param name:string
 * @param email:string
 * @param hobbies:Array
 */
export interface IUser extends Document {
    name: string;
    email?: string;
    hobbies: Array<any>;
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String
    },
    hobbies: [
        {
            hobbyId: { type: Schema.Types.ObjectId, ref: 'Hobby' },
            created: { type: Number }
        }
    ]
});

const User: Model<IUser> = model("User", UserSchema);
export default User;