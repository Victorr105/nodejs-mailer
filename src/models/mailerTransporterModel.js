import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();
// transport protocal method
const transporter = nodemailer.createTransport(
    {
       secure:true,
       host:'smtp.gmail.com',
       port: 465,
       auth:{
        user:"njorogevictorr@gmail.com",
        pass:"hyafxvfccmzemufy"
       } 
    }
)

export {transporter}