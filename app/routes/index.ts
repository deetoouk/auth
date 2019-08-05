import express from 'express';
import IndexController from './../controllers/indexController';
const router = express.Router();

/* GET home page. */
router.get('/', IndexController.index);

export default router;
