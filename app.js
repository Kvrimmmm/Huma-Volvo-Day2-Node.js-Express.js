import express from 'express';
import { connectDB } from './Config/db.js';
import userRoutes from './routes/user.routes.js';

const app = express();

connectDB();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});