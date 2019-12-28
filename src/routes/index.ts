import { Router } from 'express';
import hobby from './hobby';
import users from './user';

const router: Router = Router();
router.use('/hobby', hobby);
router.use('/user', users);

export default router;
