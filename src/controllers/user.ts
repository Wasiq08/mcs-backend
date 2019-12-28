import { Request, Response } from 'express';
import UserService from '../services/user.service';
const userService = new UserService();


export default class UserController {
    public findAll = async (req: Request, res: Response) => {
        try {
            const user = await userService.findAll();
            if (user != null) {
                res.status(200).send({
                    success: true,
                    data: user
                });
            } else {
                return res.status(404).send({
                    success: false,
                    message: 'Users not found',
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

    public findOne = async (req: Request, res: Response): Promise<any> => {
        try {
            const user = await userService.findOne(req.params.id);
            if (!user) {
                return res.status(404).send({
                    success: false,
                    message: 'User not found',
                    data: null
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: user
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

    public update = async (req: Request, res: Response): Promise<any> => {
        const { name, email } = req.body;
        try {
            const userUpdated = await userService.update(req.params.id, { name, email })
            if (userUpdated == null) {
                return res.status(404).send({
                    success: false,
                    message: 'User not found',
                    data: null
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: userUpdated
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

    public remove = async (req: Request, res: Response): Promise<any> => {
        try {
            const user = await userService.remove(req.params.id);
            if (user != null) {
                return res.status(404).send({
                    success: false,
                    message: 'User not found',
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


    public save = async (req: Request, res: Response): Promise<any> => {
        try {
            const newUser = await userService.save(req.body)
            if (newUser) {
                res.status(201).send({
                    success: true,
                    message: 'User Successfully created',
                    data: newUser
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


};

