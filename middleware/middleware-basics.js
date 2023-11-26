const express=require('express');
const app=express();

app.use(express.json());    //builtin middlewares



//custom middlewares
const loggingMiddleware=(req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
    console.log("Line 3");
};



//Error handling
const errorHandler=(err,req,res,next)=>{
    console.error(`Error occured while sending this${req.url}`);
    res.status(500).json({error:'Something went wrong'})

}

app.use(loggingMiddleware);
app.get('/health',(req,res)=>{
    // console.log("Line 1")
    res.send(`Server is Running`);
    // console.log("Line 2");
    //throw Error('Something went wrong');
});

app.use(errorHandler);
app.listen(3000);