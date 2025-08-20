import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB()
    .then(()=>{
        app.on('error',(error)=>{
            console.log('Unable to start sertver:',error);
            throw error;
        });

        app.listen(PORT,()=>{
            console.log('Server listening on port ',PORT)
        })
    })
    .catch((err)=>{
        console.error ('MongoDB connection failed',err);
        throw err;
    })

