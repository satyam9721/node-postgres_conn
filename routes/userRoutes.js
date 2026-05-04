import express from 'express';
import {
createUser,

  getAllUsers,

  getUserById,

  updateUser,

  deleteUser
} from '../controllers/userController.js';

const router = express.Router();

router.post('/postdata', createUser);
router.get('/fetchdata', getAllUsers);

router.get('/fetchdata/:id', getUserById);

router.put('/updatedata/:id', updateUser);

router.delete('/deletedata/:id', deleteUser);

export default router;