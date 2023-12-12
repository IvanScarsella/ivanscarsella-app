import { BaseNextResponse } from 'next/dist/server/base-http';
import nodemailer from 'nodemailer'

export default async function sendEmail(req, res){
    try{
        const {subject, message, email} = await req.body.formData
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            // host: 'smtpro.zoho.in',
            // port: 587,
            // secure: true,
            auth:{
                user: 'scarsellaivan@gmail.com',
                pass: process.env.NODEMAILER_PW,
            }
        })
        
        const mailOption = {
            from: email,
            to: 'scarsellaivan@gmail.com',
            subject: subject,
            html: `
            <h3>Hola: ${message}</h3>
            `
        }
        
        await transporter.sendMail(mailOption)
        console.log(mailOption)
    // return BaseNextResponse.json({message: "Email sent Successfully"},{status: 200})
    res.status(200).json({message: "Email sent Successfully"},{status: 200})
} catch(error){
    res.status(500).json({ message: "Failed to send Email"}, {status: 500})
}
}