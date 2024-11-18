import express from 'express';
import { login, logout, register, updateProfile } from '../controllers/userController.js';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { singleUpload } from '../middleware/multer.js';

const router = express.Router();

router.route('/register').post(singleUpload, register);
router.route('/login').post(login);
router.route('/profile/update').post(isAuthenticated,singleUpload, updateProfile);
router.route('/logout').post(logout);

export default router;