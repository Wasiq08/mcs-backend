import { Router } from 'express';
import Controller from '../controllers/hobby';

const hobby: Router = Router();
const controller = new Controller();

// Retrieve all Hobbies
hobby.get('/', controller.findAll);

// Retrieve a Specific Hobby
hobby.get('/:id', controller.findOne);

hobby.get('/user/:id/', controller.findUserHobby);

// Update a Hobby with Id
hobby.put('/:id', controller.update);

// Delete a Hobby with Id
hobby.post('/:id', controller.remove);

hobby.post('/', controller.save);


export default hobby;
