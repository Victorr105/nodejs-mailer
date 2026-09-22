import { transporter } from "../models/mailerTransporterModel.js";

async function sendMail(req, res) {
  const msg = req.body.msg;
  const to = "cxtins@gmail.com";
  const sub = "Response to your registration";

  try {
    await transporter.sendMail({
      to: to,
      subject: sub,
      html: msg,
    });
    console.log("email sent");
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
}

//console.log(transporter);
export default sendMail;
