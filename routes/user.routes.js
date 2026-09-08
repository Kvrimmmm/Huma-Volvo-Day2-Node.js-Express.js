import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import authenticateToken from '../task6.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/profile', authenticateToken, (req, res) =>     
{
    res.json({ message: 'Welcome to your profile!', user: req.user });
});

export default router;