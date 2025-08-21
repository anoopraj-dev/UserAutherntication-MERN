import express from 'express';
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js';
import userAuth from './authentication/userAuth.js';
import cors from 'cors';
import helmet from 'helmet';


dotenv.config();

const app = express();
const clientUrl = process.env.CLIENT_URL
//middlewares
app.use(express.json())

app.use(cors({
    origin: clientUrl,
    credentials:true
}));

app.use(helmet());

//routes
app.use('/user',userRouter);
app.use('/user',userAuth);

//error handling middleware

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode

    })
})

export default app;