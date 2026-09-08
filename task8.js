const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth.middleware');
const authorizeRoles = require('../middleware/role.middleware');

router.get('/users', authenticateToken, authorizeRoles('admin'), (req, res) =>
{
    res.json({ message: 'GET /users' });
});

router.get('/users/:id', authenticateToken, authorizeRoles('admin', 'user'), (req, res) => 
{
    res.json({ message: 'GET /users/:id' });
});

router.post('/users', authenticateToken, authorizeRoles('admin'), (req, res) => 
{
    res.json({ message: 'POST /users' });
});

router.put('/users/:id', authenticateToken, authorizeRoles('admin', 'user'), (req, res) => 
{
    res.json({ message: 'PUT /users/:id' });
});

router.delete('/users/:id', authenticateToken, authorizeRoles('admin'), (req, res) => 
{
    res.json({ message: 'DELETE /users/:id' });
});

module.exports = router;