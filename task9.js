import express from 'express';

const app = express();
const port = 3000;

app.get('/test-duplicate', (req, res, next) => 
    {
    const error = new Error('Duplicate Email');
    error.code = 11000; 
    next(error);
});

app.get('/test-invalid-id', (req, res, next) =>
{
    const error = new Error('Invalid ID');
    error.name = 'CastError';
    error.kind = 'ObjectId';
    next(error);
});

app.get('/test-expired-token', (req, res, next) =>
{
    const error = new Error('jwt expired');
    error.name = 'TokenExpiredError';
    next(error);
});

app.get('/test-missing-fields', (req, res, next) =>
{
    const error = new Error('Missing Required Fields');
    error.status = 400;
    next(error);
});

app.use((err, req, res, next) => 
{
    if (err.code === 11000) 
    {
        return res.status(400).json
        ({
            error: "Bad Request",
            message: "Handle Duplicate Email"
        });
    }

    if (err.name === 'CastError' && err.kind === 'ObjectId')
        {
        return res.status(400).json
        ({
            error: "Bad Request",
            message: "Handle Invalid MongoDB ObjectId"
        });
    }

    if (err.name === 'JsonWebTokenError') 
        {
        return res.status(401).json({
            error: "Unauthorized",
            message: "Handle Invalid Access Token"
        });
    }
    
    if (err.name === 'TokenExpiredError')
        {
        return res.status(401).json
        ({
            error: "Unauthorized",
            message: "Handle Expired Access Token"
        });
    }

    const status = err.status || 500;
    res.status(status).json
    ({
        error: "Error",
        message: err.message || "Internal Server Error"
    });
});

app.listen(port, () => 
{
    console.log(`Server is running on port ${port}`);
});