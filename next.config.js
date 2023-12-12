/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NODEMAILER_PW: process.env.NODEMAILER_PW
    }
}

module.exports = nextConfig
