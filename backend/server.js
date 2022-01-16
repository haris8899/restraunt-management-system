import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import userRouter from './routers/userRouter.js';
import menuRouter from './routers/menuRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config()
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/hazara', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port=5000
app.get('/',(req,res)=>{
    res.send("Server is ready");
});
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/fooditems', menuRouter);
const __dirname = path.resolve();
app.use('images/', express.static(path.join(__dirname, 'images/')));
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})