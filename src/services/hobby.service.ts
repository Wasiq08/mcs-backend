import Hobby, { IHobby } from '../models/hobby';
import User from '../models/user';
import UserService from '../services/user.service';
const userService = new UserService();

export default class HobbyService {

    public findAll = async (): Promise<any> => {
        try {
            const hobby = await Hobby.find({});
            return hobby;
        } catch (error) {
            return error
        }
    }

    public save = async (data: any): Promise<any> => {
        const { name, passionLevel, year, userId } = data;
        const hobby: IHobby = new Hobby({ name, passionLevel, year, userId });
        const newHobby = await hobby.save();
        newHobby._id;
        let hobbyObject = { hobbyId: "" }
        hobbyObject.hobbyId = newHobby._id;
        await userService.findOneAndUpdate(userId, hobbyObject);
        return newHobby;
    }

    public remove = async (id: any, payload: any): Promise<any> => {
        try {
            const { userId } = payload;
            const hobby = await Hobby.findByIdAndRemove(id);
            let hobbyObject = { hobbyId: "" }
            hobbyObject.hobbyId = id;
            const updateduser = await userService.findOneAndRemove(userId, hobbyObject);
            if (!hobby) {
                return null
            };
        } catch (error) {
            return error
        }
    }

    public findOne = async (id: String): Promise<any> => {
        try {
            const hobby = await Hobby.findById(id);
            if (!hobby) {
                return null;
            } else {
                return hobby
            }
        } catch (error) {
            return error
        }
    }
    public update = async (id: String, data: any): Promise<any> => {
        const userUpdated = await Hobby.findByIdAndUpdate(id,
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

    public findHobbyByUserId = async (id: any): Promise<any> => {
        try {
            const userHobby = await Hobby.find({ userId: id });
            return userHobby;
        } catch (error) {
            return error
        }
    }


}