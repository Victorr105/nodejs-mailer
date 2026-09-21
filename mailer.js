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
async function sendMail(to,sub,msg) {

    try {
        transporter.sendMail(
        {
            to:to,
            subject:sub,
            html:msg
        }
    );
    console.log('email sent')
    } catch (error) {
        console.error(error);
    }
    
}

console.log(transporter);


sendMail("njorovickie7@gmail.com", "this is the subject", "This is a test");