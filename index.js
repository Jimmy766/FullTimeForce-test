const express=require('express');
require('dotenv').config();

const app=express();

app.use('/api/commits',require('./routes/routes'));

app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${process.env.PORT}`);
});