import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

router.get('/', UserController.index);
router.post('/', UserController.create);

export default router;
