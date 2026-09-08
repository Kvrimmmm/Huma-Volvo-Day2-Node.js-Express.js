import express from 'express';

const app = express();
const port = 3000;

app.get('/users/:id', (req, res) => 
{
    const userId = req.params.id;
    res.json
    ({
        type: "Route Parameter",
        userId: userId,
        message: `Fetched user with ID: ${userId}`
    });
});

app.get('/search', (req, res) => 
{
    const role = req.query.role;
    const age = req.query.age;
    res.json
    ({
        type: "Query Parameter",
        role: role,
        age: age,
        message: `Searching for role: ${role} and age: ${age}`
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});