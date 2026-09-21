import { transporter } from "../models/mailerTransporterModel.js";

const to ="cxtins@gmail.com";
const sub = "Response to your registration";

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


export default sendMail;