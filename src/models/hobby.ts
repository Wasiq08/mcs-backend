import { Schema, Model, model, Document } from "mongoose";
/**
 * Interface to model the Hobby Schema for TypeScript.
 * @param name:string
 * @param passionLevel:string
 * @param year:Array
 * @param userId:String
 */

export interface IHobby extends Document {
    name: string,
    passionLevel: string,
    year: string,
    userId: string
}

const HobbySchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    passionLevel: {
        type: String
    },
    year: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    }
});

const Hobby: Model<IHobby> = model("Hobby", HobbySchema);
export default Hobby