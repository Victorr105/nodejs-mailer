import express from 'express';
import dotenv from 'dotenv';
import mailerRoutes from "./src/routes/mailerRoute.js";
import cors from 'cors';
dotenv.config();
// express app 
const app = express();
// middlewares
app.use (cors({origin:["http://localhost:3000"]}));
app.use(express.json({}));
//port injection
const port = process.env.PORT || 8008;

app.listen(port,()=>{
    console.log(`server running successfully on http://localhost:${port}`);
});
//callling the mpesa function


//routes
app.use("/sender", mailerRoutes)
app.get('/',(req,res)=>{
    res.json({
        message:'this is the test route'
    })
});

