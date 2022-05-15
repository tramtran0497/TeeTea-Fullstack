const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeNewbie = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tramtran0497@gmail.com', 
        subject: "Register successfully! We're so glad to serve you",
        text: `Welcome to TEETEA Restaurant, ${name}`,
    })
}

module.exports = sendWelcomeNewbie
