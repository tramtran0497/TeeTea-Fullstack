const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const informDeleteAccount = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tramtran0497@gmail.com', 
        subject: "Sorry for saying goodbye!",
        text: `Hope to see you soon and join as a customer TEETEA Restaurant, ${name}`,
    })
}

module.exports = informDeleteAccount
