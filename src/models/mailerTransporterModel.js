import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const userMail = process.env.USER_MAIL;
const userPass = process.env.USER_PASSWORD;

// transport protocal method
const transporter = nodemailer.createTransport(
    {
       secure:true,
       host:'smtp.gmail.com',
       port: 465,
       auth:{
        user:userMail,
        pass:userPass
       } 
    }
)

export {transporter}
