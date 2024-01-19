import nodemailer from "nodemailer";
const { SMTP_MAIL, SMTP_PASSWORD } = process.env;
const sendEmail = async (mailOptions : any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ajaykandarkar170@gmail.com",
        pass: "ikra lhsj iqsc bggk",
      },
    });
    const info = await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully:", info.response);
  } catch (error: any) {
    console.error("Error sending email:", error.message);
  }
};
export { sendEmail };
