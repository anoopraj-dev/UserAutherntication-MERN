import express from 'express';
import userRouter from './routes/userRoutes.js';
import userAuth from './authentication/userAuth.js'

const app = express();

//middlewares
app.use(express.json())

//routes
app.use('/user',userRouter);
app.use('/user',userAuth);

export default app;