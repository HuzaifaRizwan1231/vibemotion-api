import { sendMail } from "../service/mailService.js";
import {
  getMailToAdminTemplate,
  getMailToUserTemplate,
} from "../utils/mailTemplates.js";

export const contact = async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    // fields validation
    if (!fullName || !email || !phone || !message) {
      return res.status(400).send({
        message: "Missing required fields",
        success: false,
        data: null,
      });
    }

    const [mailToUser, mailToAdmin] = await Promise.all([
      // mail to user
      sendMail({
        to: email,
        subject: "Thanks for Contacting Vibe Motion",
        html: getMailToUserTemplate(fullName),
      }),
      // mail to admin
      sendMail({
        to: process.env.EMAIL_USER,
        subject: `Contact Request Received - ${fullName}`,
        html: getMailToAdminTemplate(req.body),
      }),
    ]);

    // Success
    if (mailToUser && mailToAdmin) {
      return res.status(200).send({
        message: "Form Submitted Successfully",
        success: true,
        data: null,
      });
    } else {
      throw "Can not send mail";
    }
  } catch (error) {
    console.error("One of the requests failed:", error);
    return res.status(500).send({
      message: "Error: " + error.toString(),
      success: false,
      data: null,
    });
  }
};
