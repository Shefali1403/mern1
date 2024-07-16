const express=require('express');
const connectdb = require('./connection');
const userRoute=require('./routes/user');
const app= express();
const PORT=5000;
const dotenv=require("dotenv");
const cors=require("cors");
app.use(cors());
dotenv.config();
// CONNECTION
connectdb(process.env.URI).then(()=>console.log("Mongodb connected successfuly")).catch((err)=>console.log("error it is ", err));
app.use(express.json());
// ROUTES
app.use(userRoute);
app.listen(process.env.PORT, ()=>console.log(`Server is running on port ${process.env.PORT}`));
