import nodemailer from "nodemailer";
// transport protocal method
const transporter = nodemailer.createTransport(
    {
       secured:true,
       host:'smtp.gmail.com',
       port: 465,
       auth:{
        user:"njorogevictorr@gmail.com",
        pass:"hyafxvfccmzemufy"
       } 
    }
)

export {transporter}