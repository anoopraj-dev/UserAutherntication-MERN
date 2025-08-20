import express from 'express';
import userRouter from './routes/userRoutes.js';
import userAuth from './authentication/userAuth.js'

const app = express();

//middlewares
app.use(express.json())

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