import express from 'express'
import data from "./data.js"
const app = express()
const port=5000
app.get('/',(req,res)=>{
    res.send("hello world");
});
app.get('/api/fooditems',(req,res)=>{
    res.send(data.fooditems);
});
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})