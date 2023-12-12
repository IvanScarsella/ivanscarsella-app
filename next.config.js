/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["giphy.com"]
    },
    env:{
        NODEMAILER_PW: process.env.NODEMAILER_PW
    }
}

module.exports = nextConfig
