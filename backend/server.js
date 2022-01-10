import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js';
import menuRouter from './routers/menuRouter.js';

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

app.use('/api/users', userRouter);
app.use('/api/fooditems', menuRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})