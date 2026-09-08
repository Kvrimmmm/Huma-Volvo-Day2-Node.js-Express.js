import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const connectDB = async () => 
{
    try {
        const mongo = await MongoMemoryServer.create();
        const uri = mongo.getUri();
        await mongoose.connect(uri);
        console.log('MongoDB Memory Server Connected Successfully');
    } catch (error)
    {
        console.error(error.message);
        process.exit(1);
    }
};