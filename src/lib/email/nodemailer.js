import nodemailer from "nodemailer";
import {env} from "../config/env.js";

    const transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: env.nodeMailer.user,
            pass: env.nodeMailer.pass,
        }
    })

export const sendEmail = async (to, subject, html) => {
    await transporter.sendMail({
        from: `"Sticky Notes App" <${env.nodeMailer.user}>`,
        to: to,
        subject: subject,
        html: html
    });
}