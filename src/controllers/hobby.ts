
import { Request, Response } from 'express';
import HobbyService from '../services/hobby.service';


const hobbyService = new HobbyService();
export default class HobbyController {

    public findOne = async (req: Request, res: Response): Promise<any> => {
        try {
            const hobby = await hobbyService.findOne(req.params.id);
            if (!hobby) {
                return res.status(404).send({
                    success: false,
                    message: 'Hobby not found',
                    data: null
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: hobby
                });
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    }

    public save = async (req: Request, res: Response): Promise<any> => {
        try {
            const newHobby = await hobbyService.save(req.body)
            if (newHobby) {
                res.status(201).send({
                    success: true,
                    message: 'Hobby Successfully created',
                    data: newHobby
                });
            }

        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.toString(),
                data: null
            });
        }
    }

    public update = async (req: Request, res: Response): Promise<any> => {

        const { name, passionLevel, year } = req.body
        try {
            const hobbyUpdated = await hobbyService.update(req.params.id, {  name, passionLevel, year })
            if (hobbyUpdated == null) {
                return res.status(404).send({
                    success: false,
                    message: 'Hobby not found',
                    data: null
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: hobbyUpdated
                });
            }
        } catch (error) {
            res.status(500).send({
                success: false,
                message: error.toString(),
                data: null
            });
        }
}

    public remove = async (req: Request, res: Response): Promise<any> => {
        try {
            const hobby = await hobbyService.remove(req.params.id , req.body);
            if (hobby != null) {
                return res.status(404).send({
                    success: false,
                    message: 'Hobby not found',
                    data: null
                });
            }
            res.status(204).send();
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    }

    public findAll = async (req: Request, res: Response) : Promise<any> =>{
        try {
            const hobby = await hobbyService.findAll();
            if (hobby != null) {
                res.status(200).send({
                    success: true,
                    data: hobby
                });
            } else {
                return res.status(404).send({
                    success: false,
                    message: 'Hobby not found',
                    data: null
                });
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    }

    public findUserHobby = async (req: Request, res: Response) => {
        try {
            const hobbies = await hobbyService.findHobbyByUserId(req.params.id);
            console.log('test', hobbies);
            if (hobbies != null) {
                res.status(200).send({
                    success: true,
                    data: hobbies
                });
            } else {
                return res.status(404).send({
                    success: false,
                    message: 'Hobbies not found',
                    data: null
                });
            }
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.toString(),
                data: null
            });
        }
    };

}