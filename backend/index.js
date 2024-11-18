import express, { urlencoded } from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser  from 'body-parser';
import connectDB from "./utils/db.js";
//! routes...
import userRouter from './routes/userRoute.js';
import companyRouter from "./routes/companyRoute.js";
import jobRouter from "./routes/jobRoute.js";
import applicationRouter from './routes/ApplicationRoute.js'

import dotenv from 'dotenv';
dotenv.config({});
//! running command npm run dev
const PORT = process.env.PORT ||  3000;
connectDB();

// set backend path
import path from 'path';
const _dirname = path.resolve();

//! middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));



//! routes api
app.use('/api/v1/user',userRouter);
app.use('/api/v1/company',companyRouter);
app.use('/api/v1/job',jobRouter);
app.use('/api/v1/application',applicationRouter);



//frontend file serve
app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
})

app.listen(PORT,()=>{
   
    console.log(`Server Running at port ${PORT}`);
    
})


//! deployment step
// 1.  add a path and dirname to frontend serve file
// 2. change a script and add build command  in package.json
// 3. run command npm run build and deploy our frontend or backend in 8000 port 
// 4.