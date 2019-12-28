import User, { IUser } from '../models/user';
import { validate } from '../validations';
import * as joiSchema from '../validations/schemas/index';

export default class UserService {

    public findAll = async (): Promise<any> => {
        try {
            const users = await User.find({})
            return users;
        } catch (error) {
            return error
        }
    }

    public save = async (data: any): Promise<any> => {
        //const payload = validate(data, joiSchema.userType);
        const { name, email } = data;
        const user: IUser = new User({ name, email });
        const newUser = await user.save();
        return newUser;
    }

    public remove = async (id: String): Promise<any> => {
        try {
            const user = await User.findByIdAndRemove(id);
            if (!user) {
                return null
            };
        } catch (error) {
            console.log(error);
            return error
        }
    }

    public findOne = async (id: String): Promise<any> => {
        try {
            const user = await User.findById(id);
            if (!user) {
                return null;
            } else {
                return user
            }
        } catch (error) {
            return error
        }
    }
    public update = async (id: String, data: any): Promise<any> => {
        const userUpdated = await User.findByIdAndUpdate(id,
            {
                $set:
                    data

            },
            { new: true }
        )
        if (!userUpdated) {
            return null
        } else {
            return userUpdated
        }
    }

    public findOneAndUpdate = async (userId: String, pushObject: any): Promise<any> => {
        const updatedUser = await User.findOneAndUpdate({ _id: userId },
            {
                $push: { hobbies: pushObject }
            }
            , function (error, success) {
                if (error) {
                    return error
                } else {
                    return success
                }
            });
        return updatedUser;
    }

    public findOneAndRemove = async (userId: String, pullObject: any): Promise<any> => {
        const updatedUser = await User.findOneAndUpdate({ _id: userId },
            {
                $pull: { hobbies: pullObject }
            }
            , function (error, success) {
                if (error) {
                    return error
                } else {
                    return success
                }
            });
        return updatedUser;
    }
}