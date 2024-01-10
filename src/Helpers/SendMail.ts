import nodemailer from "nodemailer";
const { SMTP_MAIL, SMTP_PASSWORD } = process.env;
const sendEmail = async (email: string, content: string, mailSubject: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "ajaykandarkar170@gmail.com",
        pass: "Akshay@1234",
      },
    });
    const mailOptions = {
      from: "ajaykandarkar170@gmail.com",
      to: email,
      subject: mailSubject,
      html: content,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully:", info.response);
  } catch (error: any) {
    console.error("Error sending email:", error.message);
  }
};
export { sendEmail };
