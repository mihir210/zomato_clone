import express from 'express';

const zomato = express();

zomato.use(express.json());

zomato.get('/',(req,res)=>{
    res.json({
        message:"server is running"
    })
});


const  port = 4000

zomato.listen(port,()=>{
    console.log("server is running");
})