"use strict";

const express =require('express');
const cors =require('cors');
const UsersRouter =require('./auth/routes/router');
const v1 =require('./auth/routes/v1.js');
const v2 =require('./auth/routes/v2.js');


const handler500=require("./auth/error-handler/500");   
const handler404=require("./auth/error-handler/404");

const app =express();
app.use(express.json());
app.use(cors());
app.use(UsersRouter);
app.use('/api/v1' ,v1);
app.use('/api/v2' ,v2);



function start(port) {

    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    })
    
}

app.use("*",handler404);
app.use(handler500);


module.exports ={
    app:app,
    start:start
}